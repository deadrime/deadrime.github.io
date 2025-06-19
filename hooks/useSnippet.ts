export const useSnippet = async (path: string) => {
  const { data: post } = await useAsyncData(`post_${path}`, () => {
    return queryCollection('snippets').where('path', '=', path).first()
  })
  return post
}
