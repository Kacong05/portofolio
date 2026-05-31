/**
 * Fetch GitHub stats once per hour on the server.
 * Vercel will cache the response so visitors share the same data,
 * which keeps us well under the 60 req/h unauthenticated rate limit.
 */

export interface GitHubStats {
  repos: number;
  stars: number;
  gists: number;
  followers: number;
}

const FALLBACK: GitHubStats = {
  repos: 0,
  stars: 0,
  gists: 0,
  followers: 0,
};

const REVALIDATE_SECONDS = 60 * 60; // 1 hour

export async function getGitHubStats(username: string): Promise<GitHubStats> {
  try {
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    const [userResp, reposResp] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }),
    ]);

    if (!userResp.ok || !reposResp.ok) {
      console.warn(
        `[github] non-OK status (user=${userResp.status}, repos=${reposResp.status})`
      );
      return FALLBACK;
    }

    const userData = (await userResp.json()) as {
      public_repos?: number;
      public_gists?: number;
      followers?: number;
    };
    const reposData = (await reposResp.json()) as Array<{
      stargazers_count?: number;
    }>;

    const stars = Array.isArray(reposData)
      ? reposData.reduce((acc, r) => acc + (r.stargazers_count ?? 0), 0)
      : 0;

    return {
      repos: userData.public_repos ?? 0,
      stars,
      gists: userData.public_gists ?? 0,
      followers: userData.followers ?? 0,
    };
  } catch (error) {
    console.error('[github] fetch failed:', error);
    return FALLBACK;
  }
}
