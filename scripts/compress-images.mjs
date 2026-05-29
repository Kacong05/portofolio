/**
 * Compress every image inside public/images/.
 *
 * Strategy
 * --------
 * - PNG  -> resize max 1600px wide, keep PNG, max compression
 * - JPEG -> resize max 1600px wide, quality 82, mozjpeg
 *
 * Files are overwritten in place. A backup with the suffix `.original`
 * is created on the first run so you can revert if needed.
 *
 * Run with: `npm run compress:images`
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd(), 'public/images');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 82;

const SUPPORTED = new Set(['.jpg', '.jpeg', '.png']);

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(p);
    } else {
      yield p;
    }
  }
}

function fmt(bytes) {
  return (bytes / 1024).toFixed(1).padStart(8) + ' KB';
}

async function compress(file) {
  const ext = path.extname(file).toLowerCase();
  if (!SUPPORTED.has(ext)) return null;
  if (file.endsWith('.original')) return null;

  const before = (await fs.stat(file)).size;

  // Skip files smaller than 80 KB; usually not worth the quality hit.
  if (before < 80 * 1024) return { file, before, after: before, skipped: true };

  // Backup original once
  const backup = file + '.original';
  try {
    await fs.access(backup);
  } catch {
    await fs.copyFile(file, backup);
  }

  const input = sharp(backup); // always compress from the pristine source
  const meta = await input.metadata();
  const targetWidth = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width;

  let pipeline = input.resize({ width: targetWidth, withoutEnlargement: true });

  if (ext === '.png') {
    pipeline = pipeline.png({
      compressionLevel: 9,
      palette: true, // try indexed palette when possible
      quality: 90,
      effort: 10,
    });
  } else {
    pipeline = pipeline.jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true,
      progressive: true,
    });
  }

  const buffer = await pipeline.toBuffer();

  // Only overwrite if the new file is actually smaller
  if (buffer.length < before) {
    await fs.writeFile(file, buffer);
    return { file, before, after: buffer.length, skipped: false };
  }

  return { file, before, after: before, skipped: true };
}

async function main() {
  console.log(`\nCompressing images in ${ROOT}\n`);
  let totalBefore = 0;
  let totalAfter = 0;
  const rows = [];

  for await (const f of walk(ROOT)) {
    const r = await compress(f);
    if (!r) continue;
    rows.push(r);
    totalBefore += r.before;
    totalAfter += r.after;
  }

  rows.sort((a, b) => b.before - a.before);
  for (const r of rows) {
    const rel = path.relative(process.cwd(), r.file);
    const tag = r.skipped ? 'skip' : 'done';
    const delta = r.before - r.after;
    const pct = r.before > 0 ? ((delta / r.before) * 100).toFixed(0) : '0';
    console.log(
      `[${tag}] ${fmt(r.before)} -> ${fmt(r.after)}  (-${pct}%)  ${rel}`
    );
  }

  const saved = totalBefore - totalAfter;
  const pct = totalBefore > 0 ? ((saved / totalBefore) * 100).toFixed(1) : '0';
  console.log(
    `\nTotal: ${fmt(totalBefore)} -> ${fmt(totalAfter)}  (saved ${fmt(saved)}, -${pct}%)`
  );
  console.log(
    `Backups saved as *.original next to each compressed file.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
