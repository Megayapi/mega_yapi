<script setup lang="ts">
const hover = ref(false)

const { data: home } = await useAsyncData('about', () =>
  queryCollection('about').first())

const tel = computed(() => home.value?.phones[0]
  ? `tel:+9${home.value?.phones[0].split(' ').join('')}`
  : '',
)
</script>

<template>
  <a
    :href="tel"
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
