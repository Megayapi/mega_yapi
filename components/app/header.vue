<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'

const app = useApp()
const projectStore = useProjectStore()
const mobileMenuOpen = ref(false)
const isHome = computed(() => useRoute().name === 'home')

const pageIsDown = computed(() => !!(app.scrollY > 100))

function closeMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="z-999999 duration-300 animation-all"
    :class="{
      'bg-clip-padding shadow-lg backdrop-filter backdrop-blur-md bg-gray-100/75': pageIsDown,
    }"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
      <!-- Logo -->
      <div class="flex lg:flex-1">
        <button class="-m-1.5 p-1.5" @click="() => navigateToSection('home')">
          <span class="sr-only">Your Company</span>
          <img
            :class="{ 'h-12': pageIsDown, 'h-16': !pageIsDown }"
            class="w-auto duration-300"
            src="/logo.png"
            alt="Logo"
          >
        </button>
      </div>

      <!-- Mobil Menü Butonu -->
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Icon name="heroicons:bars-3" class="size-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Büyük Ekran Menü -->
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold">
            Hizmetlerimiz
            <Icon name="heroicons:chevron-down" class="size-5 text-gray-400" />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel class="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div
                  v-for="item in projectStore.projects"
                  :key="item.name"
                  class="group relative flex items-center gap-x-4 rounded-lg p-4 text-sm hover:bg-gray-50"
                >
                  <div class="flex-auto" @click="mobileMenuOpen = false">
                    <button
                      class="block font-semibold" @click="() => {
                        if (isHome)
                          navigateToSection(item.key)
                        else
                          navigateTo({
                            name: 'project',
                            params: {
                              id: item.key,
                            },
                          })

                      }"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </button>
                    <p class="mt-1 text-gray-600">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <button class="text-sm font-semibold" @click="() => navigateToSection('comments')">
          Müşteri Yorumları
        </button>
        <button class="text-sm font-semibold" @click="() => navigateToSection('contact')">
          Bize Ulaşın
        </button>
      </PopoverGroup>

      <!-- Ara Butonu -->
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="tel:05449606980" class="text-sm font-semibold text-green-700 flex items-center gap-1">
          Hemen Ara <Icon name="heroicons:phone" class="text-xl" />
        </a>
      </div>
    </nav>

    <!-- Mobil Menü -->
    <Dialog class="lg:hidden" :open="mobileMenuOpen" @close="closeMenu">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#home" class="-m-1.5 p-1.5" @click="closeMenu">
            <span class="sr-only">Your Company</span>
            <!-- <img class="h-10 w-auto" src="/logo.png" alt="Logo"> -->
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="closeMenu"
          >
            <span class="sr-only">Close menu</span>
            <Icon name="heroicons:x-mark" class="size-6" />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-200">
            <div class="space-y-4 py-6">
              <Disclosure v-slot="{ open }" as="div" class="-mx-3">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold hover:bg-gray-50">
                  Hizmetlerimiz
                  <Icon name="heroicons:chevron-down" class="size-5" :class="{ 'rotate-180': open }" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-1">
                  <button
                    v-for="item in projectStore.projects"
                    :key="item.name"
                    class="block py-2 pr-3 pl-6 text-sm border-b border-gray-300"
                    @click="() => {
                      if (isHome)
                        navigateToSection(item.key)
                      else
                        navigateTo({
                          name: 'project',
                          params: {
                            id: item.key,
                          },
                        })

                      closeMenu()
                    }"
                  >
                    {{ item.name }}
                  </button>
                </DisclosurePanel>
              </Disclosure>

              <button
                class="block text-sm  font-semibold hover:bg-gray-50 rounded-lg py-2" @click="() => {
                  closeMenu()
                  navigateToSection('comments')
                }"
              >
                Müşteri Yorumları
              </button>
              <button
                class="block text-sm font-semibold hover:bg-gray-50 rounded-lg py-2" @click="() => {
                  closeMenu()
                  navigateToSection('contact')
                }"
              >
                Bize Ulaşın
              </button>
            </div>

            <div class="py-6 flex items-center gap-2">
              <Icon name="heroicons:phone" class="text-xl" />
              <a href="tel:05449606980" class="text-base font-semibold">Hemen Ara</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
