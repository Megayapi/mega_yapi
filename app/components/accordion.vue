<script setup lang="ts">
interface SSSItem { question: string, answer: string }

const props = defineProps<{
  items: SSSItem[]
}>()

const openIndex = ref(0)
</script>

<template>
  <div class="md:w-7xl divide-y divide-gray-200 rounded-lg border border-gray-200">
    <div
      v-for="(item, i) in props.items"
      :key="i"
      class="block w-full"
    >
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 p-4 text-left focus:outline-none"
        @click="openIndex = i"
      >
        <span class="font-medium text-lg">{{ item.question }}</span>
        <Icon
          name="lucide-chevron-down"
          class="transition-transform"
          :class="openIndex === i ? 'rotate-180' : ''"
        />
      </button>

      <div
        class="grid transition-[grid-template-rows] duration-200 ease-out"
        :style="openIndex === i ? 'grid-template-rows: 1fr' : 'grid-template-rows: 0fr'"
      >
        <div class="overflow-hidden">
          <div class="px-4 pb-4 text-gray-700">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
