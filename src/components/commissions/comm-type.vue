<template>
  <details class="border-2 border-str-bleck bg-str-ice p-4 rounded-md">
    <summary class="text-2xl font-bold cursor-pointer filter hover:translate-x-2 transition-all">
      {{ title }}
    </summary>
    <div class="pt-2">
      <slot/>
    </div>
  </details>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>

<script lang="ts">
  export default {}
</script>