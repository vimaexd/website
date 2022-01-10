<script lang="ts">
import anime from 'animejs';
import navbar from './components/layout/navbar.vue';
import footer from './components/layout/footer.vue';

export default {
  mounted() {},
  components: { navbar, footer },
  methods: {}
}
</script>

<template>
  <div class="light">
    <div class="bg-str-ice text-black dark:bg-str-bleck dark:text-white min-h-screen">
      <navbar/>
      <router-view v-slot="{ Component }">
          <component :is="Component" />
      </router-view>
      <footer/>
    </div>
  </div>
</template>

<style>
</style>
