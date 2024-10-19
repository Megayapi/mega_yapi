<script setup lang="ts">
definePageMeta({
  name: 'contact',
})
</script>

<template>
  <div class="flex lg:flex-row flex-col w-full h-full justify-between gap-4">
    <KeepAlive>
      <iframe
        class="w-full h-full rounded"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.3051924645567!2d29.093585004457726!3d40.2080566886573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6db839dd56c9f15%3A0x45658b3b72e9192b!2sMega%20Yap%C4%B1!5e0!3m2!1str!2str!4v1729329052106!5m2!1str!2str"
        width="600"
        height="450"
        style="border:0;"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </KeepAlive>
    <div class="overflow-y-auto overflow-x-hidden h-full w-full flex justify-center gap-8 items-center flex-col">
      <CardContact href="tel:05449606980" icon="material-symbols:phone-enabled">
        0 544 960 69 80
      </CardContact>
      <CardContact href="tel:05368233070" icon="material-symbols:phone-enabled">
        0 536 823 30 70
      </CardContact>
      <CardContact target href="https://www.google.com/maps?ll=40.207976,29.09441&z=17&t=m&hl=tr&gl=TR&mapclient=embed&q=Mat+Sk.+No:6+Millet+16270+Y%C4%B1ld%C4%B1r%C4%B1m/Bursa" icon="material-symbols:location-on">
        <div class="text-right">
          <div>
            Türkiye / Bursa
          </div>
          <div>
            Millet, Moda Sk. No:6, 16270 Yıldırım
          </div>
        </div>
      </CardContact>
      <UDivider class="w-8/12" />
      <div class="flex w-8/12 lg:justify-around md:justify-around justify-between text-3xl">
        <CardContact no-content icon="material-symbols:mail" href="mailto:yapimegabursa@gmail.com" />
        <CardContact no-content icon="streamline:instagram-solid" target href="https://www.instagram.com/mega_yapibursa/" />
        <CardContact no-content target icon="streamline:whatsapp-solid" href="https://wa.me/905449606980" />
      </div>
    </div>
  </div>
</template>
