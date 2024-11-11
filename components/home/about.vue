<script setup lang="ts">
const customer = ref(0)
const year = ref(0)
const satisfaction = ref(0)

onMounted(() => {
  numberEffect(400, 4500, (currentNum) => {
    customer.value = currentNum
  })
  numberEffect(20, 5500, (currentNum) => {
    year.value = currentNum
  })
  numberEffect(100, 3500, (currentNum) => {
    satisfaction.value = currentNum
  })
})
</script>

<template>
  <div class="w-full p-2 h-full gap-6 py-4 flex flex-col">
    <div class="lg:text-6xl text-3xl lg:text-left text-right justify-end flex gap-8">
      <div class="flex flex-col justify-start">
        <label class="text-primary-400"> {{ `+${year}` }} </label>
        <label class="lg:text-xl text-sm"> yıldan fazla <label class="text-green-500 dark:text-green-400"> tecrübe </label> </label>
      </div>

      <div class="flex flex-col justify-start">
        <label class="text-primary-400"> {{ `+${customer}` }} </label>
        <label class="lg:text-xl text-sm"> 'den fazla <label class="text-green-500 dark:text-green-400"> müşteri </label> </label>
      </div>

      <div class="flex flex-col justify-start">
        <label class="text-primary-400"> {{ `%${satisfaction}` }} </label>
        <label class="lg:text-xl text-sm"> müşteri <label class="text-green-500 dark:text-green-400"> memnuniyeti </label> </label>
      </div>
    </div>
    <label class="text-center text-xl lg:px-8 md:p-4 sm:p-2">
      Mega Yapı olarak, yılların tecrübesi ve uzman kadromuzla yapı sektöründe öncü hizmetler sunuyoruz. Cam
      balkon, PVC doğrama, cam ve ayna uygulamaları başta olmak üzere, mekanlarınıza modern ve estetik dokunuşlar
      katıyoruz.Her projede kaliteyi ve müşteri memnuniyetini en üst düzeyde tutmayı ilke edinmiş olan firmamız,
      hem bireysel hem de ticari alanlarda ekonomik ve yenilikçi çözümler üretmektedir.Yüksek işçilik
      standartlarımız ve titizlikle yürüttüğümüz montaj işlemleri sayesinde uzun ömürlü ve dayanıklı sonuçlar elde
      etmekteyiz.Mega Yapı olarak amacımız, yaşam alanlarınıza hem şıklık hem de fonksiyonellik kazandırmaktır.
      Güvenilir, hızlı ve profesyonel hizmet anlayışımızla müşterilerimizin yanındayız.
    </label>
    <div class="flex justify-around h-full items-center">
      <div
        :class="`${hoverAnimation} text-3xl flex justify-center gap-4 items-center my-2 dark:bg-gray-950 bg-gray-300 py-2 px-3 rounded cursor-pointer`"
      >
        <a href="tel:05449606980" class="flex flex-wrap gap-2 items-center text-center justify-center">
          <UIcon name="material-symbols:phone-enabled" class="text-3xl" />
          <div> <label class="underline underline-offset-4">ÜCRETSİZ KEŞİF</label> İÇİN BİZİ ARAYIN </div>
          <div class="dark:text-green-400 text-green-500 font-semibold"> "0 544 960 6980" </div>
        </a>
      </div>
    </div>
  </div>
</template>
