export const useApp = defineStore('app', () => {
  const showBanner = ref<boolean>(true)
  const scrollY = ref<number>(0)
  return {
    showBanner,
    scrollY,
  }
})
