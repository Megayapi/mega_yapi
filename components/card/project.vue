<script setup lang="ts">
const props = defineProps<{
  project: {
    label: string
    img: string
  }
}>()
</script>

<template>
  <div
    :class="`${hoverAnimation} rounded relative min-w-[300px;] overflow-hidden min-h-[200px;] max-w-[100%] duration-100 animation-all delay-100 shadow hover:shadow-xl text-lg hover:text-2xl m-4`"
  >
    <img
      class="h-full lg:brightness-50 hover:brightness-100 duration-100 animation-all delay-100 "
      :src="props.project.img"
    >
    <div class="flex items-center justify-end px-4 py-2 absolute duration-100 animation-all delay-100 bottom-0 left-0 w-full dark:bg-gray-950 bg-gray-300 font-light ">
      <div class="flex gap-4">
        <label> {{ props.project.label }} </label>
        <UIcon name="material-symbols:arrow-forward-ios" class="text-3xl" />
      </div>
    </div>
  </div>
</template>
