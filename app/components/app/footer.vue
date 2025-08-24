<script setup lang="ts">
const { data: home } = await useAsyncData('about', () =>
  queryCollection('about').first())
</script>

<template>
  <footer class="bg-[#0d1126] text-gray-300 pt-16 pb-8 px-6 mt-24">
    <div class="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
      <!-- Sütun 1: Hakkında -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">
          Hakkımızda
        </h3>
        <p class="text-sm leading-relaxed opacity-80">
          {{ home?.description }}
        </p>
      </div>

      <!-- Sütun 2: Bağlantılar -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">
          Bağlantılar
        </h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="#home" class="hover:text-white transition">
              Anasayfa
            </a>
          </li>
          <li>
            <a href="#comments" class="hover:text-white transition">
              Müşteri Yorumları
            </a>
          </li>
          <li>
            <a href="#contact" class="hover:text-white transition">
              İletişim
            </a>
          </li>
          <li>
            <a href="#projects" class="hover:text-white transition">
              Hizmetlerimiz
            </a>
          </li>
        </ul>
      </div>

      <!-- Sütun 3: İletişim -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">
          İletişim
        </h3>
        <ul class="space-y-2 text-sm">
          <li v-for="(p, i) in home?.phones" :key="i">
            📞 {{ p }}
          </li>
          <li>📍 {{ home?.address }}</li>
          <li>✉️ {{ home?.email }}</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
      <p>&copy; {{ new Date().getFullYear() }} Mega Yapı. Tüm hakları saklıdır.</p>
      <p class="mt-1">
        Made by
        <a href="https://atlaxt.me" target="_blank" rel="noopener" class="text-white hover:underline font-semibold">
          @atlaxt
        </a>
      </p>
    </div>
  </footer>
</template>
