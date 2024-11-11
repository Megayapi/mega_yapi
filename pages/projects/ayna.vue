<script setup>
import ayna1 from '../../assets/projects/ayna/1.jpg'
import ayna2 from '../../assets/projects/ayna/2.jpg'
import ayna3 from '../../assets/projects/ayna/3.jpg'
import ayna4 from '../../assets/projects/ayna/4.jpg'
import ayna5 from '../../assets/projects/ayna/5.jpg'
import ayna6 from '../../assets/projects/ayna/6.jpg'

definePageMeta({
  name: 'ayna',
})
const items = [ayna1, ayna2, ayna3, ayna4, ayna5,ayna6]
</script>

<template>
  <PageProject>
    <UCarousel
      v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden h-full"
      arrows
    >
      <img :src="item" class="" draggable="false">
    </UCarousel>
    <template #text>
      <h3> Ayna Tasarımı </h3>
      <h1>
        Ayna Tasarımı
        Ayna tasarımı, hem estetik hem de işlevsel amaçlar için kullanılan dekoratif bir unsurdur. Farklı boyutlar,
        şekiller ve çerçeve materyalleriyle mekânın karakterine uyum sağlayacak şekilde özelleştirilebilir. Aynalar,
        ışığı yansıtarak odaları daha geniş ve aydınlık gösterirken, aynı zamanda mekanlara derinlik ve şıklık katar.
      </h1>
      <h1>
        Modern, klasik, minimal ya da özgün tasarımlarla ayna, iç dekorasyonda güçlü bir araçtır ve banyo, salon, yatak
        odası gibi birçok alanda kullanılabilir. Ayna tasarımı, mekânın genel estetiğini tamamlayarak, dekorasyonun
        önemli bir parçası haline gelir.
      </h1>
    </template>
  </PageProject>
</template>
