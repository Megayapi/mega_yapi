<script setup lang="ts">
import type { Photo } from '../../../images/index'
import images from '../../../images/index'

defineProps<{ project: any }>()
</script>

<template>
  <div class="flex flex-col bg-white p-4 rounded-lg shadow-md border border-zinc-300 z-10">
    <h2 class="text-2xl py-3 font-semibold">
      {{ project.title }}
    </h2>
    <img
      :src="images.filter((img: Photo) => img.key === content.getProjectKey(project.path)).reverse()[0]?.url" alt=""
      class="object-cover h-64"
    >
    <div class="h-24 text-md py-4">
      <p class="line-clamp-3 mt-3 indent-4">
        {{ project.description }}
      </p>
    </div>

    <div class="mt-4 justify-end flex">
      <button class="text-sm hover:scale-110 duration-300 cursor-pointer">
        devamını oku...
      </button>
    </div>
  </div>
</template>
