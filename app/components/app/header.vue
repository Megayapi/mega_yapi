<script setup lang="ts">
const navItems = [
  { text: 'Hizmetlerimiz', href: 'projects' },
  { text: 'Müşteri Yorumları', href: 'comments' },
  { text: 'İletişim', href: 'contact' },
  { text: 'SSS', href: 'sss' },
]

const isOpen = ref(false)

const { data: home } = await useAsyncData('about', () =>
  queryCollection('about').first())

const tel = computed(() => home.value?.phones[0]
  ? `tel:+9${home.value?.phones[0].split(' ').join('')}`
  : '',
)

async function navigateToSection(targetId: string) {
  const route = useRoute()
  const router = useRouter()

  if (route.name !== 'home') {
    sessionStorage.setItem('scrollToSection', targetId)

    await router.push({ name: 'home' })
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  else {
    scrollToSection(targetId)
  }
}

function scrollToSection(id: string) {
  const el = document.querySelector(`#${id}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="bg-white/50 shadow w-full sticky backdrop-blur-xs top-0 z-50">
    <div class="items-center flex justify-between max-w-7xl mx-auto py-4 px-2">
      <div class="flex-1">
        <a @click="navigateToSection('home')">
          <img class="h-12 sm:h-16" src="../../assets/logo.png">
        </a>
      </div>

      <nav class="hidden lg:flex flex-1 flex-row gap-12 justify-center">
        <a
          v-for="item in navItems"
          :key="item.text"
          class="font-bold duration-300 hover:scale-110 whitespace-nowrap cursor-pointer"
          @click="navigateToSection(item.href)"
        >
          {{ item.text }}
        </a>
      </nav>

      <div class="hidden lg:flex flex-1 justify-end">
        <a
          :href="tel"
          class="text-sm font-semibold flex items-center gap-2 bg-green-500 hover:bg-green-600 duration-300 hover:scale-110 py-2 px-3 rounded-3xl text-white"
        >
          <span>Hemen Ara</span>
          <Icon name="heroicons:phone" class="text-xl" />
        </a>
      </div>

      <button
        class="lg:hidden text-2xl px-2 mt-2"
        @click="isOpen = !isOpen"
      >
        <Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" />
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="lg:hidden flex flex-col items-center gap-6 py-6 bg-white/50 shadow-md"
      >
        <a
          v-for="item in navItems"
          :key="item.text"
          class="font-semibold text-lg"
          @click="navigateToSection(item.href), isOpen = false"
        >
          {{ item.text }}
        </a>

        <a
          :href="tel"
          class="text-lg font-semibold flex items-center gap-2 bg-green-500 hover:bg-green-600 mt-6 py-2 px-4 rounded-3xl text-white"
          @click="isOpen = false"
        >
          <span>Hemen Ara</span>
          <Icon name="heroicons:phone" class="text-xl" />
        </a>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
