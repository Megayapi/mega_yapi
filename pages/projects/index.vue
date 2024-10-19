<script setup>
import Ayna from '../../assets/projects/ayna/1.jpg'
import Bakim from '../../assets/projects/bakim/1.jpg'
import Cambalkon from '../../assets/projects/cambalkon/1.jpg'
import Dusakabin from '../../assets/projects/dusakabin/1.jpg'
import Korkuluk from '../../assets/projects/korkuluk/1.jpg'
import Plise from '../../assets/projects/plise/1.jpg'
import Pvc from '../../assets/projects/pvc/1.jpg'
import Yenileme from '../../assets/projects/yenileme/1.jpg'

definePageMeta({
  name: 'projects',
})
const projects = [
  { label: 'Cam Balkon Sistemler', img: Cambalkon, to: 'camBalkon' },
  { label: 'Ayna Tasarımı', img: Ayna, to: 'ayna' },
  { label: 'Yenileme', img: Yenileme, to: 'yenileme' },
  { label: 'Bakım ve Onarım', img: Bakim, to: 'bakimOnarim' },
  { label: 'PVC', img: Pvc, to: 'pvc' },
  { label: 'Duşakabin', img: Dusakabin, to: 'dusakabin' },
  { label: 'Plise Perde ve Sineklik', img: Plise, to: 'plise' },
  { label: 'Korkuluk', img: Korkuluk, to: 'korkuluk' },
]
</script>

<template>
  <div class="flex overflow-y-auto overflow-x-hidden flex-wrap h-full z-0">
    <CardProject
      v-for="(project, index) in projects" :key="index"
      :project="project"
      class="flex-1 z-50"
      @click="navigateTo({
        name: project.to,
      })"
    />
  </div>
</template>
