<script setup lang="ts">
definePageMeta({
  name: 'home',
})
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between lg:overflow-hidden overflow-y-auto">
    <div class="flex lg:flex-row flex-col items-center">
      <Galeria />
      <HomeAbout />
    </div>
    <HomeCommands class="min-h-[180px]" />
  </div>
</template>

<style scoped>
@keyframes scrollX {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.auto-scroll {
  animation: scrollX 20s  alternate;
}
</style>
