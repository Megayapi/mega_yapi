<script setup lang="ts">
import img1_ayna_tasarimi from '../../../../assets/images/projects/ayna_tasarımı/1.jpg'
import img2_ayna_tasarimi from '../../../../assets/images/projects/ayna_tasarımı/2.jpg'
import img3_ayna_tasarimi from '../../../../assets/images/projects/ayna_tasarımı/3.jpg'
import img4_ayna_tasarimi from '../../../../assets/images/projects/ayna_tasarımı/4.jpg'
import img5_ayna_tasarimi from '../../../../assets/images/projects/ayna_tasarımı/5.jpg'
import img1_bakim_onarim from '../../../../assets/images/projects/bakım_onarım/1.jpg'
import img2_bakim_onarim from '../../../../assets/images/projects/bakım_onarım/2.jpg'
import img1_camli_camsiz_aliminyum from '../../../../assets/images/projects/camlı_camsız_aliminyum_korkuluk/1.jpg'
import img2_camli_camsiz_aliminyum from '../../../../assets/images/projects/camlı_camsız_aliminyum_korkuluk/2.jpg'
import img3_camli_camsiz_aliminyum from '../../../../assets/images/projects/camlı_camsız_aliminyum_korkuluk/3.jpg'
import img4_camli_camsiz_aliminyum from '../../../../assets/images/projects/camlı_camsız_aliminyum_korkuluk/4.jpg'
import img1_dusakabin from '../../../../assets/images/projects/duşakabin/1.jpg'
import img1_cam_balkon_sistemler from '../../../../assets/images/projects/cam_balkon_sistemler/1.jpg'
import img2_cam_balkon_sistemler from '../../../../assets/images/projects/cam_balkon_sistemler/2.jpg'
import img1_plise_perde_sineklik from '../../../../assets/images/projects/plise_perde_sineklik/1.jpg'
import img2_plise_perde_sineklik from '../../../../assets/images/projects/plise_perde_sineklik/2.jpg'
import img1_pvc from '../../../../assets/images/projects/pvc/1.jpg'
import img1_yenileme from '../../../../assets/images/projects/yenileme/1.jpg'
import img2_yenileme from '../../../../assets/images/projects/yenileme/2.jpg'
const allImages = {
  ayna_tasarimi: [
    img1_ayna_tasarimi, img2_ayna_tasarimi, img3_ayna_tasarimi, img4_ayna_tasarimi, img5_ayna_tasarimi,
  ],
  bakim_onarim: [
    img1_bakim_onarim, img2_bakim_onarim,
  ],
  camli_camsiz_aliminyum_dograma: [
    img1_camli_camsiz_aliminyum, img2_camli_camsiz_aliminyum, img3_camli_camsiz_aliminyum, img4_camli_camsiz_aliminyum,
  ],
  dusakabin: [
    img1_dusakabin,
  ],
  katlanir_cam_balkon: [
    img1_cam_balkon_sistemler, img2_cam_balkon_sistemler,
  ],
  plise_perde_sineklik: [
    img1_plise_perde_sineklik, img2_plise_perde_sineklik,
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
        key: 'katlanir_cam_balkon',
      }
    case 'ayna_tasarımı':
      return {
        img: allImages.ayna_tasarimi,
        header: 'Ayna Tasarımı',
        key: 'ayna_tasarimi',
      }
    case 'yenileme':
      return {
        img: allImages.yenileme,
        header: 'Yenileme',
        key: 'yenileme',
      }
    case 'bakım_onarım':
      return {
        img: allImages.bakim_onarim,
        header: 'Bakım ve Onarım',
        key: 'bakim_onarim',
      }
    case 'pvc':
      return {
        img: allImages.pvc,
        header: 'PVC',
        key: 'pvc',
      }
    case 'duşakabin':
      return {
        img: allImages.dusakabin,
        header: 'Duşakabin',
        key: 'dusakabin',
      }
    case 'plise_perde_sineklik':
      return {
        img: allImages.plise_perde_sineklik,
        header: 'Plise Perde ve Sineklik',
        key: 'plise_perde_sineklik',
      }
    case 'camlı_camsız_aliminyum_korkuluk':
      return {
        img: allImages.camli_camsiz_aliminyum_dograma,
        header: 'Camlı, Camsız Aliminyum Korkuluk',
        key: 'camli_camsiz_aliminyum_dograma',
      }
  }
})
const images = computed(() => contents.value?.img)
const activeIndex = ref<number>(0)
const appStore = useAppStore()
</script>

<template>
  <div :class="!appStore.responsive ? 'w-full h-full flex' : 'w-full flex flex-column p-2 overflow-auto h-screen'">
    <div class="w-full flex justify-content-center align-items-center">
      <Galleria
        :active-index="activeIndex" :show-thumbnails="false" :show-indicators="true" :indicators-position="!appStore.responsive ? 'right' : 'bottom'"
        class="border-round-xl  h-full w-full" :value="images"
      >
        <template #item="slotProps">
          <img class="w-full h-full border " :src="slotProps.item">
        </template>
      </Galleria>
    </div>
    <div class="flex w-full">
      <div v-if="contents?.key === 'katlanir_cam_balkon'" class="w-full h-full gap-5 flex flex-column justify-content-center">
        <div class="text-3xl text-primary-400 border-1 flex w-full justify-content-center">
          {{ contents?.header }}
        </div>
        <div class="flex flex-column gap-3">
          <div>
            iki veya daha fazla temperli camın alüminyum sistem bütünü yardımıyla temperli camlar kasa içerisin de hareket eder . Duvar kenarına veya istenilen bir noktaya gelerek içeriye doğru katlanarak toplanır..Alüminyum sistemle entegre olan bazalarda altta ve üste toplam kilitli ve kilitsiz 4 adet tekerlek bulunmaktadır.Tekerleklerimiz çelik alaşımdan üretilip dış etkenlere karşı dayanıklıdır.Baza ve cam entegrasyonu tamamlandıktan sonra sistem oluklu ve oluksuz kasalar kullanılarak hazırlanır ve çalışır hale gelir.
          </div>
          <div>
            gold seri kollu ve ipli olarak (8mm teperli tek cam)
            progold seri kollu ve ipli olarak (8mm temperli tek cam - temper+ısı cam)
          </div>
          <div>
            NERELERDE TERCİH EDİLİR : maliyeti düşük ve katlandığı için Genel olarak evlerde kullanılır onun yanı sıra ofisler de , dükkan vitrinlerin de kullanımı mevcuttur.
          </div>
        </div>
        <div class="text-3xl text-primary-400 border-1  flex w-full justify-content-center">
          {{ "Sürme Cam Balkon" }}
        </div>
        <div class="flex flex-column gap-3">
          <div>
            iki veya daha fazla cam plakanın alüminyum sistem bütünü yardımıyla camlar biribirini yatay eksende çekerek hareket eder.İstenilen kenara doğru iç içe geçerek toplanır.Baza ile entegre olan altta ve üste toplam 4 tekerlek bulunur.
          </div>
          <div>
            8mm temperli ve temperli+ısıcamlı
          </div>
          <div>
            NERELEDE TERCİH EDİLİR : İç içe geçme özelliği ile dar her alanlarda sıkça tercih edilen sürme sistem ofisler de , vitrinler de , lokantalarda kullanılır
          </div>
        </div>
        <div class="text-3xl text-primary-400 border-1  flex w-full justify-content-center">
          {{ "Giyotin Cam Balkon" }}
        </div>
        <div class="flex flex-column gap-3">
          <div>
            iki veya daha fazla cam plakanın alüminyum sistem bütünü yardımıyla camlar biribirini dikey eksende çekerek hareket eder.Camlar aşşağı doğru iç içe geçerek toplanır.Baza ile entegre olan giyotin motoru ve kayış bulunur sisteme hareket verir
          </div>
          <div>
            8mm temperli ve temperli+ısıcamlı
          </div>
          <div>
            NERLERDE TERCİH EDİLİR : İç içe geçme özelliği ile dar alanlarda sıkça tercih edilen giyotin sistem otomatik ve yenilikçi tasarımı ile rahat kullanım sağlıyor genellikle cafe , düğün salonları , kış bahçelerinde kullanılır
          </div>
        </div>
        <div class="h-10rem" />
      </div>

      <div v-if="contents?.key === 'bakim_onarim'" class="w-full h-full gap-5 flex flex-column justify--content-center ">
        <div class="text-3xl text-primary-400 border-1 flex w-full justify-content-center">
          {{ contents?.header }}
        </div>
        <div class="flex flex-column gap-3">
          <div>
            Bakım ve onarım, yapıların ve sistemlerin uzun süre boyunca verimli, güvenli ve sorunsuz bir şekilde çalışmasını sağlamak amacıyla gerçekleştirilen kapsamlı ve düzenli kontroller ile müdahaleleri içerir. Bu süreçler, yapıların dayanıklılığını artırmak, olası hasarları önlemek ve işlevsel bozulmaların önüne geçmek için kritik bir rol oynar. Bakım faaliyetleri, sistemin ileride karşılaşabileceği potansiyel sorunları önceden tespit ederek koruma sağlarken, onarım işlemleri ise mevcut arızaların giderilmesi, hasarlı veya yıpranmış parçaların düzeltilmesi ya da değiştirilmesi üzerine yoğunlaşır. Özellikle cam, PVC, alüminyum sistemler, kapı ve pencere çerçeveleri, cephe kaplamaları ve diğer yapı elemanlarında yapılan bakım ve onarım işlemleri, sadece bu malzemelerin ömrünü uzatmakla kalmaz, aynı zamanda uzun vadede kullanıcılara önemli ölçüde maddi tasarruf sağlar.
          </div>
          <div>
            Düzenli bakım çalışmaları, yapıların estetik görünümünde meydana gelebilecek bozulmaları da önleyerek, yapının dış görünüşünü ve mimari değerini korur. Bunun yanı sıra, yapısal ve işlevsel performansın devamlılığını sağlayarak, enerji verimliliğini artırır ve bakım masraflarının daha da yükselmesine neden olabilecek büyük sorunların önüne geçer. Bakım ve onarım işlemleri, binaların zamanla aşınan veya dış etkenlerden zarar gören bileşenlerini ilk günkü haline getirerek, hem güvenli hem de konforlu bir yaşam alanı sunmayı hedefler. Bu süreçler, yapıların hem estetik hem de işlevsel açıdan mükemmel durumda kalmasını sağlar. İhmal edilmesi durumunda ise küçük çaplı arızalar büyüyerek daha maliyetli sorunlara yol açabilir. Bu nedenle, periyodik bakım ve onarım çalışmaları, uzun vadeli sürdürülebilirlik ve maliyet kontrolü açısından büyük önem taşır.
          </div>
        </div>
        <div class="h-10rem" />
      </div>

      <div v-if="contents?.key === 'ayna_tasarimi'" class="w-full h-full gap-5 flex flex-column justify--content-center ">
        <div class="text-3xl text-primary-400 border-1 flex w-full justify-content-center">
          {{ contents?.header }}
        </div>
        <div class="flex flex-column gap-3">
          <div>
            Ayna tasarımı, hem estetik hem de işlevsel amaçlar için kullanılan dekoratif bir unsurdur. Farklı boyutlar, şekiller ve çerçeve materyalleriyle mekânın karakterine uyum sağlayacak şekilde özelleştirilebilir. Aynalar, ışığı yansıtarak odaları daha geniş ve aydınlık gösterirken, aynı zamanda mekanlara derinlik ve şıklık katar.
          </div>
          <div>
            Modern, klasik, minimal ya da özgün tasarımlarla ayna, iç dekorasyonda güçlü bir araçtır ve banyo, salon, yatak odası gibi birçok alanda kullanılabilir. Ayna tasarımı, mekânın genel estetiğini tamamlayarak, dekorasyonun önemli bir parçası haline gelir.
          </div>
        </div>
        <div class="h-10rem" />
      </div>

      <div v-if="contents?.key === 'yenileme'" class="w-full h-full gap-5 flex flex-column justify--content-center ">
        <div class="text-3xl text-primary-400 border-1 flex w-full justify-content-center">
          {{ contents?.header }}
        </div>
        <div class="flex flex-column gap-3">
          <div>
            Yenileme, mevcut bir yapının işlevselliğini ve estetik değerini artırmak amacıyla gerçekleştirilen onarım ve iyileştirme çalışmalarını içerir. Bu süreçte, yıpranmış veya eskiyen cam, PVC, ayna, sineklik, camekan ve duşakabin gibi yapı elemanları yenilenir. Böylece yapı, sadece görsel açıdan modern bir görünüme kavuşmakla kalmaz, aynı zamanda performans olarak da iyileştirilir. Yenileme projeleri, enerji verimliliğini artırmayı ve kullanım ömrünü uzatmayı hedeflerken, modern tasarımlarla yapının estetik değerini de yükseltir.
          </div>
          <div>
            Ev, ofis veya ticari yapılarda yapılan bu yenileme işlemleri, mekanların hem işlevselliğini hem de kullanım konforunu artırır. Özellikle cam, PVC ve duşakabin gibi malzemeler yenilendiğinde, alanların daha modern ve pratik hale gelmesi sağlanır. Aynı zamanda sineklik ve camekan gibi ek yapı elemanlarının güncellenmesi, mekanların kullanışlılığını artırarak daha konforlu bir yaşam ya da çalışma alanı sunar. Yenileme projeleri, hem yapının uzun ömürlü olmasını sağlar hem de estetik açıdan güncel bir görünüme kavuşturur.
          </div>
        </div>
        <div class="h-10rem" />
      </div>

      <div v-if="contents?.key === 'pvc'" class="w-full h-full gap-5 flex flex-column justify--content-center ">
        <div class="text-3xl text-primary-400 border-1 flex w-full justify-content-center">
          {{ contents?.header }}
        </div>
        <div class="flex flex-column gap-3">
          <div>
            PVC sistemler, genellikle polivinil klorür (PVC) malzemesinden üretilen boru, profil ve diğer yapı elemanlarını içeren sistemlerdir. Bu sistemler, dayanıklılığı, hafifliği ve kimyasal direnci sayesinde sıklıkla inşaat, elektrik ve su tesisatı gibi alanlarda kullanılır.
          </div>
        </div>
        <div class="text-lg text-primary-400 flex w-full justify-content-start">
          <div class="border-bottom-1">
            {{ "Hangi PVC Elemanlarını Kullanıyoruz;" }}
          </div>
        </div>
        <div class="flex flex-column gap-3">
          <div>
            Mega yapı olarak pvc kapı ve pencere sistemlerinin üretimi ve montajını sağlamaktayız.
          </div>
        </div>
        <div class="text-lg text-primary-400 flex w-full justify-content-start">
          <div class="border-bottom-1">
            {{ "PVC kapı ve pencere avantajları?" }}
          </div>
        </div>
        <div class="flex flex-column gap-3">
          <div>
            <div class="pb-2">
              PVC kapı ve pencere sistemleri, enerji verimliliği, ses yalıtımı ve dayanıklılık sunan yapı elemanlarıdır. Bu sistemler, düşük bakım gereksinimi ile uzun ömürlüdür ve çeşitli tasarım seçenekleriyle estetik bir görünüm sağlar.
            </div>
            <div class="flex flex-column gap-2">
              <div>1. Enerji Verimliliği: PVC kapı ve pencereler, iyi bir yalıtım sağladığı için enerji tasarrufu sağlar. Kışın ısı kaybını azaltır, yazın ise dışarıdaki sıcak havayı içeri almaz.</div>

              <div>2. Dayanıklılık: PVC malzemesi, rutubet, nem ve kimyasal maddelere karşı dayanıklıdır. Çürümeye, paslanmaya veya renk solmasına karşı dirençlidir.</div>

              <div>3. Düşük Bakım: Ahşap veya metal gibi malzemelere göre daha az bakım gerektirir. Yalnızca düzenli temizlik ile uzun yıllar kullanılabilir.</div>

              <div>4. Ses Yalıtımı: PVC pencereler, dışarıdan gelen gürültüyü etkili bir şekilde azaltır, bu da daha konforlu bir yaşam alanı sunar.</div>

              <div>5. Çeşitli Tasarım Seçenekleri: Farklı renk ve desen seçenekleri ile estetik olarak her tarza uyum sağlar.</div>

              <div class="text-lg text-primary-400 mt-2 flex w-full justify-content-start">
                <div class="border-bottom-1">
                  {{ "Montaj Süreci:" }}
                </div>
              </div>

              <div>1. Ölçüm: Öncelikle, kapı veya pencere alanının doğru bir şekilde ölçülmesi gerekir. Bu, montajın düzgün yapılması için kritik öneme sahiptir.</div>

              <div>2. Hazırlık: Eski kapı veya pencere çıkarılır. Yüzeyin düzgün ve temiz olduğundan emin olunmalıdır.</div>

              <div>3. Kurulum: Yeni PVC kapı veya pencere, montaj çerçevesine yerleştirilir. Düzgün bir oturuş sağlamak için dikkatlice hizalanmalıdır.</div>

              <div>4. Yalıtım ve Montaj: Pencere ve kapının etrafına yalıtım malzemesi yerleştirilir. Daha sonra vida veya montaj elemanları ile sabitlenir.</div>

              <div>5. Tamamlama: Son olarak, dış yüzeyin ve iç mekanın düzgün bir görünüm kazanması için gerekli son işlemler yapılır.</div>
            </div>
          </div>
        </div>
        <div class="h-10rem" />
      </div>

      <div v-if="contents?.key === 'dusakabin'" class="w-full h-full gap-5 flex flex-column justify--content-center ">
        <div class="text-3xl text-primary-400 border-1 flex w-full justify-content-center">
          {{ contents?.header }}
        </div>
        <div class="flex flex-column gap-3">
          <div>
            Duşakabin, banyo alanında suyun etrafa sıçramasını önlemek ve daha düzenli bir kullanım sağlamak amacıyla tasarlanmış kapalı alanlardır. Genellikle cam ve alüminyum çerçeve kombinasyonu ile üretilir ve farklı stil, boyut ve tasarımlarda bulunur. Duşakabinler, estetik açıdan modern bir görünüm sunarken, suyun daha etkili bir şekilde kullanılmasını sağlar. Kullanıcıların mahremiyetini artırırken, temizlik açısından da avantajlar sunar. Farklı cam seçenekleriyle (örneğin, şeffaf, mat veya desenli) kişisel tercihlere göre özelleştirilebilir ve banyo dekorasyonuna uyum sağlar.
          </div>
        </div>
        <div class="h-10rem" />
      </div>

      <div v-if="contents?.key === 'plise_perde_sineklik'" class="w-full h-full gap-5 flex flex-column justify--content-center ">
        <div class="text-3xl text-primary-400 border-1 flex w-full justify-content-center">
          {{ contents?.header }}
        </div>
        <div class="flex flex-column gap-3">
          <div class="text-lg text-primary-400 flex w-full justify-content-start">
            <div class="border-bottom-1">
              {{ "Plise Perde;" }}
            </div>
          </div>
          <div>
            Plise perde, pencere ve kapılarınızda güneş ışığını ve sıcaklığını kontrol etmenizi sağlayan kullanışlı bir yapı elemanıdır. Plise perde, kumaşın katlanarak toplanmasını sağlayan bir mekanizmaya sahiptir. Bu sayede, pencere ve kapılarınızı istediğiniz oranda açıp kapatabilir, ışık geçirgenliğini ve mahremiyeti kontrol edebilirsiniz.
          </div>

          <div class="text-lg text-primary-400 flex w-full justify-content-start">
            <div class="border-bottom-1">
              {{ "Sineklik;" }}
            </div>
          </div>

          <div>
            Sineklik, sineklerin içeri girmesini engelleyen bir koruyucu sistemdir. Özellikle yaz aylarında, dışarıdan gelen böceklerin yaşam alanınıza girmesini önleyerek daha konforlu bir ortam sağlar.
          </div>
          <div class="text-lg text-primary-400 flex w-full justify-content-start">
            <div class="border-bottom-1">
              {{ "Bunun Sonunda;" }}
            </div>
          </div>
          <div>
            Plise perde, hem estetik hem de işlevsel özellikler sunan modern bir iç mekan çözümüdür. Plise perdeler, katlanabilir yapıları sayesinde alan tasarrufu sağlarken, farklı renk ve desen seçenekleri ile dekorasyona uyum sağlar. Sineklik işlevi ise, dışarıdan gelen böceklerin iç mekâna girmesini engelleyerek konforlu bir yaşam alanı oluşturur. Bu sistemler, genellikle pencere ve kapılara uygulanabilir ve kullanıcının ihtiyacına göre açılıp kapatılabilir.
            Plise perde ve sineklik, bir arada kullanılarak hem sinek koruması hem de ışık kontrolü sağlayabilir. Bu kombinasyon, estetik bir görünüm sunarken işlevselliğiyle de dikkat çeker.
          </div>
        </div>
        <div class="h-10rem" />
      </div>

      <div v-if="contents?.key === 'camli_camsiz_aliminyum_dograma'" class="w-full h-full gap-5 flex flex-column justify--content-center ">
        <div class="text-3xl text-primary-400 border-1 flex w-full justify-content-center">
          {{ contents?.header }}
        </div>
        <div class="flex flex-column gap-3">
          <div class="text-lg text-primary-400 flex w-full justify-content-start">
            <div class="border-bottom-1">
              {{ "Camlı Korkuluk;" }}
            </div>
          </div>
          <div>
            Camlı korkuluk, balkon, teras ve merdiven gibi alanlarda güvenliği sağlarken şeffaf yapısıyla ferah ve modern bir görünüm sunan yapı elemanıdır. Dayanıklı temperli cam ve paslanmaz çelik ya da alüminyum gibi taşıyıcılarla üretilen bu sistemler, hem iç hem de dış mekanlarda estetik ve işlevselliği bir araya getirir. Şeffaf yapısı sayesinde geniş bir görüş açısı sağlayan camlı korkuluklar, modern mimari projelerde sıkça tercih edilir ve minimal tasarımlar için ideal bir çözümdür.
          </div>
          <div class="text-lg text-primary-400 flex w-full justify-content-start">
            <div class="border-bottom-1">
              {{ "Camlı ve Aluminyum Korkuluk;" }}
            </div>
          </div>
          <div>
            Camlı ve alüminyumlu korkuluk, modern yapılarda estetik ve güvenliği bir arada sunan bir sistemdir. Şeffaf temperli cam paneller, hafif ve paslanmaz alüminyum profillerle desteklenerek hem dayanıklı hem de şık bir çözüm sağlar. Bu korkuluklar, balkon, teras, merdiven gibi alanlarda ferah bir görünüm sunarken, alüminyumun hava koşullarına dayanıklı yapısı sayesinde uzun ömürlüdür. Farklı renk ve kaplama seçenekleriyle her türlü dekorasyona uyum sağlayan camlı ve alüminyumlu korkuluklar, modern mimaride hem işlevsel hem de estetik bir tercih olarak öne çıkar.
          </div>
          <div class="text-lg text-primary-400 flex w-full justify-content-start">
            <div class="border-bottom-1">
              {{ "Aluminyum Korkuluk;" }}
            </div>
          </div>
          <div>
            Alüminyum korkuluk, hafifliği, dayanıklılığı ve estetik görünümü ile modern yapılarda sıkça tercih edilen bir yapı elemanıdır. Genellikle balkon, teras, merdiven ve havuz kenarlarında kullanılan bu korkuluklar, paslanmaz ve korozyona karşı dayanıklı malzemelerden üretilerek dış mekan koşullarında uzun ömürlü kullanım sunar. Farklı renk ve kaplama seçenekleri ile özelleştirilebilen alüminyum korkuluklar, minimalist tasarımlardan geleneksel tasarımlara kadar geniş bir yelpazede tercih edilerek çeşitli mimari tasarımlara uyum sağlar. Estetik bir görünüm sunmasının yanı sıra, güvenlik sağlamak amacıyla tasarlanmış bu korkuluklar, hem işlevsel hem de dekoratif bir unsur olarak öne çıkar.
          </div>
          <div class="text-lg text-primary-400 flex w-full justify-content-start">
            <div class="border-bottom-1">
              {{ "Bunun Sonunda;" }}
            </div>
          </div>
          <div>
            Camlı ve camsız alüminyum korkuluk sistemleri, güvenlik ve estetik açıdan önemli unsurlardır. Camlı alüminyum korkuluklar, şık ve modern bir görünüm sunarak, balkon, teras ve merdivenlerde kullanım için ideal bir çözümdür. Cam paneller, dış görünümü zarif kılar ve çevre manzarasının kesintisiz bir şekilde izlenmesine olanak tanır. Camsız alüminyum korkuluklar ise daha minimal bir tasarıma sahip olup, sağlam yapıları sayesinde güvenliği artırır. Her iki sistem de dayanıklı, hafif ve bakım gerektirmeyen alüminyum malzemeden üretilir, ayrıca paslanmazlık özelliği sayesinde uzun ömürlüdür. Hem iç hem de dış mekânlarda çeşitli tasarım seçenekleri ile kullanıcıların ihtiyaçlarına göre özelleştirilebilir.,
          </div>
        </div>
        <div class="h-10rem" />
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
name: project
meta:
  layout: default
</route>
