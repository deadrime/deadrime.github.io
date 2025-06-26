import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehaviorType: 'smooth',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const el = document.querySelector(to.hash) as HTMLElement;

      if (el) {
        return {
          top: el.offsetTop - 20,
        }
      }
    }
    if (savedPosition) {
      return {
        left: 0,
        top: savedPosition.top
      }
    } else {
      return {
        top: 0
      };
    }
  }
};