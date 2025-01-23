<template>
  <div class="w-full h-full flex flex-col absolute top-0 left-0">
    <div class="w-full flex justify-between gap-2 dark:bg-gray-950 bg-gray-300 text-lg lg:py-4 lg:px-6 md:py-2 md:px-3 py-1 px-2">
      <UButton :to="{ name: 'projects' }" variant="soft" icon="material-symbols:arrow-back-ios-rounded" label="Hizmetlerimiz" />
      <UButton class="lg:w-6/12 md:w-6/12 flex justify-center text-center font-semibold" :to="{ name: 'contact' }" color="green" icon="material-symbols:phone-enabled-sharp" label="BİZİMLE İLETİŞİME GEÇİN" />
    </div>
    <div class="w-full h-full justify-between items-center  overflow-auto flex flex-col lg:flex-row lg:p-8 md:p-4 sm:p-2">
      <div class="lg:w-6/12 md:w-6/12 w-11/12 flex items-center">
        <slot />
      </div>
      <div class="w-full h-full text-left flex flex-col gap-6 lg:p-12 md:p-6 p-4">
        <slot name="text" />
      </div>
    </div>
  </div>
</template>
