<template>
  <button
  :class="button_color + ' rounded-md px-3 py-1 mr-2 mb-2 flex space-x-1 transform transition-all duration-200 hover:scale-105'"
  >
    <h1>{{ filter_name }}</h1>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  filter_name: string;
  button_color: string;
}>();
</script>

<script lang="ts">
export default {
}
</script>

<style>

</style>