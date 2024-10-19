<script setup>
import pvc1 from '../../assets/projects/pvc/1.jpg'

definePageMeta({
  name: 'pvc',
})
const items = [pvc1]
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
      <h3> PVC </h3>
      <h1>
        PVC sistemler, genellikle polivinil klorür (PVC) malzemesinden üretilen boru, profil ve diğer yapı elemanlarını
        içeren sistemlerdir. Bu sistemler, dayanıklılığı, hafifliği ve kimyasal direnci sayesinde sıklıkla inşaat,
        elektrik ve su tesisatı gibi alanlarda kullanılır.
      </h1>

      <h2> Hangi PVC Elemanlarını Kullanıyoruz </h2>
      <h1>
        Mega yapı olarak pvc kapı ve pencere sistemlerinin üretimi ve montajını sağlamaktayız.
      </h1>

      <h2> PVC kapı ve pencere avantajları? </h2>
      <h1>
        PVC kapı ve pencere sistemleri, enerji verimliliği, ses yalıtımı ve dayanıklılık sunan yapı elemanlarıdır. Bu
        sistemler, düşük bakım gereksinimi ile uzun ömürlüdür ve çeşitli tasarım seçenekleriyle estetik bir görünüm
        sağlar.
        1. Enerji Verimliliği: PVC kapı ve pencereler, iyi bir yalıtım sağladığı için enerji tasarrufu sağlar. Kışın ısı
        kaybını azaltır, yazın ise dışarıdaki sıcak havayı içeri almaz.
        2. Dayanıklılık: PVC malzemesi, rutubet, nem ve kimyasal maddelere karşı dayanıklıdır. Çürümeye, paslanmaya veya
        renk solmasına karşı dirençlidir.
        3. Düşük Bakım: Ahşap veya metal gibi malzemelere göre daha az bakım gerektirir. Yalnızca düzenli temizlik ile
        uzun yıllar kullanılabilir.
        4. Ses Yalıtımı: PVC pencereler, dışarıdan gelen gürültüyü etkili bir şekilde azaltır, bu da daha konforlu bir
        yaşam alanı sunar.
        5. Çeşitli Tasarım Seçenekleri: Farklı renk ve desen seçenekleri ile estetik olarak her tarza uyum sağlar.
      </h1>

      <h2> Montaj Süreci </h2>
      <h1>
        1. Ölçüm: Öncelikle, kapı veya pencere alanının doğru bir şekilde ölçülmesi gerekir. Bu, montajın düzgün
        yapılması için kritik öneme sahiptir.
        2. Hazırlık: Eski kapı veya pencere çıkarılır. Yüzeyin düzgün ve temiz olduğundan emin olunmalıdır.
        3. Kurulum: Yeni PVC kapı veya pencere, montaj çerçevesine yerleştirilir. Düzgün bir oturuş sağlamak için
        dikkatlice hizalanmalıdır.
        4. Yalıtım ve Montaj: Pencere ve kapının etrafına yalıtım malzemesi yerleştirilir. Daha sonra vida veya montaj
        elemanları ile sabitlenir.
        5. Tamamlama: Son olarak, dış yüzeyin ve iç mekanın düzgün bir görünüm kazanması için gerekli son işlemler
        yapılır.
      </h1>
    </template>
  </PageProject>
</template>
