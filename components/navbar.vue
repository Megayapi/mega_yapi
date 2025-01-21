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
  label: 'Temayı Değiştir',
  click: () => toggleColorMode(),
}]
</script>

<template>
  <div class="w-full flex justify-between h-12 md:h-18 items-center shadow-xl">
    <div class="w-96 px-8 flex items-center">
      <label class="md:text-4xl text-3xl font-bold whitespace-nowrap"> MEGA YAPI </label>
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

        <UVerticalNavigation
          :links="defaultLinks"
          :ui="{
            wrapper: 'relative',
            base: 'group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
            ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
            padding: 'px-2.5 py-1.5',
            width: 'w-full',
            rounded: 'rounded-md',
            font: 'font-medium',
            size: 'text-sm',
            active: 'text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800',
            inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
            label: 'truncate relative',
            icon: {
              base: 'flex-shrink-0 w-5 h-5 relative',
              active: 'text-gray-700 dark:text-gray-200',
              inactive: 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
            },
            avatar: {
              base: 'flex-shrink-0',
              size: '2xs',
            },
            badge: {
              base: 'flex-shrink-0 ms-auto relative rounded',
              color: 'gray',
              variant: 'solid',
              size: 'xs',
            },
            divider: {
              wrapper: {
                base: 'p-2',
              },
            },
          }"
        />

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
