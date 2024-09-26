<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div class="w-full h-full absolute bg-gray-900 flex flex-column justify-content-around align-items-center">
    <div class="flex flex-column gap-6 text-center">
      <label class="text-blue-400 text-8xl"> 404 </label>
      <label class="text-2xl"> Böyle Bir Sayfa Bulunmuyor </label>
    </div>
    <Button icon="pi pi-arrow-left" label="Ana Sayfaya Dön" @click="router.push({ name: 'home' })" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
