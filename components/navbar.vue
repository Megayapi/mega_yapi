<script setup lang="ts">
const isDarkMode = ref(false)

onMounted(() => {
  isDarkMode.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
})
const isOpen = ref(false)
const defaultLinks = [{
  label: 'Anasayfa',
  icon: 'material-symbols:other-houses',
  to: { name: 'home' },
  click: () => isOpen.value = false,
}, {
  label: 'Hizmetlerimiz',
  icon: 'material-symbols:home-work',
  to: { name: 'projects' },
  click: () => isOpen.value = false,
}, {
  label: 'Bize Ulaşın',
  icon: 'material-symbols:phone-enabled',
  to: { name: 'contact' },
  click: () => isOpen.value = false,
}, {
  label: 'Biz Kimiz',
  icon: 'material-symbols:groups',
  to: { name: 'about' },
  click: () => isOpen.value = false,
}, {
  class: 'flex items-center',
  icon: 'wi:moon-alt-waning-gibbous-6',
  click: () => toggleColorMode(),
}]
</script>

<template>
  <div class="w-full flex justify-between h-12 md:h-18 items-center shadow-xl">
    <div class="w-96 px-8 flex items-center">
      <label class="md:text-4xl text-3xl font-light whitespace-nowrap"> MEGA YAPI </label>
    </div>
    <a
      href="https://www.instagram.com/mega_yapibursa" target="_blank"
      :class="`flex  gap-3 justify-center items-center font-light ${hoverAnimation} cursor-pointer `"
    >
      <UIcon name="skill-icons:instagram" class="text-2xl" />
      <div class="flex flex-row gap-1 hidden md:block lg:block whitespace-nowrap">
        İnstagramdan Bizi Takip Ederek <label class="dark:text-green-400 text-green-500 font-normal">
          %5 İndirim
        </label> Kazanın
      </div>
    </a>
    <div>
      <UHorizontalNavigation :links="defaultLinks" class="flex justify-end hidden lg:block" />
      <UButton
        icon="material-symbols:segment-rounded" variant="soft" class="text-2xl mx-4 lg:hidden"
        @click="isOpen = true"
      />
    </div>
    <USlideover v-model="isOpen">
      <UCard
        class="flex flex-col flex-1" :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          header: {
            base: 'flex px-4 py-3 items-center justify-between',
            background: '',
            padding: '',
          },
        }"
      >
        <template #header>
          <div class="flex w-full h-12 justify-between items-center">
            <!-- <label class="text-4xl font-light "> MEGA YAPI </label> -->
            <img class="h-full" src="../assets/icon.png">
            <UButton
              size="sm" variant="soft" icon="material-symbols:keyboard-double-arrow-right" square padded
              @click="isOpen = false"
            />
          </div>
        </template>

        <UVerticalNavigation :links="defaultLinks" />

        <template #footer>
          <a href="https://github.com/atlasyigitaydin" target="_blank" class="opacity-70 flex gap-1 justify-start items-center">
            <UIcon name="mdi:github" class="text-xl" />
            Made by
            <div class="underline"> atlasyigitaydin </div>
          </a>
        </template>
      </UCard>
    </USlideover>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.bebas-neue-regular {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
