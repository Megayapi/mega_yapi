<script setup lang="ts">
const app = useApp()
const scrollContainer = ref<HTMLElement>()

function handleScroll() {
  if (scrollContainer.value) {
    app.scrollY = scrollContainer.value.scrollTop
  }
}

onMounted(() => {
  scrollContainer.value?.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    ref="scrollContainer"
    class="fixed left-0 top-0 w-screen h-screen flex flex-col overflow-y-auto overflow-x-hidden scroll-smooth"
  >
    <Banner
      :class="{
        hidden: !app.showBanner,
      }"
    />
    <AppHeader class="top-0 sticky" />
    <slot />
    <AppFooter class="top-0 sticky" />
  </div>
</template>
