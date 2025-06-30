import { allArticles } from "content-collections"

export async function onBeforePrerenderStart() {
  const URLs = allArticles.map(article => article.path)
  return URLs
}
