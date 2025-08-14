<script setup lang="ts">
const hover = ref(false)
</script>

<template>
  <a
    href="tel:05449606980"
    class="duration-300 cursor-pointer bg-green-500 hover:bg-green-600 flex items-center justify-center p-4 rounded-full"
    @mouseenter="hover = true" @mouseleave="hover = false"
  >
    <Icon
      name="line-md:phone-call-loop" :class="{
        'md:text-4xl text-2xl': hover,
        'md:text-3xl text-2xl': !hover,
      }" class="text-white duration-300"
    />
  </a>
</template>
