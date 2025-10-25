<script setup lang="ts">
const { data: home } = await useAsyncData('about', () =>
  queryCollection('about').first())

const phoneRaw = computed(() => home.value?.phones?.[0] || '')

const tel = computed(() =>
  phoneRaw.value ? `tel:+9${phoneRaw.value.split(' ').join('')}` : '',
)

const wp = computed(() =>
  phoneRaw.value ? `https://wa.me/9${phoneRaw.value.split(' ').join('')}` : '',
)
</script>

<template>
  <div class="fixed bottom-6 right-6 z-[999] flex gap-3">
    <a
      :href="tel"
      class="group bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 py-3 px-4 rounded-full shadow-lg duration-200"
    >
      <Icon name="line-md:phone-call-loop" class="text-xl group-hover:scale-110 duration-200" />
      <span class="hidden sm:inline text-sm font-medium">Ara</span>
    </a>

    <a
      :href="wp"
      target="_blank"
      class="group bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 py-3 px-4 rounded-full shadow-lg duration-200"
    >
      <Icon name="mdi:whatsapp" class="text-xl group-hover:scale-110 duration-200" />
      <span class="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  </div>
</template>
