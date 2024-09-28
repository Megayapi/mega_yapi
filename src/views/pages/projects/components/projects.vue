<script setup lang="ts">
import p1 from '../../../../assets/images/projects/p1.jpg'
import p2 from '../../../../assets/images/projects/p2.jpg'
import p3 from '../../../../assets/images/projects/p3.jpg'
import p4 from '../../../../assets/images/projects/p4.jpg'
import p5 from '../../../../assets/images/projects/p5.jpg'
import p6 from '../../../../assets/images/projects/p6.jpg'
import p7 from '../../../../assets/images/projects/p7.jpg'
import type { Work } from '~/core/types'

const props = defineProps<{
  works: Work[]
}>()
const index = ref<number>(0)
const activeIndex = ref<number>(index.value)
const updateIndex = (newIndex: number | undefined) => {
  if (newIndex !== undefined)
    activeIndex.value = newIndex
}

const activeImage = computed(() => {
  switch (activeIndex.value) {
    case 0:
      return p1
    case 1:
      return p2
    case 2:
      return p3
    case 3:
      return p4
    case 4:
      return p5
    case 5:
      return p6
    case 6:
      return p7
  }
})
</script>

<template>
  <div v-if="!useAppStore().responsive" class="flex justify-content-between overflow-hidden gap-5 w-full h-full">
    <div v-animateonscroll="{ enterClass: 'fadeinleft' }" class="w-full overflow-hidden m-5 border-round-xl animation-duration-1000 animation-ease-in-out">
      <img class="h-full" :src="activeImage">
    </div>
    <Accordion
      v-animateonscroll="{ enterClass: 'fadeinright' }"
      class="flex flex-column mt-5 gap-2 animation-duration-1000 animation-ease-in-out w-full"
      collapse-icon="none"
      :active-index="index"
      @update:active-index="updateIndex"
    >
      <AccordionTab v-for="work in props.works" :key="work.id" class="w-full" content-class="w-full" :header="work.name">
        <label class="p-2">{{ work.about }}</label>
      </AccordionTab>
    </Accordion>
  </div>
  <div v-else class="h-full overflow-auto">
    <div class="h-screen">
      <div class="overflow-hidden m-4 border-round-xl ">
        <img class="w-full" :src="activeImage">
      </div>
      <Accordion
        class="flex flex-column  h-full"
        collapse-icon="none"
        :active-index="index"
        @update:active-index="updateIndex"
      >
        <AccordionTab v-for="work in props.works" :key="work.id" class="w-full" content-class="w-full" :header="work.name">
          <label>{{ work.about }}</label>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>
