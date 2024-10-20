<script setup lang="ts">
const banner = ref<boolean>(false)
</script>

<template>
  <div :class="`absolute top-4 ${banner ? '-left-[310px]' : 'left-0'} mr-4 sm:hidden animation-all duration-300 delay-100`">
    <div
      :class="`flex gap-2 h-12 text-gray-950 rounded-r-xl ${banner ? 'bg-green-400' : 'bg-primary-400'} cursor-pointer flex justify-center items-center p-1`"
      @click="banner = !banner"
    >
      <div class="text-sm font-light text-center">
        İnstagramdan Bizi Takip Ederek %5 İndirim Kazanın!
      </div>
      <Icon class="text-3xl" :name="banner ? 'hugeicons:discount' : 'uiw:left'" />
    </div>
  </div>
</template>
