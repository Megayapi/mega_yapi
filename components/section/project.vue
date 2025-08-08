<script setup lang="ts">
import type { Project } from '~/types'

// Props
const props = defineProps<{
  project: Project
}>()

// Rastgele varyasyon üreticiler
function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

const rotation = `${randomBetween(-40, 40).toFixed(1)}deg`
const leftOffsetTop = `calc(50% - ${randomBetween(8, 30).toFixed(1)}rem)`
const leftOffsetBottom = `calc(50% + ${randomBetween(1, 36).toFixed(1)}rem)`
const opacity = randomBetween(0.15, 0.4).toFixed(2)

const activeImageIndex = ref<number | null>(null)
const isModalOpen = ref(false)

function openModal(index: number) {
  activeImageIndex.value = index
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
  activeImageIndex.value = null
}

function showNextImage() {
  if (activeImageIndex.value !== null && props.project.images.length > 0) {
    activeImageIndex.value = (activeImageIndex.value + 1) % props.project.images.length
  }
}

function showPrevImage() {
  if (activeImageIndex.value !== null && props.project.images.length > 0) {
    activeImageIndex.value
      = (activeImageIndex.value - 1 + props.project.images.length) % props.project.images.length
  }
}

// Klavye dinleme
function handleKeydown(event: KeyboardEvent) {
  if (!isModalOpen.value)
    return

  if (event.key === 'ArrowRight')
    showNextImage()
  if (event.key === 'ArrowLeft')
    showPrevImage()
  if (event.key === 'Escape')
    closeModal()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section :id="props.project.key" class="w-full lg:px-6 flex justify-center">
    <div class="lg:w-9/12 w-11/12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">
      <div class="absolute mt-128 inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          class="relative aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-700 to-blue-300 sm:w-[72.1875rem]"
          :style="{
            left: leftOffsetTop,
            rotate: rotation,
            opacity,
            clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
          }"
        />
      </div>

      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div
          class="relative aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-700 to-blue-300 sm:w-[72.1875rem]"
          :style="{
            left: leftOffsetBottom,
            rotate: rotation,
            opacity,
            clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
          }"
        />
      </div>

      <div class="flex flex-col items-start w-full lg:w-[300px] lg:sticky lg:top-20 shrink-0">
        <label class="block text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight text-balance">
          {{ props.project.name }}
        </label>
        <p
          v-if="props.project.description"
          class="mt-2 text-sm sm:text-base text-muted-foreground leading-snug"
        >
          {{ props.project.description }}
        </p>
        <!-- <button
          class="mt-4 text-sm underline cursor-pointer"
          @click="() => {
            navigateTo({
              name: 'project',
              params: {
                id: props.project.key,
              },
            })
          }"
        >
          {{ "Detayları Gör" }}
        </button> -->
      </div>

      <div class="flex lg:flex-wrap flex-row gap-6 overflow-x-auto pb-3">
        <img
          v-for="(img, key) in props.project.images"
          :key="key"
          loading="lazy"
          class="lg:max-h-128 max-h-86 rounded-xl z-999 shadow cursor-pointer"
          :src="img"
          alt=""
          @click="openModal(key)"
        >
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center"
        @click.self="closeModal"
      >
        <img
          :src="props.project.images[activeImageIndex!]"
          class="max-w-[90vw] max-h-[90vh] rounded-lg"
          alt="modal image"
        >
        <!-- Kapama butonu -->
        <button
          class="absolute top-4 right-6 text-white text-3xl"
          @click="closeModal"
        >
          &times;
        </button>
        <!-- Sol ok -->
        <button
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          @click.stop="showPrevImage"
        >
          ‹
        </button>
        <!-- Sağ ok -->
        <button
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          @click.stop="showNextImage"
        >
          ›
        </button>
      </div>
    </Teleport>
  </section>
</template>
