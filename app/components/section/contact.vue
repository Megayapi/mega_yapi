<script setup lang="ts">
const contacts = [
  {
    icon: 'heroicons:phone',
    text: '0 544 960 69 80',
    link: 'tel:05449606980',
  },
  {
    icon: 'heroicons:phone',
    text: '0 536 823 30 70',
    link: 'tel:05368233070',
  },
  {
    icon: 'heroicons:map-pin',
    text: `Türkiye / Bursa\nMillet, Moda Sk. No:6, 16270\nYıldırım`,
    link: 'https://maps.app.goo.gl/xxx',
  },
]

const socials = [
  {
    icon: 'mdi:email',
    link: 'mailto:yapimegabursa@gmail.com',
  },
  {
    icon: 'mdi:instagram',
    link: 'https://www.instagram.com/mega_yapibursa/',
  },
  {
    icon: 'mdi:whatsapp',
    link: 'https://wa.me/905449606980',
  },
]
</script>

<template>
  <section id="contact" class="w-full py-20 px-6">
    <div class="lg:w-9/12 w-12/12 mx-auto rounded-xl overflow-hidden shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d380.8810573354862!2d29.094002999999997!3d40.207985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6db839dd56c9f15%3A0x45658b3b72e9192b!2sMega%20Yap%C4%B1!5e0!3m2!1str!2str!4v1744228713831!5m2!1str!2str"
        class="w-full h-96 border-none"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>

    <div class="mt-16 w-full max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
      <div v-for="(item, i) in contacts" :key="i" class="flex flex-col items-center gap-3">
        <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">
          <Icon :name="item.icon" class="w-5 h-5" />
        </div>
        <a :href="item.link" class="whitespace-pre-line text-sm hover:underline transition-opacity opacity-80 hover:opacity-100">
          {{ item.text }}
        </a>
      </div>
    </div>

    <div class="mt-12 w-full flex justify-center gap-6">
      <a
        v-for="(social, i) in socials"
        :key="i"
        :href="social.link"
        target="_blank"
        class="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-400/10 hover:bg-zinc-400/20 transition"
      >
        <Icon :name="social.icon" class="text-xl" />
      </a>
    </div>
  </section>
</template>
