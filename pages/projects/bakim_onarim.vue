<script setup>
import bakim1 from '../../assets/projects/bakim/1.jpg'

definePageMeta({
  name: 'bakimOnarim',
})
const items = [bakim1]
</script>

<template>
  <PageProject>
    <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden h-full" arrows>
      <img :src="item" class="" draggable="false">
    </UCarousel>
    <template #text>
      <h3> Bakım ve Onarım </h3>
      <h1>
        Bakım ve onarım, yapıların ve sistemlerin uzun süre boyunca verimli, güvenli ve sorunsuz bir şekilde
        çalışmasını sağlamak amacıyla gerçekleştirilen kapsamlı ve düzenli kontroller ile müdahaleleri içerir. Bu
        süreçler, yapıların dayanıklılığını artırmak, olası hasarları önlemek ve işlevsel bozulmaların önüne geçmek için
        kritik bir rol oynar. Bakım faaliyetleri, sistemin ileride karşılaşabileceği potansiyel sorunları önceden tespit
        ederek koruma sağlarken, onarım işlemleri ise mevcut arızaların giderilmesi, hasarlı veya yıpranmış parçaların
        düzeltilmesi ya da değiştirilmesi üzerine yoğunlaşır. Özellikle cam, PVC, alüminyum sistemler, kapı ve pencere
        çerçeveleri, cephe kaplamaları ve diğer yapı elemanlarında yapılan bakım ve onarım işlemleri, sadece bu
        malzemelerin ömrünü uzatmakla kalmaz, aynı zamanda uzun vadede kullanıcılara önemli ölçüde maddi tasarruf
        sağlar.
      </h1>
      <h1>
        Düzenli bakım çalışmaları, yapıların estetik görünümünde meydana gelebilecek bozulmaları da önleyerek, yapının
        dış görünüşünü ve mimari değerini korur. Bunun yanı sıra, yapısal ve işlevsel performansın devamlılığını
        sağlayarak, enerji verimliliğini artırır ve bakım masraflarının daha da yükselmesine neden olabilecek büyük
        sorunların önüne geçer. Bakım ve onarım işlemleri, binaların zamanla aşınan veya dış etkenlerden zarar gören
        bileşenlerini ilk günkü haline getirerek, hem güvenli hem de konforlu bir yaşam alanı sunmayı hedefler. Bu
        süreçler, yapıların hem estetik hem de işlevsel açıdan mükemmel durumda kalmasını sağlar. İhmal edilmesi
        durumunda ise küçük çaplı arızalar büyüyerek daha maliyetli sorunlara yol açabilir. Bu nedenle, periyodik bakım
        ve onarım çalışmaları, uzun vadeli sürdürülebilirlik ve maliyet kontrolü açısından büyük önem taşır.
      </h1>
    </template>
  </PageProject>
</template>
