<template>
  <div v-if="!useAppStore().responsive" v-animateonscroll=" { enterClass: 'fadeinleft' }" class="animation-duration-1000 animation-ease-in-out oveflow-hidden">
    <Images />
  </div>
  <div v-else class="oveflow-hidden">
    <Images />
  </div>
</template>
