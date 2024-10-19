<script setup>
import cambalkon1 from '../../assets/projects/cambalkon/1.jpg'
import cambalkon2 from '../../assets/projects/cambalkon/2.jpg'

definePageMeta({
  name: 'camBalkon',
})
const items = [cambalkon1, cambalkon2]
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
      <h3> Cam Balkon </h3>
      <h1>
        Camlı ve camsız alüminyum korkuluk sistemleri, güvenlik ve estetik açıdan önemli unsurlardır. Camlı alüminyum
        korkuluklar, şık ve modern bir görünüm sunarak, balkon, teras ve merdivenlerde kullanım için ideal bir çözümdür.
        Cam paneller, dış görünümü zarif kılar ve çevre manzarasının kesintisiz bir şekilde izlenmesine olanak tanır.
        Camsız alüminyum korkuluklar ise daha minimal bir tasarıma sahip olup, sağlam yapıları sayesinde güvenliği
        artırır. Her iki sistem de dayanıklı, hafif ve bakım gerektirmeyen alüminyum malzemeden üretilir, ayrıca
        paslanmazlık özelliği sayesinde uzun ömürlüdür. Hem iç hem de dış mekânlarda çeşitli tasarım seçenekleri ile
        kullanıcıların ihtiyaçlarına göre özelleştirilebilir.
      </h1>
      <h2> Katlanır Cam Balkon </h2>
      <h1>
        Katlanır Cam Balkon
        iki veya daha fazla temperli camın alüminyum sistem bütünü yardımıyla temperli camlar kasa içerisin de hareket
        eder . Duvar kenarına veya istenilen bir noktaya gelerek içeriye doğru katlanarak toplanır..Alüminyum sistemle
        entegre olan bazalarda altta ve üste toplam kilitli ve kilitsiz 4 adet tekerlek bulunmaktadır.Tekerleklerimiz
        çelik alaşımdan üretilip dış etkenlere karşı dayanıklıdır.Baza ve cam entegrasyonu tamamlandıktan sonra sistem
        oluklu ve oluksuz kasalar kullanılarak hazırlanır ve çalışır hale gelir.
      </h1>
      <h1>
        NERELERDE TERCİH EDİLİR : maliyeti düşük ve katlandığı için Genel olarak evlerde kullanılır onun yanı sıra
        ofisler de , dükkan vitrinlerin de kullanımı mevcuttur.
      </h1>
      <h1>
        gold seri kollu ve ipli olarak (8mm teperli tek cam) progold seri kollu ve ipli olarak (8mm temperli tek cam -
        temper+ısı cam)
      </h1>

      <h2> Sürme Cam Balkon </h2>
      <h1>
        iki veya daha fazla cam plakanın alüminyum sistem bütünü yardımıyla camlar biribirini yatay eksende çekerek
        hareket eder.İstenilen kenara doğru iç içe geçerek toplanır.Baza ile entegre olan altta ve üste toplam 4
        tekerlek bulunur.
      </h1>
      <h1>
        NERELEDE TERCİH EDİLİR : İç içe geçme özelliği ile dar her alanlarda sıkça tercih edilen sürme sistem ofisler de
        , vitrinler de , lokantalarda kullanılır
      </h1>
      <h1>
        8mm temperli ve temperli+ısıcamlı
      </h1>

      <h2> Giyotin Cam Balkon </h2>
      <h1>
        iki veya daha fazla cam plakanın alüminyum sistem bütünü yardımıyla camlar biribirini dikey eksende çekerek
        hareket eder.Camlar aşşağı doğru iç içe geçerek toplanır.Baza ile entegre olan giyotin motoru ve kayış bulunur
        sisteme hareket verir
      </h1>
      <h1>
        NERLERDE TERCİH EDİLİR : İç içe geçme özelliği ile dar alanlarda sıkça tercih edilen giyotin sistem otomatik ve
        yenilikçi tasarımı ile rahat kullanım sağlıyor genellikle cafe , düğün salonları , kış bahçelerinde kullanılır
      </h1>
      <h1>
        8mm temperli ve temperli+ısıcamlı
      </h1>
    </template>
  </PageProject>
</template>
