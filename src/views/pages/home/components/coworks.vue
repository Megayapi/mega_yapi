<script setup lang="ts">
import type { Cowork } from '~/core/types'

defineProps<{
  work: Cowork
}>()
</script>

<template>
  <Tag class="text-md select-none white-space-nowrap" severity="info" :value="work.name" rounded />
</template>
