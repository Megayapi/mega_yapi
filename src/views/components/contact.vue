<script setup lang="ts">
// const formatPhone = (phone: string): string => {
//   const cleaned = phone.replace(/\D/g, '')
//   const formatted = cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')

//   return formatted
// }
const callPhone = (phone: string) => {
  window.location.href = `tel:+90 ${phone}`
}
const openWhatsApp = (phone: string) => {
  const cleaned = phone.replace(/\D/g, '')
  window.location.href = `https://wa.me/90${cleaned}`
}
const items = ref([
  {
    icon: 'pi pi-whatsapp',
    command: () => {
      openWhatsApp(useAdminStore().company.phone)
    },
  },
  {
    icon: 'pi pi-phone',
    command: () => {
      callPhone(useAdminStore().company.phone)
    },
  },
  {
    icon: 'pi pi-phone',
    command: () => {
      callPhone(useAdminStore().company.cellPhone)
    },
  },
])
</script>

<template>
  <!-- <Button
      :label="!appStore.responsive ? `${formatPhone(useAdminStore().company.phone)}` : ''"
      :style="!appStore.responsive ? 'width: 250px; height: 50px;' : 'width: 50px; height: 50px;'"
      class="flex justify-content-center align-items-center text-xl text-white flashing-border border-1 border-white"
      severity="success"
      outlined
      :icon="`pi pi-whatsapp ${!appStore.responsive ? 'text-2xl' : 'text-3xl'}`" @click="openWhatsApp(useAdminStore().company.phone)"
    /> -->
  <SpeedDial v-if="useRouter().currentRoute.value.name !== 'contact'" class="fixed right-0 bottom-0 m-6" :model="items" direction="up" :transition-delay="80" show-icon="pi pi-phone" hide-icon="pi pi-times">
    <template #icon>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
            <animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12" />
          </path>
          <path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4" />
          </path>
          <path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6" />
          </path>
        </g>
      </svg>
    </template>
  </SpeedDial>
</template>

<style scoped>
@keyframes flash-border {
  0% {
    background-color: transparent;
  }
  50% {
    background-color: rgb(0, 206, 0);
  }
  100% {
    background-color: transparent;
  }
}

.flashing-border {
  animation: flash-border 2s infinite;
}
</style>
