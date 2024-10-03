<script setup lang="ts">
import img1_ayna_tasarimi from '../../../../assets/images/projects/ayna_tasarımı/1.jpg'
import img2_ayna_tasarimi from '../../../../assets/images/projects/ayna_tasarımı/2.jpg'
import img3_ayna_tasarimi from '../../../../assets/images/projects/ayna_tasarımı/3.jpg'
import img1_bakim_onarim from '../../../../assets/images/projects/bakım_onarım/1.jpg'
import img1_camli_camsiz_aliminyum from '../../../../assets/images/projects/camlı_camsız_aliminyum_korkuluk/1.jpg'
import img2_camli_camsiz_aliminyum from '../../../../assets/images/projects/camlı_camsız_aliminyum_korkuluk/2.jpg'
import img3_camli_camsiz_aliminyum from '../../../../assets/images/projects/camlı_camsız_aliminyum_korkuluk/3.jpg'
import img4_camli_camsiz_aliminyum from '../../../../assets/images/projects/camlı_camsız_aliminyum_korkuluk/4.jpg'
import img1_dusakabin from '../../../../assets/images/projects/duşakabin/1.jpg'
import img1_cam_balkon_sistemler from '../../../../assets/images/projects/cam_balkon_sistemler/1.jpg'
import img1_plise_perde_sineklik from '../../../../assets/images/projects/plise_perde_sineklik/1.jpg'
import img1_pvc from '../../../../assets/images/projects/pvc/1.jpg'
import img1_yenileme from '../../../../assets/images/projects/yenileme/1.jpg'
import img2_yenileme from '../../../../assets/images/projects/yenileme/2.jpg'
const allImages = {
  ayna_tasarimi: [
    img1_ayna_tasarimi, img2_ayna_tasarimi, img3_ayna_tasarimi,
  ],
  bakim_onarim: [
    img1_bakim_onarim,
  ],
  camli_camsiz_aliminyum_dograma: [
    img1_camli_camsiz_aliminyum, img2_camli_camsiz_aliminyum, img3_camli_camsiz_aliminyum, img4_camli_camsiz_aliminyum,
  ],
  dusakabin: [
    img1_dusakabin,
  ],
  katlanir_cam_balkon: [
    img1_cam_balkon_sistemler,
  ],
  plise_perde_sineklik: [
    img1_plise_perde_sineklik,
  ],
  pvc: [
    img1_pvc,
  ],
  yenileme: [
    img1_yenileme, img2_yenileme,
  ],
}
const currentParam = computed(() => useRouter().currentRoute.value.params.project)

const contents = computed(() => {
  switch (currentParam.value) {
    case 'cam_balkon_sistemler':
      return {
        img: allImages.katlanir_cam_balkon,
        header: 'Katlanır Cam Balkon',
        about: 'Katlanır cam balkon sistemleri, balkonları daha işlevsel hale getirirken estetik bir görünüm sağlayan modern çözümlerden biridir. Bu sistemlerde, cam paneller raylar üzerinde hareket eder ve balkon tamamen açılıp kapatılabilir. Katlanabilir yapısı sayesinde, kullanıcılar istedikleri zaman balkonlarını açık bir alana dönüştürebilir veya kapalı bir kış bahçesi gibi kullanabilir. Ayrıca, ses ve ısı yalıtımı sunarak konforu artırır ve balkonların dört mevsim kullanılmasına olanak tanır.',
      }
    case 'ayna_tasarımı':
      return {
        img: allImages.ayna_tasarimi,
        header: 'Ayna Tasarımı',
        about: 'Ayna tasarımı, hem estetik hem de işlevsel amaçlar için kullanılan dekoratif bir unsurdur. Farklı boyutlar, şekiller ve çerçeve materyalleriyle mekânın karakterine uyum sağlayacak şekilde özelleştirilebilir. Aynalar, ışığı yansıtarak odaları daha geniş ve aydınlık gösterirken, aynı zamanda mekanlara derinlik ve şıklık katar. Modern, klasik, minimal ya da özgün tasarımlarla ayna, iç dekorasyonda güçlü bir araçtır ve banyo, salon, yatak odası gibi birçok alanda kullanılabilir.',
      }
    case 'yenileme':
      return {
        img: allImages.yenileme,
        header: 'Yenileme',
        about: 'Yenileme, mevcut bir yapının veya sistemin işlevini ve estetiğini artırmak için yapılan onarım ve iyileştirme çalışmalarını ifade eder. Bu süreçte, yıpranmış ya da eskiyen malzemeler yenileriyle değiştirilir, enerji verimliliği sağlanır ve güncel tasarım trendlerine uyum sağlanır. Yenileme projeleri, binaların ömrünü uzatırken, aynı zamanda kullanım konforunu artırır. Evler, ofisler veya ticari yapılar için yapılan yenileme işlemleri, dekoratif unsurların güncellenmesi, tesisatların modernize edilmesi ve ihtiyaçlara göre alan düzenlemelerinin yapılmasını içerir.',
      }
    case 'bakım_onarım':
      return {
        img: allImages.bakim_onarim,
        header: 'Bakım ve Onarım',
        about: 'Bakım ve onarım, yapıların ve sistemlerin düzgün ve güvenli bir şekilde çalışmasını sağlamak için gerçekleştirilen düzenli kontrol ve müdahaleleri kapsar. Bakım, olası sorunları önceden tespit ederek sistemi korurken, onarım mevcut arızaların giderilmesini hedefler. Özellikle cam, PVC, alüminyum sistemler ve yapı elemanlarında yapılan bu işlemler, malzemelerin ömrünü uzatır ve kullanıcılara uzun vadede tasarruf sağlar. Bakım-onarım çalışmaları, hem estetik hem de işlevsel bozulmaları giderir, yapının ilk günkü performansına ulaşmasını amaçlar.',
      }
    case 'pvc':
      return {
        img: allImages.pvc,
        header: 'PVC',
        about: 'PVC (Polivinil Klorür), dayanıklılığı, suya ve hava koşullarına karşı dirençli yapısıyla inşaat sektöründe yaygın olarak kullanılan bir malzemedir. Özellikle kapı, pencere, panjur ve doğrama sistemlerinde tercih edilir. Hafif olmasına rağmen güçlü bir yapıya sahip olan PVC, ısı ve ses yalıtımı sağlar, enerji verimliliğini artırır ve uzun ömürlüdür. Kolay temizlenebilirliği ve bakım gerektirmemesi de büyük avantajlarından biridir. Aynı zamanda yangına dayanıklıdır ve çevre dostu geri dönüştürülebilir bir malzeme olarak tercih edilir.',
      }
    case 'duşakabin':
      return {
        img: allImages.dusakabin,
        header: 'Duşakabin',
        about: 'Duşakabin, banyo alanında suyun etrafa sıçramasını önlemek ve daha düzenli bir kullanım sağlamak amacıyla tasarlanmış kapalı alanlardır. Genellikle cam ve alüminyum çerçeve kombinasyonu ile üretilir ve farklı stil, boyut ve tasarımlarda bulunur. Duşakabinler, estetik açıdan modern bir görünüm sunarken, suyun daha etkili bir şekilde kullanılmasını sağlar. Kullanıcıların mahremiyetini artırırken, temizlik açısından da avantajlar sunar. Farklı cam seçenekleriyle (örneğin, şeffaf, mat veya desenli) kişisel tercihlere göre özelleştirilebilir ve banyo dekorasyonuna uyum sağlar.',
      }
    case 'plise_perde_sineklik':
      return {
        img: allImages.plise_perde_sineklik,
        header: 'Plise Perde ve Sineklik',
        about: 'Plise perde sineklik, hem estetik hem de işlevsel özellikler sunan modern bir iç mekan çözümüdür. Plise perdeler, katlanabilir yapıları sayesinde alan tasarrufu sağlarken, farklı renk ve desen seçenekleri ile dekorasyona uyum sağlar. Sineklik işlevi ise, dışarıdan gelen böceklerin iç mekâna girmesini engelleyerek konforlu bir yaşam alanı oluşturur. Bu sistemler, genellikle pencere ve kapılara uygulanabilir ve kullanıcının ihtiyacına göre açılıp kapatılabilir. Enerji verimliliği sağlayan plise perde sineklikler, aynı zamanda UV ışınlarını da filtreleyerek iç mekânın sıcaklık dengesini korur.',
      }
    case 'camlı_camsız_aliminyum_korkuluk':
      return {
        img: allImages.camli_camsiz_aliminyum_dograma,
        header: 'Camlı, Camsız Aliminyum Korkuluk',
        about: 'Camlı ve camsız alüminyum korkuluk sistemleri, güvenlik ve estetik açıdan önemli unsurlardır. Camlı alüminyum korkuluklar, şık ve modern bir görünüm sunarak, balkon, teras ve merdivenlerde kullanım için ideal bir çözümdür. Cam paneller, dış görünümü zarif kılar ve çevre manzarasının kesintisiz bir şekilde izlenmesine olanak tanır. Camsız alüminyum korkuluklar ise daha minimal bir tasarıma sahip olup, sağlam yapıları sayesinde güvenliği artırır. Her iki sistem de dayanıklı, hafif ve bakım gerektirmeyen alüminyum malzemeden üretilir, ayrıca paslanmazlık özelliği sayesinde uzun ömürlüdür. Hem iç hem de dış mekânlarda çeşitli tasarım seçenekleri ile kullanıcıların ihtiyaçlarına göre özelleştirilebilir.',
      }
  }
})
const images = computed(() => contents.value?.img)
const activeIndex = ref<number>(0)
watch(() => useRouter().currentRoute.value.fullPath, _ => activeIndex.value = 0)
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-full h-full flex justify-content-center align-items-center">
      <Galleria
        :active-index="activeIndex" :show-thumbnails="false" :show-indicators="true" indicators-position="right" class="h-full w-full"
        :value="images"
      >
        <template #item="slotProps">
          <img class="border-round overflow-hidden w-full h-full" :src="slotProps.item">
        </template>
      </Galleria>
    </div>
    <div class="w-full h-full py-6 px-4 flex flex-column justify-center text-center">
      <div class="w-full h-full flex flex-column gap-6">
        <div class="w-full text-2xl text-primary-400">
          {{ contents?.header }}
        </div>
        <div class="text-lg">
          {{ contents?.about }}
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: project
meta:
  layout: default
</route>
