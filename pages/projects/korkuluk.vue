<script setup>
import korkuluk1 from '../../assets/projects/korkuluk/1.jpg'
import korkuluk2 from '../../assets/projects/korkuluk/2.jpg'
import korkuluk3 from '../../assets/projects/korkuluk/3.jpg'
import korkuluk4 from '../../assets/projects/korkuluk/4.jpg'

definePageMeta({
  name: 'korkuluk',
})
const items = [korkuluk1, korkuluk2, korkuluk3, korkuluk4]
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
      <h3> Korkuluk </h3>
      <h2> Camlı Korkuluk </h2>
      <h1>
        Camlı korkuluk, balkon, teras ve merdiven gibi alanlarda güvenliği sağlarken şeffaf yapısıyla ferah ve modern
        bir görünüm sunan yapı elemanıdır. Dayanıklı temperli cam ve paslanmaz çelik ya da alüminyum gibi taşıyıcılarla
        üretilen bu sistemler, hem iç hem de dış mekanlarda estetik ve işlevselliği bir araya getirir. Şeffaf yapısı
        sayesinde geniş bir görüş açısı sağlayan camlı korkuluklar, modern mimari projelerde sıkça tercih edilir ve
        minimal tasarımlar için ideal bir çözümdür.
      </h1>

      <h2> Camlı ve Aluminyum Korkuluk </h2>
      <h1>
        Camlı ve alüminyumlu korkuluk, modern yapılarda estetik ve güvenliği bir arada sunan bir sistemdir. Şeffaf
        temperli cam paneller, hafif ve paslanmaz alüminyum profillerle desteklenerek hem dayanıklı hem de şık bir çözüm
        sağlar. Bu korkuluklar, balkon, teras, merdiven gibi alanlarda ferah bir görünüm sunarken, alüminyumun hava
        koşullarına dayanıklı yapısı sayesinde uzun ömürlüdür. Farklı renk ve kaplama seçenekleriyle her türlü
        dekorasyona uyum sağlayan camlı ve alüminyumlu korkuluklar, modern mimaride hem işlevsel hem de estetik bir
        tercih olarak öne çıkar.
      </h1>

      <h2> Aluminyum Korkuluk </h2>
      <h1>
        Alüminyum korkuluk, hafifliği, dayanıklılığı ve estetik görünümü ile modern yapılarda sıkça tercih edilen bir
        yapı elemanıdır. Genellikle balkon, teras, merdiven ve havuz kenarlarında kullanılan bu korkuluklar, paslanmaz
        ve korozyona karşı dayanıklı malzemelerden üretilerek dış mekan koşullarında uzun ömürlü kullanım sunar. Farklı
        renk ve kaplama seçenekleri ile özelleştirilebilen alüminyum korkuluklar, minimalist tasarımlardan geleneksel
        tasarımlara kadar geniş bir yelpazede tercih edilerek çeşitli mimari tasarımlara uyum sağlar. Estetik bir
        görünüm sunmasının yanı sıra, güvenlik sağlamak amacıyla tasarlanmış bu korkuluklar, hem işlevsel hem de
        dekoratif bir unsur olarak öne çıkar.
      </h1>
    </template>
  </PageProject>
</template>
