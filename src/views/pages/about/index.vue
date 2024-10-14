<script setup lang="ts">
const adminStore = useAdminStore()
</script>

<template>
  <div :class="`flex flex-column text-center align-items-center overflow-auto ${!useAppStore().responsive ? 'p-8 justify-content-center' : 'p-2 justify-content-start'} `">
    <div class="h-full scrollable-content">
      {{ adminStore.company.about }}
      <div class="h-5rem" />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.fontt {
  font-family: 'Poppins', sans-serif;
}

.scrollable-content {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
</style>
