<script setup lang="ts">
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

const currentImage = computed(() => {
  if (props.works.length === 0 || activeIndex.value < 0 || activeIndex.value >= props.works.length)
    return ''
  else
    return props.works[activeIndex.value].img
})
</script>

<template>
  <div v-if="!useAppStore().responsive" class="flex justify-content-between overflow-hidden gap-5 w-full h-full">
    <div v-animateonscroll="{ enterClass: 'fadeinleft' }" class="w-full overflow-hidden m-5 border-round-xl animation-duration-1000 animation-ease-in-out">
      <Image preview image-style="width: 100%; height: 100%;" :src="`data:image/jpg;base64,${currentImage}`" />
    </div>
    <Accordion
      v-animateonscroll="{ enterClass: 'fadeinright' }"
      class="flex flex-column mt-5 gap-2 animation-duration-1000 animation-ease-in-out w-full"
      collapse-icon="none"
      :active-index="index"
      @update:active-index="updateIndex"
    >
      <AccordionTab v-for="work in works" :key="work.id" class="w-full" content-class="w-full" :header="work.name">
        <label class="p-2">{{ work.about }}</label>
      </AccordionTab>
    </Accordion>
  </div>
  <div v-else class="h-full overflow-auto">
    <div class="h-screen">
      <div class="overflow-hidden m-4 border-round-xl ">
        <Image preview image-style="width: 100%; height: 100%;" :src="`data:image/jpg;base64,${currentImage}`" />
      </div>
      <Accordion
        class="flex flex-column  h-full"
        collapse-icon="none"
        :active-index="index"
        @update:active-index="updateIndex"
      >
        <AccordionTab v-for="work in works" :key="work.id" class="w-full" content-class="w-full" :header="work.name">
          <label>{{ work.about }}</label>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>
