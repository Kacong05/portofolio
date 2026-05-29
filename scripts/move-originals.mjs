/**
 * Move every `*.original` backup out of `public/images/` into
 * `_backup-original/` at the project root, preserving folder structure.
 *
 * The backups stay safe (still on disk) but are no longer shipped with
 * the app and don't clutter the public/ tree.
 *
 * Run with: `npm run originals:move`
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const SOURCE_ROOT = path.resolve(process.cwd(), 'public/images');
const TARGET_ROOT = path.resolve(process.cwd(), '_backup-original');

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

async function main() {
  let moved = 0;
  let totalBytes = 0;

  for await (const file of walk(SOURCE_ROOT)) {
    if (!file.endsWith('.original')) continue;

    const rel = path.relative(SOURCE_ROOT, file);
    const dest = path.join(TARGET_ROOT, rel);

    await fs.mkdir(path.dirname(dest), { recursive: true });

    try {
      await fs.rename(file, dest);
    } catch (err) {
      // Cross-device fallback (rename can fail across drives)
      if (err.code === 'EXDEV') {
        await fs.copyFile(file, dest);
        await fs.unlink(file);
      } else {
        throw err;
      }
    }

    const stat = await fs.stat(dest);
    totalBytes += stat.size;
    moved += 1;
    console.log(`moved  ${rel}`);
  }

  if (moved === 0) {
    console.log('No `.original` files found.');
    return;
  }

  console.log(
    `\nMoved ${moved} files (${(totalBytes / 1024 / 1024).toFixed(2)} MB) ` +
      `to ${path.relative(process.cwd(), TARGET_ROOT)}/`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
