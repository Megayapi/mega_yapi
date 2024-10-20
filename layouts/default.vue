<template>
  <PageMain>
    <Navbar />
    <div class="w-full h-full lg:p-8 md:p-4 p-2 overflow-hidden relative">
      <Banner style="z-index: 9999;" />
      <slot />
    </div>
  </PageMain>
</template>
