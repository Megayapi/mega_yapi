<script setup lang="ts">
useHead({
  title: 'MEGA YAPI',
  htmlAttrs: { class: appMode.value },
  meta: [
    {
      name: 'app-mode',
      content: computed(() => appMode.value),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: 'favicon.svg',
    },
    ...themeLinks,
  ],
})

onMounted(() => {
  window.addEventListener('resize', useAppStore().updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', useAppStore().updateWidth)
})
</script>

<template>
  <header class="">
    <TheHeader />
  </header>
  <routerSide
    v-ripple="{
      pt: {
        root: {
          style: `background: var(--blue-400); opacity: 0.09`,
        },
      },
    }"
    class="v-ripple overflow-hidden"
  >
    <RouterView />
    <Contact />
  </routerSide>
  <Github />
</template>

<style>
body {
  font-family: "Inter var", sans-serif;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}
.p-ripple {
  position: absolute;
  overflow: hidden;
}
</style>
