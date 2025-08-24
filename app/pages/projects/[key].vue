<script setup lang="ts">
import images from '../../../images/index'

definePageMeta({
  name: 'project',
})
const paramProjectsKey = useRoute().params.key

const { data: project } = await useAsyncData('project', () =>
  queryCollection('projects')
    .where('path', '=', `/projects/${paramProjectsKey}`)
    .first())
</script>

<template>
  <div class="max-w-7xl flex flex-col mx-auto mt-12">
    <div class="content">
      <ContentRenderer v-if="project" :value="project" />
    </div>

    <div class="columns-2 gap-4 w-full mt-12">
      <img
        v-for="(img, i) in images.filter(img => img.key === content.getProjectKey(project?.path ?? ''))"
        :key="i"
        :src="img.url"
        alt=""
        class="w-full mb-4 rounded-lg object-cover break-inside-avoid"
      >
    </div>
  </div>
</template>

<style>
.content h1 {
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
  margin: 1.5rem 0 1rem;
}

.content h2 {
  font-size: 1.875rem; /* 30px */
  font-weight: 600;
  margin: 1.25rem 0 0.75rem;
}

.content h3 {
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  margin: 1rem 0 0.5rem;
}

.content h4 {
  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  margin: 0.75rem 0 0.5rem;
}

.content h5 {
  font-size: 1.125rem; /* 18px */
  font-weight: 500;
  margin: 0.5rem 0 0.25rem;
}

.content h6 {
  font-size: 1rem; /* 16px */
  font-weight: 500;
  margin: 0.5rem 0 0.25rem;
}

.content p {
  font-size: 1rem; /* 16px */
  line-height: 1.7;
  margin-bottom: 1rem;
}

.content ul,
.content ol {
  margin: 1rem 0 1rem 1.5rem;
  line-height: 1.6;
}
</style>
