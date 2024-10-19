<script setup>
import plise1 from '../../assets/projects/plise/1.jpg'
import plise2 from '../../assets/projects/plise/2.jpg'
import plise3 from '../../assets/projects/plise/3.jpg'
import plise4 from '../../assets/projects/plise/4.jpg'
import plise5 from '../../assets/projects/plise/5.jpg'

definePageMeta({
  name: 'plise',
})
const items = [plise1, plise2, plise3, plise4, plise5]
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
      <h3> Plise Perde ve Sineklik </h3>
      <h1>
        Plise perde, hem estetik hem de işlevsel özellikler sunan modern bir iç mekan çözümüdür. Plise perdeler,
        katlanabilir yapıları sayesinde alan tasarrufu sağlarken, farklı renk ve desen seçenekleri ile dekorasyona uyum
        sağlar. Sineklik işlevi ise, dışarıdan gelen böceklerin iç mekâna girmesini engelleyerek konforlu bir yaşam
        alanı oluşturur. Bu sistemler, genellikle pencere ve kapılara uygulanabilir ve kullanıcının ihtiyacına göre
        açılıp kapatılabilir. Plise perde ve sineklik, bir arada kullanılarak hem sinek koruması hem de ışık kontrolü
        sağlayabilir. Bu kombinasyon, estetik bir görünüm sunarken işlevselliğiyle de dikkat çeker.
      </h1>

      <h2> Plise Perde </h2>
      <h1>
        Plise perde, pencere ve kapılarınızda güneş ışığını ve sıcaklığını kontrol etmenizi sağlayan kullanışlı bir yapı
        elemanıdır. Plise perde, kumaşın katlanarak toplanmasını sağlayan bir mekanizmaya sahiptir. Bu sayede, pencere
        ve kapılarınızı istediğiniz oranda açıp kapatabilir, ışık geçirgenliğini ve mahremiyeti kontrol edebilirsiniz.
      </h1>

      <h2> Sineklik </h2>
      <h1>
        Sineklik, sineklerin içeri girmesini engelleyen bir koruyucu sistemdir. Özellikle yaz aylarında, dışarıdan gelen
        böceklerin yaşam alanınıza girmesini önleyerek daha konforlu bir ortam sağlar.
      </h1>
    </template>
  </PageProject>
</template>
