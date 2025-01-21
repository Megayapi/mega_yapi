<script setup lang="ts">
const isHovered = ref<boolean>(false)
const commands = [
  {
    color: 'purple',
    name: 'Meryem A.',
    command: 'Balkonuma cam balkon yaptırdım hızlı teslimat ve montaj ile Şaban Bey ve Mert ustadan çok memnun kaldım, hoş sohbetleri içinde ayrıca teşekkür ederim',
    platform: 'Google',
  },
  {
    color: 'blue',
    name: 'Reyhan N.',
    command: 'Evimin silikonlarını çekmişti artık içeriye hiç soğuk girmiyor. Teşekkürler Mega Yapı ✨',
    platform: 'Google',
  },
  {
    color: 'yellow',
    name: 'Ahmet K.',
    command: 'Cam balkon yaptırdık ve sonuç mükemmel oldu. Hem hızlı hem de çok temiz çalıştılar. Fiyat olarak da oldukça makul. Herkese tavsiye ederim!',
    platform: 'Rl',
  },
  {
    color: 'purple',
    name: 'Zeynep T.',
    command: 'PVC doğrama işinde çok profesyonel. Mega Yapı ile çalışmak gerçekten çok keyifliydi. Hem ekibi hem de işleriyle memnuniyetimizi kazandılar. Teşekkürler!',
    platform: 'Rl',
  },
  {
    color: 'indigo',
    name: 'Darknes S.',
    command: 'Detaylı, hızlı ve ilgililer, evimin balkonunu yaptırdım ve harika iş yapıldı kesinlikle tavsiye ederim.',
    platform: 'Google',
  },
  {
    color: 'orange',
    name: 'Elif A.',
    command: 'Mutfak cam balkon projemiz mükemmel oldu. Mega Yapı ekibi işlerini özenle yapıyor ve her detaya dikkat ediyorlar. Hem ekonomik hem de kaliteli bir hizmet almak isteyenler için çok ideal.',
    platform: 'Rl',
  },
  {
    color: 'green',
    name: 'Burak Y.',
    command: 'Cam ve ayna uygulamaları konusunda kesinlikle doğru adres. Salonum için devasa bir ayna yaptırdım ve sonuç beklentimin çok ötesinde oldu. Güler yüzlü hizmet için ayrıca teşekkür ederim.',
    platform: 'Rl',
  },
]
</script>

<template>
  <div
    class="w-full flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:h-[4px] p-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-blue-400/25
            dark:[&::-webkit-scrollbar-thumb]:bg-blue-400"
    @mouseover="isHovered = true" @mouseleave="isHovered = false"
  >
    <CardCommand
      v-for="(command, index) in [...commands, ...commands, ...commands, ...commands, ...commands]"
      :key="index"
      :class="{ 'auto-scroll': !isHovered }"
      :command="command"
    />
  </div>
</template>
