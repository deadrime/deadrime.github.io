import type { TocLink } from '@nuxt/content'
import { useThrottleFn } from '@vueuse/core'

const unwrapLinks = (links: TocLink[]) => {
  const result: TocLink[] = []

  const addLink = (link: TocLink) => {
    result.push(link)
    if (link.children) {
      link.children.forEach(addLink)
    }
  }

  links.forEach(addLink)

  return result
}

export function useActiveHeader(links: TocLink[], initialId?: string, topOffset = 400) {
  const activeHeadingId = ref<string | undefined>(initialId)
  const allLinks = unwrapLinks(links)
  const elementById = {} as Record<string, HTMLElement>

  const handleScroll = () => {
    const items = allLinks
      .map((i) => {
        const element = elementById[i.id] || document.getElementById(i.id)!
        return { ...i, element }
      })
      .filter(({ element }) => !!element)

    const headingBoxes = items.map(({ id, element }) => {
      return { id, box: element.getBoundingClientRect() }
    })

    let firstHeadingInViewport = headingBoxes.find(({ box }) =>
      box.bottom > 0 && box.bottom < topOffset && box.bottom <= window.innerHeight,
    )

    if (!firstHeadingInViewport) {
      firstHeadingInViewport = headingBoxes.toReversed().find(({ box }) => box.bottom < topOffset)
    }

    if (!firstHeadingInViewport) {
      activeHeadingId.value = undefined
    }
    else if (firstHeadingInViewport.id !== activeHeadingId.value) {
      activeHeadingId.value = firstHeadingInViewport.id
    }
  }

  const throttledScroll = useThrottleFn(handleScroll, 150)

  onMounted(() => {
    window.addEventListener('scroll', throttledScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', throttledScroll)
  })

  return activeHeadingId
}
