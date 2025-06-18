export const usePost = async (path: string) => {
  const { data: post } = await useAsyncData(`post_${path}`, () => {
    return queryCollection('articles').where('path', '=', path).first()
  })
  return post
}
