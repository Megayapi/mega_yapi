<script setup lang="ts">
defineProps<{
  name: string
  img: string | ArrayBuffer
  about: string
}>()
</script>

<template>
  <div class="flex px-5 border-round-3xl gap-3 w-full">
    <div style="min-width: 100px; max-height: 100px" class="my-4 border-circle overflow-hidden">
      <Image :src="img" height="100" width="100" />
    </div>
    <div class="flex flex-column gap-1 w-full">
      <label class="text-xl pt-2 font-semibold text-blue-400"> {{ name }} </label>
      <div class="border-left-3 h-full mt-2 mb-3 pl-3 border-blue-400">
        {{ about }}
      </div>
    </div>
  </div>
</template>
