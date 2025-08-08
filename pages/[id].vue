<script setup lang="ts">
import type { Project } from '~/types'

definePageMeta({
  name: 'project',
})

const projectStore = useProjectStore()
const currentProject = ref<Project>()
const route = useRoute()

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
  if (activeImageIndex.value !== null && currentProject.value?.images.length) {
    activeImageIndex.value = (activeImageIndex.value + 1) % currentProject.value.images.length
  }
}

function showPrevImage() {
  if (activeImageIndex.value !== null && currentProject.value?.images.length) {
    activeImageIndex.value = (activeImageIndex.value - 1 + currentProject.value.images.length) % currentProject.value.images.length
  }
}

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
  const project_key = route.params.id as string
  if (!project_key) {
    navigateTo({ name: 'home' })
    return
  }
  currentProject.value = projectStore.getProjectByKey(project_key)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section v-if="currentProject" class="w-full max-w-7xl mx-auto px-4 py-12">
    <div class="text-left mb-10">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-800">
        {{ currentProject.name }}
      </h1>
      <p class="mt-4 text-gray-600 max-w-2xl">
        {{ currentProject.description }}
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <img
        v-for="(img, index) in currentProject.images"
        :key="index"
        :src="img"
        class="rounded-xl shadow-md object-cover w-full h-72 cursor-pointer transition-transform duration-300 hover:scale-105"
        alt="project image"
        @click="openModal(index)"
      >
    </div>
  </section>

  <div v-else class="w-full h-[50vh] flex justify-center items-center text-gray-500">
    Yükleniyor...
  </div>

  <Teleport to="body">
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center"
      @click.self="closeModal"
    >
      <img
        :src="currentProject?.images[activeImageIndex!]"
        class="max-w-[90vw] max-h-[90vh] rounded-lg"
        alt="modal image"
      >
      <button
        class="absolute top-4 right-6 text-white text-3xl"
        @click="closeModal"
      >
        &times;
      </button>
      <button
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        @click.stop="showPrevImage"
      >
        ‹
      </button>
      <button
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
        @click.stop="showNextImage"
      >
        ›
      </button>
    </div>
  </Teleport>
</template>
