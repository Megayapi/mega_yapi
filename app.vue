<script setup lang="ts">
const appConfig = useAppConfig()
onMounted(() => {
  appConfig.ui.primary = 'sky'
  appConfig.ui.strategy = 'stone'
})

useHead({
  title: 'MEGA YAPI',
  meta: [
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: 'favicon.ico',
    },
  ],
  script: [
    {
      innerHTML: `(function (w, d, s, l, i) {
        w[l] = w[l] || []
        w[l].push({
          'gtm.start': new Date().getTime(),
          'event': 'gtm.js',
        })
        const f = d.getElementsByTagName(s)[0]
        const j = d.createElement(s)
        const dl = l !== 'dataLayer' ? '&l=' + l : ''
        j.async = true
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
        f.parentNode.insertBefore(j, f)
      })(window, document, 'script', 'dataLayer', 'GTM-WL52TK3L')`,
      type: 'text/javascript',
    },
  ],
  noscript: [
    {
      children: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL52TK3L"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator />
  <Transition name="page" mode="in-out">
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </Transition>
  <a href="https://github.com/atlasyigitaydin" target="_blank" class="fixed bottom-0 lg:visible lg:flex md:hidden hidden left-0 opacity-70 gap-1 justify-start items-center">
    <UIcon name="mdi:github" class="text-xl" />
    Made by
    <div class="underline"> atlasyigitaydin </div>
  </a>
</template>

<style lang="css">
h3 {
   @apply text-4xl text-center font-normal text-primary-400;
}
h2 {
   @apply text-2xl font-light text-primary-400;
}
h1 {
   @apply text-lg font-light indent-8;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, filter 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
