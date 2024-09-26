<script setup lang="ts">
const adminStore = useAdminStore()
</script>

<template>
  <div v-if="!useAppStore().responsive" v-animateonscroll=" { enterClass: 'fadeinleft' }" class="animation-duration-1000 animation-ease-in-out oveflow-hidden">
    <Images :best-works="adminStore.bestWorks" />
  </div>
  <div v-else class="oveflow-hidden">
    <Images :best-works="adminStore.bestWorks" />
  </div>
</template>
