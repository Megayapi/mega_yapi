<script setup lang="ts">
const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const formatted = cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')

  return formatted
}

const callPhone = (phone: string) => {
  window.location.href = `tel:+90 ${phone}`
}
const appStore = useAppStore()
</script>

<template>
  <div v-if="useRouter().currentRoute.value.name !== 'contact'" class="fixed right-0 bottom-0 m-4 flex gap-2">
    <Button
      :label="!appStore.responsive ? `${formatPhone(useAdminStore().company.phone)}` : ''"
      :style="!appStore.responsive ? 'width: 250px; height: 50px;' : 'width: 50px; height: 50px;'"
      class="flex justify-content-center align-items-center text-xl text-white flashing-border border-1 border-white"
      severity="success"
      outlined
      :icon="`pi pi-whatsapp ${!appStore.responsive ? 'text-2xl' : 'text-3xl'}`" @click="callPhone(useAdminStore().company.phone)"
    />
  </div>
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
