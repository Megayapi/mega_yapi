<script setup lang="ts">
const adminStore = useAdminStore()
</script>

<template>
  <div :class="`flex flex-column gap-2 w-full ${!useAppStore().responsive ? 'mx-8' : 'mx-2'}`">
    <Card
      v-for="owner in adminStore.team"
      :key="owner.id"
      :about="owner.about" :img="owner.img" :name="owner.name"
    />
  </div>
</template>
