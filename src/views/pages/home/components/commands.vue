<script setup lang="ts">
defineProps<{
  color: string
  name: string
  rate: number
  command: string
}>()
</script>

<template>
  <div
    v-if="!useAppStore().responsive"
    style="border-color: var(--blue-400);"
    class="flex justify-content-between w-30rem h-9rem p-1 select-none"
  >
    <div class="overflow-hidden w-8rem border-round-xl flex justify-content-center p-3 align-items-center">
      <div :class="`border-1 border-${color}-200 bg-${color}-200 border-circle w-full h-full flex justify-content-center align-items-center`">
        <div :class="`text-4xl text-${color}-600 font-semibold`">
          {{ `${name[0]}${name.split(' ')[1].split('')[0]}` }}
        </div>
      </div>
      <!-- <Image image-class="h-full w-full" :src="pp" class="border-round-xl overflow-hidden" /> -->
    </div>
    <div class="flex flex-column gap-2">
      <div class="flex w-20rem align-items-start justify-content-between">
        <div class="text-leftmy-2">
          {{ name }}
        </div>
        <Rating readonly :model-value="rate" :cancel="false" />
      </div>
      <div class="border-left-2 border-blue-400 w-20rem h-full my-2 overflow-auto p-2">
        {{ command }}
      </div>
    </div>
  </div>

  <div
    v-else
    style="border-color: var(--blue-400);"
    class="flex justify-content-between h-7rem select-none gap-3 overflow-hidden"
  >
    <div :class="`border-1 border-${color}-200 w-7rem bg-${color}-200 border-circle flex justify-content-center align-items-center`">
      <div :class="`text-4xl text-${color}-600 font-semibold`">
        {{ `${name[0]} ${name.split(' ')[1].split('')[0]}` }}
      </div>
    </div>
    <div class="flex flex-column gap-2">
      <div class="flex w-15rem align-items-start justify-content-between">
        <div class="text-leftmy-2">
          {{ name }}
        </div>
        <Rating readonly :model-value="rate" :cancel="false" />
      </div>
      <div class="border-left-1 border-blue-400 w-15rem h-full my-2 overflow-auto p-2">
        {{ command }}
      </div>
    </div>
  </div>
</template>
