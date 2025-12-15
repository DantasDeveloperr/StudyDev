import fetch from "node-fetch";

/**
 * Busca textos (títulos + corpo) de subreddits
 * @param {string[]} subreddits
 * @returns {Promise<string[]>}
 */
export async function getTextsFromReddit(subreddits) {
  const texts = [];

  for (const subreddit of subreddits) {
    const url = `https://www.reddit.com/r/${subreddit}.json?limit=50`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "StudyDev-WordAnalyzer/1.0"
      }
    });

    if (!response.ok) {
      console.error(`Erro ao acessar r/${subreddit}`);
      continue;
    }

    const data = await response.json();

    data.data.children.forEach(post => {
      if (post.data.title) {
        texts.push(post.data.title);
      }

      if (post.data.selftext) {
        texts.push(post.data.selftext);
      }
    });
  }

  return texts;
}
