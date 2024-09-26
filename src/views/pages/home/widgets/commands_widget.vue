<script setup lang="ts">
import Carousel from 'primevue/carousel'
const adminStore = useAdminStore()
</script>

<template>
  <Carousel
    v-if="!useAppStore().responsive"
    v-animateonscroll="{ enterClass: 'flipup', leaveClass: 'fadeout' }"
    :value="adminStore.commands"
    :show-navigators="false"
    :num-visible="3"
    :num-scroll="2"
    class="px-5 py-1 w-full animation-duration-1000 animation-ease-in-out border-round-2xl overflow-hidden"
  >
    <template #item="props">
      <div class="flex justify-content-center">
        <Commands
          :name="props.data.name"
          :rate="props.data.rate"
          :command="props.data.command"
          :color="props.data.color"
        />
      </div>
    </template>
  </Carousel>

  <Carousel
    v-else
    :value="adminStore.commands"
    :show-navigators="false"
    :num-visible="1"
    :num-scroll="1"
    class="w-full border-round-2xl overflow-hidden"
  >
    <template #item="props">
      <div class="flex justify-content-center">
        <Commands
          :name="props.data.name"
          :rate="props.data.rate"
          :command="props.data.command"
          :color="props.data.color"
        />
      </div>
    </template>
  </Carousel>
</template>
