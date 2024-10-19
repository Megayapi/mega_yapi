<script setup>
import Other1 from '../../assets/projects/other/1.jpg'
import Other2 from '../../assets/projects/other/2.jpg'
import Ayna from '../assets/projects/ayna/1.jpg'
import Bakim from '../assets/projects/bakim/1.jpg'
import Cambalkon from '../assets/projects/cambalkon/1.jpg'
import Dusakabin from '../assets/projects/dusakabin/1.jpg'
import Korkuluk from '../assets/projects/korkuluk/1.jpg'
import Plise from '../assets/projects/plise/1.jpg'
import Pvc from '../assets/projects/pvc/1.jpg'
import Yenileme from '../assets/projects/yenileme/1.jpg'

const items = [
  Other2,
  Other1,
  Ayna,
  Bakim,
  Cambalkon,
  Dusakabin,
  Korkuluk,
  Plise,
  Pvc,
  Yenileme,
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value)
      return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 300)
})
</script>

<template>
  <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden h-full max-w-96" arrows>
    <img :src="item" class="h-full" draggable="false">
  </UCarousel>
</template>
