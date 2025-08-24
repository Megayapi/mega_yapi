<template>
  <div class="fixed left-0 top-0 w-screen h-screen flex flex-col overflow-x-hidden scroll-smooth">
    <Banner />
    <AppHeader />
    <slot />
    <AppFooter />

    <CtaButton class="fixed md:right-12 right-6 md:bottom-12 bottom-6 z-9999" />
  </div>
</template>
