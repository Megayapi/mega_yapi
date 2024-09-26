<script setup lang="ts">
import Map from './widgets/map.vue'
import Contact from './widgets/contact.vue'
</script>

<template>
  <div v-if="!useAppStore().responsive" class="w-full h-full flex justify-content-center align-items-center">
    <div
      v-animateonscroll="{ enterClass: 'fadeinleft' }"
      class="w-full flex justify-content-center align-items-center h-full animation-duration-1000 animation-ease-in-out p-8"
    >
      <Map />
    </div>
    <div
      v-animateonscroll="{ enterClass: 'fadeinright' }"
      class="w-full h-full animation-duration-1000 animation-ease-in-out mb-8"
    >
      <Contact />
    </div>
  </div>
  <div
    v-else
    class="w-full h-full flex flex-column justify-content-start overflow-scroll fontt"
  >
    <div
      class="w-full"
    >
      <Map />
    </div>
    <div
      class="w-full h-screen"
    >
      <Contact />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.fontt {
  font-family: 'Poppins', sans-serif;

}
</style>

<route lang="yaml">
name: contact
path: /contact
meta:
  layout: default
          </route>
