import { defineStore } from 'pinia'
import type { Company, Cowork, Team, Work } from '../types'

export const useAdminStore = defineStore('admin', () => {
  const company = ref<Company>({
    name: 'Mega Yapı',
    about: 'Mega Yapı olarak, yılların tecrübesi ve uzman kadromuzla yapı sektöründe öncü hizmetler sunuyoruz. Cam balkon, PVC doğrama, cam ve ayna uygulamaları başta olmak üzere, mekanlarınıza modern ve estetik dokunuşlar katıyoruz. Her projede kaliteyi ve müşteri memnuniyetini en üst düzeyde tutmayı ilke edinmiş olan firmamız, hem bireysel hem de ticari alanlarda ekonomik ve yenilikçi çözümler üretmektedir. Yüksek işçilik standartlarımız ve titizlikle yürüttüğümüz montaj işlemleri sayesinde uzun ömürlü ve dayanıklı sonuçlar elde etmekteyiz. Mega Yapı olarak amacımız, yaşam alanlarınıza hem şıklık hem de fonksiyonellik kazandırmaktır. Güvenilir, hızlı ve profesyonel hizmet anlayışımızla müşterilerimizin yanındayız.',
    address: 'Millet, Moda Sk. No:6, 16270 Yıldırım/Bursa',
    cellPhone: '05368233070',
    city: 'Bursa',
    country: 'Türkiye',
    email: 'yapimegabursa@gmail.com',
    img: '',
    instagram: 'mega_yapibursa',
    instagramLink: 'https://www.instagram.com/mega_yapibursa/',
    offer: 'ÜCRETSİZ KEŞİF',
    phone: '05449606980',
  })

  const team = ref<Team[]>([])

  const works = ref<Work[]>([{
    name: 'Katlanır Cam Balkon',
    id: '1',
    about: 'Real marka sistem kullanılarak yapılan balkonlarımızda, kişinin isteği ve yerin uygunluğuna göre birkaç farklı sistem sunmaktayız. Bu sistemler arasında tek camlı gold ve progold sistem, ısıcamlı progold sistem, sürme seri sistem ve giyotin sistem yer almaktadır.',
  }, {
    id: '2',
    name: 'Ayna Tasarımı',
    about: 'Mekanınıza derinlik ve ferahlık kazandıran tasarım aynalarımız, geniş model seçenekleriyle yaşam alanlarınıza estetik bir dokunuş katıyor. Asimetrik, boy aynası, simetrik ve baklava desen gibi farklı tasarım alternatifleriyle her mekana uygun çözümler sunuyoruz. Her bir ayna, mekanın karakterine ve müşterinin zevkine göre özenle seçilir ve uygulanır. İster modern bir dokunuş, ister klasik bir tarz arayışında olun, aynalarımız mekânlarınıza şıklık ve zarafet katar. Mega Yapı olarak, kaliteli işçiliğimiz ve tasarım esnekliğimizle, her projede en iyi sonucu elde etmeyi hedefliyoruz.',
  }, {
    id: '3',
    about: 'Mega Yapı olarak, yeni projelerin yanı sıra yenileme hizmetleri de sunmaktayız. Eskiyen ya da işlevselliğini yitiren alanlarınızı, modern ve estetik çözümlerle yeniden hayata geçiriyoruz. Cam balkon, PVC kapı ve pencere sistemleri, cam ve ayna uygulamaları gibi çeşitli hizmetlerimizle, mekanlarınızı hem görsel olarak yeniliyor hem de işlevselliğini artırıyoruz.',
    name: 'Yenileme',
  }, {
    id: '4',
    about: 'Mevcut PVC ve alüminyum sistemlerinizin bakım ve onarım hizmetlerini de sunuyoruz. Kırılan camlar (ısı cam, tek cam, temperli cam, lamine cam, konfor cam) dahil olmak üzere, sistemlerinizin tüm eksik parçalarını tamamlayıp, ilk günkü gibi teslim etmek birinci önceliğimizdir. Bu hizmetlerle, hem cam sistemlerinizin uzun ömürlü olmasını sağlıyor hem de kullanım konforunu arttırıyoruz. Bakım ve onarım süreçlerimizde, kaliteli malzemeler kullanarak sistemlerinizin performansını eski haline getiriyoruz. Müşteri memnuniyetini en üst seviyede tutmayı hedefleyerek, hem ekonomik hem de güvenilir çözümler sunuyoruz.',
    name: 'Bakım ve Onarım',
  }, {
    id: '5',
    about: 'Müşterilerimizin talepleri doğrultusunda farklı marka seçenekleri sunarak, her projeye uygun çözümler üretiyoruz. 60\'lık ve 70\'lik olarak kapı ve pencere sistemlerimiz bünyemizde bulunmaktadır. Kaliteli PVC malzemelerden üretilen bu sistemler, hem dayanıklılık hem de enerji verimliliği sağlamakta, yaşam alanlarınızı daha konforlu ve modern hale getirmektedir.',
    name: 'PVC',
  }, {
    id: '6',
    name: 'Duşakabin',
    about: 'İstenilen alüminyum tarzı ve rengine göre özel imalat yapmaktayız. Duşakabinlerde kullanılan camlar, müşterilerimizin zevkine ve ihtiyaçlarına göre desenli, desensiz ya da düz kumlamalı olarak seçilebilir. Bu esneklik, her türlü dekorasyon tarzına ve mekana uygun, şık ve işlevsel çözümler sunmamıza olanak tanır.',
  }, {
    name: 'Plise Perde ve Sineklik',
    about: 'Alüminyum ve PVC sistemleriniz için geniş bir ürün yelpazesi sunuyoruz. Kancalı ve vidalı plise perdeler, mekanlarınıza şık bir görünüm kazandırırken, aynı zamanda pratik bir kullanım sağlar. Bu perdeler, açılıp kapanma kolaylığı ile ferah bir atmosfer yaratır ve istenilen alanın ışık ve mahremiyet dengesini ayarlamanıza olanak tanır.Ayrıca, pileli ve menteşeli sistem sinekliklerimiz, evlerinizdeki konforu artırmak için mükemmel bir çözüm sunar. Kedi dostu sineklik seçenekleriyle, evcil hayvanlarınızın güvenliğini sağlarken, normal tül sineklikler de havalandırmayı kolaylaştırır ve dışarıdaki böceklerden korur.',
    id: '7',
  }])

  const coWorks = ref<Cowork[]>([{
    id: '1',
    name: 'Arena AVM',
  }, {
    id: '2',
    name: 'Biaport',
  }, {
    id: '3',
    name: 'Kaplan Okulları',
  }, {
    id: '4',
    name: 've 100\' den fazla memnun müşteri',
  }])

  const commands = [
    {
      color: 'blue',
      name: 'Ahmet K.',
      rate: 5,
      command: 'Cam balkon yaptırdık ve sonuç mükemmel oldu. Hem hızlı hem de çok temiz çalıştılar. Fiyat olarak da oldukça makul. Herkese tavsiye ederim!',
    },
    {
      color: 'purple',
      name: 'Zeynep T.',
      rate: 5,
      command: 'PVC doğrama işinde çok profesyonel. Mega Yapı ile çalışmak gerçekten çok keyifliydi. Hem ekibi hem de işleriyle memnuniyetimizi kazandılar. Teşekkürler!',
    },
    {
      color: 'orange',
      name: 'Elif A.',
      rate: 5,
      command: 'Mutfak cam balkon projemiz mükemmel oldu. Mega Yapı ekibi işlerini özenle yapıyor ve her detaya dikkat ediyorlar. Hem ekonomik hem de kaliteli bir hizmet almak isteyenler için çok ideal.',
    },
    {
      color: 'green',
      name: 'Burak Y.',
      rate: 5,
      command: 'Cam ve ayna uygulamaları konusunda kesinlikle doğru adres. Salonum için devasa bir ayna yaptırdım ve sonuç beklentimin çok ötesinde oldu. Güler yüzlü hizmet için ayrıca teşekkür ederim.',
    },
  ]

  return {
    company,

    commands,
    works,
    team,
    coWorks,

  }
})
