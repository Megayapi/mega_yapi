<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const router = useRouter()
const items = ref([
  {
    label: 'Ana Sayfa',
    icon: 'pi pi-home',
    command: () => {
      router.push('/')
    },
  },
  {
    label: 'İşlerimiz',
    icon: 'pi pi-lightbulb',
    command: () => {
      router.push('/projects')
    },
  },
  {
    label: 'Bize Ulaşın',
    icon: 'pi pi-phone',
    command: () => {
      router.push('/contact')
    },
  },
  {
    label: 'Biz Kimiz',
    icon: 'pi pi-paperclip',
    command: () => {
      router.push('/about')
    },
  },
])
const adminStore = useAdminStore()
</script>

<template>
  <div class="w-full fixed left-0 top-0 z-5">
    <Menubar class="w-full flex justify-content-between border-none h-4rem border-noround shadow-8 pb-1 bg-transparent" :model="items">
      <template #start>
        <div class="flex justify-content-center align-items-center h-full">
          <img class="w-3rem border-round-sm ml-3" src="../../assets/images/icon.jpg">
          <div
            class="flex cursor-pointer gap-1 ml-4 text-4xl font-light"
            @click="router.push('/')"
          >
            <div class="text-blue-400">
              {{ adminStore.company.name.split(' ')[0] }}
            </div>
            <div v-if="adminStore.company.name.split(' ')[1]">
              {{ adminStore.company.name.split(' ')[1] }}
            </div>
            <div v-if="adminStore.company.name.split(' ')[2]">
              {{ adminStore.company.name.split(' ')[2] }}
            </div>
            <div v-if="adminStore.company.name.split(' ')[3]">
              {{ adminStore.company.name.split(' ')[3] }}
            </div>
          </div>
        </div>
      </template>
    </Menubar>
  </div>
</template>
