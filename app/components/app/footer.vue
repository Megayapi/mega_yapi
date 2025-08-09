<template>
  <footer class="bg-[#0d1126] text-gray-300 pt-16 pb-8 px-6">
    <div class="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
      <!-- Sütun 1: Hakkında -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">
          Hakkımızda
        </h3>
        <p class="text-sm leading-relaxed opacity-80">
          <!-- Buraya firma hakkında kısa bir açıklama yazabilirsin -->
          Mega Yapı olarak cam balkon, PVC doğrama ve ayna uygulamalarıyla yaşam alanlarınıza estetik ve fonksiyonellik katıyoruz. Yüksek işçilik kalitesi ve müşteri memnuniyetini ön planda tutarak güvenilir, hızlı ve profesyonel hizmet sunuyoruz
        </p>
      </div>

      <!-- Sütun 2: Bağlantılar -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">
          Bağlantılar
        </h3>
        <ul class="space-y-2 text-sm">
          <li>
            <button class="hover:text-white transition" @click="navigateToSection('home')">
              Anasayfa
            </button>
          </li>
          <li>
            <button class="hover:text-white transition" @click="navigateToSection('comments')">
              Müşteri Yorumları
            </button>
          </li>
          <li>
            <button class="hover:text-white transition" @click="navigateToSection('contact')">
              İletişim
            </button>
          </li>
          <li>
            <button class="hover:text-white transition" @click="navigateToSection(useProjectStore().projects[0].href.replace('#', ''))">
              Hizmetlerimiz
            </button>
          </li>
        </ul>
      </div>

      <!-- Sütun 3: İletişim -->
      <div>
        <h3 class="text-lg font-semibold mb-4 text-white">
          İletişim
        </h3>
        <ul class="space-y-2 text-sm">
          <li>📞 0 544 960 69 80</li>
          <li>📞 0 536 823 30 70</li>
          <li>📍 Bursa / Yıldırım</li>
          <li>✉️ info@megayapi.com</li>
        </ul>
      </div>
    </div>

    <div class="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
      <p>&copy; {{ new Date().getFullYear() }} Mega Yapı. Tüm hakları saklıdır.</p>
      <p class="mt-1">
        Made by
        <a
          href="https://atlaxt.me"
          target="_blank"
          rel="noopener"
          class="text-white hover:underline font-semibold"
        >
          @atlaxt
        </a>
      </p>
    </div>
  </footer>
</template>
