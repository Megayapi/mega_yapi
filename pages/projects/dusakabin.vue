<script setup>
import dusakabin1 from '../../assets/projects/dusakabin/1.jpg'

definePageMeta({
  name: 'dusakabin',
})
const items = [dusakabin1]
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
      <h3> Duşakabin </h3>
      <h1>
        Duşakabin, banyo alanında suyun etrafa sıçramasını önlemek ve daha düzenli bir kullanım sağlamak amacıyla
        tasarlanmış kapalı alanlardır. Genellikle cam ve alüminyum çerçeve kombinasyonu ile üretilir ve farklı stil,
        boyut ve tasarımlarda bulunur. Duşakabinler, estetik açıdan modern bir görünüm sunarken, suyun daha etkili bir
        şekilde kullanılmasını sağlar. Kullanıcıların mahremiyetini artırırken, temizlik açısından da avantajlar sunar.
        Farklı cam seçenekleriyle (örneğin, şeffaf, mat veya desenli) kişisel tercihlere göre özelleştirilebilir ve
        banyo dekorasyonuna uyum sağlar.
      </h1>
    </template>
  </PageProject>
</template>
