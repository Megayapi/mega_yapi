<script setup lang="ts">
definePageMeta({
  name: 'home',
  path: '/',
})

const projectStore = useProjectStore()
</script>

<template>
  <SectionHome class="mb-12" />
  <SectionProject v-for="project in projectStore.projects" :key="project.key" :project class="lg:my-10 my-6" />
  <SectionComments />
  <SectionContact />
</template>
