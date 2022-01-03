<template>
  <div class="flex">
    <a
    v-for="s in links"
    :key="s"
    :href="s.url"
    class="anim_social_icon"
    >
      <i :class='"bx bx-md transform transition-transform hover:scale-105 hover:-translate-y-1 " + s.icon'></i>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  links: {
    name: string;
    url: string;
    icon: string;
  }[]
}>()
</script>

<script lang="ts">
export default {}
</script>