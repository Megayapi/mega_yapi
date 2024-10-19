<script setup lang="ts">
defineProps<{
  icon: string
  href?: string
  noContent?: boolean
  target?: boolean
}>()
</script>

<template>
  <a
    :href :target="target ? '_blank' : ''"
    :class="`flex justify-between items-center gap-6 ${!noContent ? 'lg:w-[450px] md:w-10/12 w-10/12' : ''} ${hoverAnimation}`"
  >
    <UIcon class="text-3xl opacity-70 min-w-12" :name="icon" />
    <div class="lg:text-2xl drop-shadow-xl md:text-2xl text-lg font-light">
      <slot />
    </div>
  </a>
</template>
