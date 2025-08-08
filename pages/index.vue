<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
})

const projectStore = useProjectStore()

onMounted(() => {
  const targetId = sessionStorage.getItem('scrollToSection')
  if (targetId) {
    sessionStorage.removeItem('scrollToSection')
    const el = document.getElementById(targetId)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }
})
</script>

<template>
  <SectionHome class="mb-12" />
  <SectionProject v-for="project in projectStore.projects" :key="project.key" :project class="lg:my-10 my-6" />
  <SectionComments />
  <SectionContact />
</template>
