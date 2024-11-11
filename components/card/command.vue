<script setup lang="ts">
const props = defineProps<{
  command: {
    color: string
    name: string
    command: string
    platform: string
  }
}>()
</script>

<template>
  <div
    class="flex items-center lg:p-4 md:p-2 p-2 relative
    min-w-[280px] w-[400px] min-h-[100px]
    h-[150px]
    dark:bg-gray-950 bg-gray-300 rounded"
  >
    <UIcon :name="props.command.platform === 'Google' ? 'logos:google-play-icon' : ''" class="absolute top-2 left-2 text-2xl" />
    <div>
      <div
        :class="`
      rounded-full flex justify-center
      items-center h-14 w-14 bg-${props.command.color}-400 text-white
       text-2xl font-semibold`"
      >
        <label>{{ props.command.name[0] }}</label>
        <label>{{ props.command.name.split(' ')[1] }}</label>
      </div>
    </div>
    <div class="h-full flex flex-col m-2 justify-between gap-2">
      <div class="flex w-full justify-between border-b dark:border-gray-700 border-gray-300 px-2">
        <label class="font-normal"> {{ props.command.name }} </label>
        <div class="dark:text-yellow-400 text-yellow-500">
          <UIcon v-for="i in 5" :key="i" name="material-symbols:star" />
        </div>
      </div>
      <label
        class="overflow-y-auto p-2 font-normal
        [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-blue-400/25
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-400"
      > {{ props.command.command }} </label>
    </div>
  </div>
</template>
