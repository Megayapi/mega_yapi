<script setup lang="ts">
const show = ref(true)
</script>

<template>
  <div
    v-if="show"
    class="relative bg-white/50 z-50 isolate flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 lg:min-h-12 duration-300"
  >
    <div class="flex flex-wrap items-center justify-center text-center w-full gap-x-2 gap-y-2">
      <Icon class="text-xl" name="skill-icons:instagram" />
      <p class="text-sm text-gray-900">
        <span class="hidden sm:inline">•</span>
        İnstagramdan bizi takip ederek <strong>%5 indirim</strong> kazanın.
      </p>
      <a
        href="#"
        class="ml-2 flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700"
      >
        Takip Et <span aria-hidden="true">&rarr;</span>
      </a>
    </div>

    <!-- KAPAT BUTONU -->
    <button
      type="button"
      class="absolute top-5 right-3 sm:static sm:ml-auto"
    >
      <span class="sr-only">Kapat</span>
      <Icon name="heroicons:x-mark" class="text-gray-600" @click="show = false" />
    </button>
  </div>
</template>
