<script setup>
import yenileme1 from '../../assets/projects/yenileme/1.jpg'

definePageMeta({
  name: 'yenileme',
})
const items = [yenileme1]
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
      <h3> Yenileme </h3>
      <h1>
        Yenileme, mevcut bir yapının işlevselliğini ve estetik değerini artırmak amacıyla gerçekleştirilen onarım ve
        iyileştirme çalışmalarını içerir. Bu süreçte, yıpranmış veya eskiyen cam, PVC, ayna, sineklik, camekan ve
        duşakabin gibi yapı elemanları yenilenir. Böylece yapı, sadece görsel açıdan modern bir görünüme kavuşmakla
        kalmaz, aynı zamanda performans olarak da iyileştirilir. Yenileme projeleri, enerji verimliliğini artırmayı ve
        kullanım ömrünü uzatmayı hedeflerken, modern tasarımlarla yapının estetik değerini de yükseltir.
      </h1>
      <h1>
        Ev, ofis veya ticari yapılarda yapılan bu yenileme işlemleri, mekanların hem işlevselliğini hem de kullanım
        konforunu artırır. Özellikle cam, PVC ve duşakabin gibi malzemeler yenilendiğinde, alanların daha modern ve
        pratik hale gelmesi sağlanır. Aynı zamanda sineklik ve camekan gibi ek yapı elemanlarının güncellenmesi,
        mekanların kullanışlılığını artırarak daha konforlu bir yaşam ya da çalışma alanı sunar. Yenileme projeleri, hem
        yapının uzun ömürlü olmasını sağlar hem de estetik açıdan güncel bir görünüme kavuşturur.
      </h1>
    </template>
  </PageProject>
</template>
