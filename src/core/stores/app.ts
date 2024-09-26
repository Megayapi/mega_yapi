export const useAppStore = defineStore('App Store', () => {
  const screenSize = ref(window.innerWidth)

  const updateWidth = () => {
    screenSize.value = window.innerWidth
  }

  const responsive = computed(() => {
    return screenSize.value < 960
  })

  return {
    screenSize,
    responsive,

    updateWidth,
  }
})
