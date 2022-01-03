<script setup lang="ts">
</script>

<script lang="ts">
import anime from 'animejs';
import navbar from './components/layout/navbar.vue';

export default {
  mounted() {

  },
  components: { navbar },
  methods: {
    enter(el: Element, done: any) {
      anime({
        targets: el,
        duration: 400,
        translateX: [-200, 0],
        opacity: [0, 1],
        easing: 'easeOutCubic',
        complete: done,
      })
    },
    leave(el: Element, done: any) {
      anime({
        targets: el,
        duration: 400,
        translateX: -200,
        opacity: [1, 0],
        easing: 'easeInCubic',
        complete: done,
      })
    },

  }
}
</script>

<template>
  <div class="dark">
    <div class="bg-str-ice text-black dark:bg-str-bleck dark:text-white min-h-screen">
      <navbar/>
      <router-view v-slot="{ Component }">
        <!-- <transition name="fade" :css="false" @enter="enter" @leave="leave"> -->
          <component :is="Component" />
        <!-- </transition> -->
      </router-view>
    </div>
  </div>
</template>

<style>
</style>
