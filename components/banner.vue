<script setup lang="ts">
const app = useApp()
</script>

<template>
  <div
    class="relative z-50 isolate flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 py-4 lg:min-h-12 duration-300"
  >
    <!-- ARKA PLAN GÖLGELER -->
    <div class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
      <div class="aspect-577/310 w-[36.0625rem] bg-linear-to-r opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>
    <div class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
      <div class="aspect-577/310 w-[36.0625rem] bg-linear-to-r opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>

    <!-- METİN + BUTON -->
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
      @click="app.showBanner = false"
    >
      <span class="sr-only">Kapat</span>
      <Icon name="heroicons:x-mark" class="text-gray-600" />
    </button>
  </div>
</template>
