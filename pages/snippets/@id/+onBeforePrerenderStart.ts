import { allSnippets } from "content-collections"

export async function onBeforePrerenderStart() {
  const URLs = allSnippets.map(snippet => snippet.path)
  return URLs
}
