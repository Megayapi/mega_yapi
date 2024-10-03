<script setup lang="ts">
import bw1 from '../../../../assets/images/best_works/bw1.jpg'
import bw2 from '../../../../assets/images/best_works/bw2.jpg'
import bw3 from '../../../../assets/images/best_works/bw3.jpg'
import bw4 from '../../../../assets/images/best_works/bw4.jpg'
import bw5 from '../../../../assets/images/best_works/bw5.jpg'
import bw6 from '../../../../assets/images/best_works/bw6.jpg'
import bw7 from '../../../../assets/images/best_works/bw7.jpg'
import bw8 from '../../../../assets/images/best_works/bw8.jpg'
import bw9 from '../../../../assets/images/best_works/bw9.jpg'
import bw10 from '../../../../assets/images/best_works/bw10.jpg'
import bw11 from '../../../../assets/images/best_works/bw11.jpg'
import bw12 from '../../../../assets/images/best_works/bw12.jpg'
import bw13 from '../../../../assets/images/best_works/bw13.jpg'
import bw14 from '../../../../assets/images/best_works/bw14.jpg'
import bw15 from '../../../../assets/images/best_works/bw15.jpg'
const images = ref<(string | ArrayBuffer)[]>([
  bw1, bw2, bw3, bw4, bw5,
  bw6, bw7, bw8, bw9, bw10,
  bw11, bw12, bw13, bw14, bw15,
])
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

const activeImage = computed(() => {
  switch (activeIndex.value) {
    case 0:
      return bw1
    case 1:
      return bw2
    case 2:
      return bw3
    case 3:
      return bw4
    case 4:
      return bw5
    case 5:
      return bw6
    case 6:
      return bw7
    case 7:
      return bw8
    case 8:
      return bw9
    case 9:
      return bw10
    case 10:
      return bw11
    case 11:
      return bw12
    case 12:
      return bw13
    case 13:
      return bw14
    case 14:
      return bw15
  }
})
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
    <template #item="">
      <img style="width: 600px; height: 600px;" :src="activeImage" class="border overflow-hidden">
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
