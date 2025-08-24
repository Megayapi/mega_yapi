<script setup lang="ts">
defineProps<{
  comment: Comment
}>()
</script>

<template>
  <div
    class="rounded-xl border border-neutral-400/10 bg-neutral-400/5 p-6 shadow-md hover:shadow-lg transition duration-300"
  >
    <p class="text-sm leading-relaxed italic opacity-90">
      “{{ comment.content }}”
    </p>
    <div class="mt-4 text-right text-xs opacity-60">
      — {{ comment.name }}<br>
      <span>{{ comment.date }}</span>
    </div>
  </div>
</template>
