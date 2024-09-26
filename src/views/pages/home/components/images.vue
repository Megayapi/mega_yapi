<script setup lang="ts">
import { ref, watch } from 'vue'
import type { BestWork } from '~/core/types'

const props = defineProps<{
  bestWorks: BestWork[]
}>()

const images = ref<(string | ArrayBuffer)[]>([])

const setImage = () => {
  images.value = props.bestWorks.map(work => work.img)
}

const count = computed(() => {
  return images.value.length
})

const activeIndex = ref<number>(0)
const next = computed(() => {
  return activeIndex.value + 1 < count.value
})
const prev = computed(() => {
  return activeIndex.value !== 0
})

watch(() => props.bestWorks, (newWorks) => {
  setImage()
}, { immediate: true })
</script>

<template>
  <Galleria
    v-model:activeIndex="activeIndex"
    indicators-position="bottom"
    :value="images"
    container-class="border-round-xl overflow-hidden"
    :show-thumbnails="false"
    :show-indicators="!useAppStore().responsive"
    change-item-on-indicator-hover
  >
    <template #item="slotProps">
      <Image preview height="600" width="600" :src="`data:image/jpg;base64,${slotProps.item}`" class="border overflow-hidden" />
    </template>
  </Galleria>
  <div v-if="useAppStore().responsive" class="flex w-full mt-2 justify-content-between">
    <Button
      :disabled="!prev"
      class="w-10rem bg-transparent" icon="pi pi-arrow-left text-xl text-blue-400" @click="() => {
        if (prev)
          activeIndex--
      }"
    />
    <Button
      :disabled="!next"
      class="w-10rem bg-transparent" icon="pi pi-arrow-right text-xl text-blue-400" @click="() => {
        if (next)
          activeIndex++
      }"
    />
  </div>
</template>
