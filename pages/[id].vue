<script setup lang="ts">
import type { Project } from '~/types'

definePageMeta({
  name: 'project',
})
const projectStore = useProjectStore()
const currentProject = ref<Project>()
const route = useRoute()

onMounted(() => {
  const project_key = route.params.id as string
  if (!project_key) {
    navigateTo({
      name: 'home',
    })
  }
  currentProject.value = projectStore.getProjectByKey(project_key)
})
</script>

<template>
  <div>
    {{ currentProject }}
  </div>
</template>
