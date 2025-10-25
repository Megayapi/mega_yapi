<script setup lang="ts">
useHead({
  title: 'Mega Yapı',
  meta: [
    { name: 'description', content: 'Mega Yapı cam balkon, PVC, duşakabin, sineklik ve cam sistemleri çözümleri sunar.' },
    { name: 'keywords', content: 'cam balkon, pvc, duşakabin, sineklik, cam korkuluk, Mega Yapı' },
    { property: 'og:title', content: 'Mega Yapı' },
    { property: 'og:description', content: 'Cam balkon, PVC, duşakabin ve cam sistemlerinde profesyonel çözümler.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://megasite.com' },
    { property: 'og:image', content: '/og-image.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [{ rel: 'canonical', href: 'https://megasite.com' }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
