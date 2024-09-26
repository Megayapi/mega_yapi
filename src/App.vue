<script setup lang="ts">
import DynamicDialog from 'primevue/dynamicdialog'
import Toast from 'primevue/Toast'
import ConfirmDialog from 'primevue/ConfirmDialog'
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
  <Toast />
  <ConfirmDialog />
  <DynamicDialog />
  <header>
    <TheHeader />
  </header>
  <routerSide
    v-ripple="{
      pt: {
        root: {
          style: `background: var(--blue-400); opacity: 0.09`,
        },
      },
    }" class="v-ripple overflow-hidden"
  >
    <RouterView />
  </routerSide>
</template>

<style>
.p-ripple {
  position: absolute;
  overflow: hidden;
}
</style>
