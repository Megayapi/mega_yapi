<script setup lang="ts">
// import Cards from './widgets/cards.vue'
const adminStore = useAdminStore()
</script>

<template>
  <div
    v-if="!useAppStore().responsive"
    v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
    class="gap-3 animation-duration-1000 flex-column w-full align-items-center flex justify-content-evenly overflow-hidden"
  >
    <label
      class="flex my-8 text-center align-items-center pt-4 px-8 w-full"
    >
      {{ adminStore.company.about }}
    </label>
    <!-- <label class="border-bottom-1 border-gray-700 text-xl w-full flex justify-content-center"> EKİBİMİZ </label>
    <div class="flex gap-2 h-full overflow-auto w-full">
      <Cards />
    </div> -->
  </div>
  <div
    v-else
    class="overflow-auto h-full fontt"
  >
    <div class="flex text-center p-3 w-full">
      {{ adminStore.company.about }}
    </div>
    <!-- <div class="border-bottom-1 border-gray-700 text-xl w-full flex justify-content-center mt-5">
      {{ "EKİBİMİZ" }}
    </div>
    <div class="flex gap-2 overflow-auto w-full h-screen">
      <Cards />
    </div> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.fontt {
  font-family: 'Poppins', sans-serif;

}
</style>

<route lang="yaml">
name: about
path: /about
meta:
  layout: default
      </route>
