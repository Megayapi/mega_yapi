<script setup lang="ts">
const adminStore = useAdminStore()
</script>

<template>
  <div
    v-if="!useAppStore().responsive"
    v-animateonscroll="{ enterClass: 'fadeinright' }"
    class="flex flex-column animation-duration-1000 animation-ease-in-out h-full w-full"
  >
    <div class="w-full h-full flex flex-column">
      <div class="h-full w-full flex flex-column text-right gap-4 overflow-auto">
        <Divider
          :pt="{
            content: {
              class: 'py-1 px-3 border-round-xl shadow-6',
            },
          }" align="right" type="dashed"
        >
          <label class=""> {{ "Kimlerle Çalıştık" }}</label>
        </Divider>
        <div class="flex gap-2 justify-content-end">
          <Coworks
            v-for="work in adminStore.coWorks" :key="work.id"
            :work="work"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="flex flex-column gap-1"
  >
    <label class="flex w-full justify-content-center text-xl mt-2 border-bottom-1 surface-border"> {{ "Kimlerle Çalıştık" }}</label>
    <div class="flex gap-2 flex-wrap justify-content-center px-2">
      <Coworks
        v-for="work in adminStore.coWorks"
        :key="work.id"
        :work="work"
      />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap');

.charm-regular {
  font-family: "Charm", cursive;
  font-weight: 400;
  font-style: normal;
}

.charm-bold {
  font-family: "Charm", cursive;
  font-weight: 700;
  font-style: normal;
}
</style>
