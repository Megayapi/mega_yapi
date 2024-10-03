<script setup lang="ts">
const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const formatted = cleaned.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')

  return formatted
}

const callPhone = (phone: string) => {
  window.location.href = `tel:+90 ${phone}`
}
</script>

<template>
  <!-- <Button label="Whatsapp" severity="success" outlined icon="pi pi-whatsapp text-xl" /> -->
  <div v-if="useRouter().currentRoute.value.name !== 'contact'" class="fixed right-0 bottom-0 m-4 flex gap-2">
    <Button :label="`${formatPhone(useAdminStore().company.phone)}`" severity="info" outlined icon="pi pi-phone text-xl" @click="callPhone(useAdminStore().company.phone)" />
  </div>
</template>
