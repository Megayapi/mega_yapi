<script setup lang="ts">
import { Icon } from '@iconify/vue'
const adminStore = useAdminStore()

const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const formatted = cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')

  return formatted
}
</script>

<template>
  <div style="height: 1000px;" class="w-full flex flex-column justify-content-evenly align-items-center gap-6">
    <div class="flex flex-column align-items-center gap-6">
      <a :href="`tel:+90 ${adminStore.company.phone}`" class="no-underline flex gap-4 align-items-center border-1 border-round surface-border py-2 px-3 hover:border-green-400 hover:text-green-400 cursor-pointer text-white">
        <div class="flex flex-column gap-1 text-center w-18rem">
          <div>Telefon</div>
          <div class="text-xl">
            {{ formatPhone(adminStore.company.phone) }}
          </div>
        </div>
        <Icon icon="line-md:phone-call-loop" class="text-3xl" />
      </a>

      <a v-if="adminStore.company.cellPhone" :href="`tel:+90 ${adminStore.company.cellPhone}`" class="no-underline flex gap-4 align-items-center border-1 border-round surface-border py-2 px-3 hover:border-green-600 hover:text-green-600 cursor-pointer text-white">
        <div class="flex flex-column gap-1 text-center w-18rem">
          <div>Telefon 2</div>
          <div class="text-xl">
            {{ formatPhone(adminStore.company.cellPhone) }}
          </div>
        </div>
        <Icon icon="line-md:phone-call-loop" class="text-3xl" />
      </a>

      <a
        :href="`mailto:${adminStore.company.email}`"
        class="no-underline flex gap-4 align-items-center border-1 border-round surface-border py-2 px-3 hover:border-orange-400 hover:text-orange-400 cursor-pointer text-white"
      >
        <div class="flex flex-column gap-1 text-center w-18rem">
          <div>E-Posta</div>
          <div class="text-xl">
            {{ adminStore.company.email }}
          </div>
        </div>
        <Icon icon="line-md:email" class="text-3xl" />
      </a>

      <a
        target="_blank"
        :href="`${adminStore.company.instagramLink}`"
        class="no-underline flex gap-4 align-items-center border-1 border-round surface-border py-2 px-3 hover:border-pink-400 hover:text-pink-400 cursor-pointer text-white"
      >
        <div class="flex flex-column gap-1 text-center w-18rem">
          <div>İnstagram</div>
          <div class="text-xl">
            {{ adminStore.company.instagram }}
          </div>
        </div>
        <Icon icon="line-md:instagram" class="text-3xl" />
      </a>
    </div>
    <div class="flex gap-4 align-items-center">
      <label class="flex flex-column gap-1 text-center w-18rem">
        <label>Konum</label>
        <label class="text-xl">{{ `${adminStore.company.country} / ${adminStore.company.city}` }}</label>
        <label class="text-xl">{{ adminStore.company.address }}</label>
      </label>
      <Icon icon="line-md:map-marker" class="text-4xl" />
    </div>
  </div>
</template>
