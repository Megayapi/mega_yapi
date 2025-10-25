<script setup lang="ts">
import HomePageImg from '../images/homepage/1.jpg'

definePageMeta({
  name: 'home',
})
const { data: home } = await useAsyncData(() =>
  queryCollection('about').first())

const { data: projects } = await useAsyncData(() =>
  queryCollection('projects').all())

const { data: comments } = await useAsyncData(
  () => queryCollection('comments').first(),
)
</script>

<template>
  <div class="flex flex-col gap-12">
    <section id="home">
      <div class="relative flex lg:flex-row flex-col justify-around isolate px-6 lg:pt-14 lg:px-26 gap-16">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-blue-700 to-blue-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-blue-700 to-blue-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="max-w-2xl py-4 sm:py-48 lg:py-36">
          <div class="text-left">
            <h1 class="text-3xl font-semibold tracking-tight text-balance text-gray-900 lg:text-7xl">
              {{ home?.header }}
            </h1>
            <p class="mt-8 text-md font-medium text-pretty text-gray-500 lg:text-xl">
              {{ home?.description }}
            </p>
          </div>
        </div>
        <img class="rounded-lg lg:h-[600px] lg:flex hidden" :src="HomePageImg">
      </div>
    </section>

    <section id="projects" class="mx-auto max-w-7xl mt-12 md:px-0 px-2">
      <h1 class="text-3xl font-semibold tracking-tight text-balance text-gray-900 lg:text-5xl mb-6">
        Hizmetlerimiz
      </h1>
      <div class="grid md:grid-cols-3 grid-cols-1 gap-12">
        <CardProject
          v-for="project in projects" :key="project.id" :project="project" @click="navigateTo(project.path)"
        />
      </div>
    </section>

    <section id="comments" class="mx-auto max-w-7xl mt-12 md:px-0 px-2">
      <h1 class="text-3xl font-semibold tracking-tight text-balance text-gray-900 lg:text-5xl mb-6">
        Yorumlar
      </h1>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
        <CardComment v-for="(comment, i) in comments?.meta.comments" :key="i" :comment="comment" />
      </div>
    </section>

    <section id="contact" class="mx-auto max-w-7xl mt-12 md:px-0 px-2">
      <h1 class="text-3xl font-semibold tracking-tight text-balance text-gray-900 lg:text-5xl mb-6">
        İletişim
      </h1>
      <div class="w-full flex-1 mx-auto rounded-xl overflow-hidden shadow-xl">
        <iframe
          :src="home?.map"
          class="w-full h-96 border-none"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>

      <div class="flex justify-around mt-16 md:w-7xl w-full mx-auto md:px-0 px-2">
        <div v-for="(item, i) in home?.phones" :key="i" class="flex-1 flex flex-col items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">
            <Icon name="heroicons:phone" class="w-5 h-5" />
          </div>
          <a :href="`tel:+9${item.split(' ').join('')}`" class="whitespace-pre-line text-sm hover:underline transition-opacity opacity-80 hover:opacity-100">
            {{ item }}
          </a>
        </div>

        <div class="flex flex-1 flex-col items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">
            <Icon name="heroicons:map-pin" class="w-5 h-5" />
          </div>
          <a class="whitespace-pre-line text-sm">
            {{ home?.address }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
