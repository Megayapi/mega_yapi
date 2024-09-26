<script setup lang="ts">
const adminStore = useAdminStore()
</script>

<template>
  <div v-if="useAdminStore().works" class="w-full h-full">
    <Projects :works="adminStore.works" />
  </div>
</template>

<route lang="yaml">
name: projects
path: /projects
meta:
  layout: default
      </route>
