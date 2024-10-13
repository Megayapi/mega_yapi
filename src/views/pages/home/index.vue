<script setup lang="ts">
import CommandsSide from './widgets/commands_widget.vue'
import ImagesSide from './widgets/images_widget.vue'
import CoworkSide from './widgets/cowork.vue'

const appStore = useAppStore()
</script>

<template>
  <div
    v-if="!appStore.responsive"
    class="flex flex-column overflow-hidden w-full h-full"
  >
    <div class="flex w-full h-full justify-content-around overflow-y-auto px-8">
      <div class="w-full h-full flex justify-content-center align-items-center">
        <ImagesSide />
      </div>
      <div class="flex flex-column justify-content-around align-items-end">
        <Divider
          v-animateonscroll=" { enterClass: 'fadeinright' }"
          :pt="{
            content: {
              class: 'py-1 px-3 border-round-xl shadow-6',
            },
          }" align="right" type="dashed"
          class="animation-duration-1000 animation-ease-in-out"
        >
          <label class="text-2xl">{{ "ÜCRETSİZ KEŞİF İÇİN 05449606980" }}</label>
        </Divider>
        <div v-animateonscroll=" { enterClass: 'fadeinright' }" style="width: 80%;" class="text-right animation-duration-1000 animation-ease-in-out">
          {{ useAdminStore().company.about }}
        </div>
        <div class="flex w-full">
          <CoworkSide />
        </div>
      </div>
    </div>
    <div class="h-18rem w-full flex overflow-hidden justify-content-center align-items-center">
      <CommandsSide />
    </div>
  </div>
  <div v-else class="flex flex-column gap-5 h-full overflow-auto">
    <div class="flex flex-column gap-5">
      <div clasS="w-full flex justify-content-center bg-blue-400 text-xl text-center py-1">
        {{ "ÜCRETSİZ KEŞİF İÇİN 05449606980" }}
      </div>
      <div class="w-full text-center px-3">
        {{ useAdminStore().company.about }}
      </div>
      <ImagesSide />
    </div>
    <div class="flex flex-column gap-5 h-screen mb-8">
      <CoworkSide />
      <div>
        <CommandsSide />
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.fontt {
  font-family: 'Poppins', sans-serif;

}
</style>

<route lang="yaml">
name: home
path: /
meta:
  layout: default
        </route>
