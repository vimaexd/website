<template>
  <div class="flex flex-row items-center justify-center space-x-2">
    <svg height="3em" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-0 logo">
      <path d="M42.7832 22.3047L14.2569 49.9606L22.9375 58.9144L51.4638 31.2586L60.9336 41.0264L32.4073 68.6823C37.3113 75.3103 42.2507 75.7565 53.0717 64.4389C63.8928 53.1212 76.9146 41.3236 76.9146 41.3236L41.7975 5.10117L5.18165 40.5997" stroke="url(#paint0_linear)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="paint0_linear" x1="22.4338" y1="58.672" x2="59.1882" y2="23.0392" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8548F5"/>
          <stop offset="1" stop-color="#FA93FF"/>
        </linearGradient>
      </defs>
    </svg>
    <h1 class="anim-logotext text-4xl tracking-tighter font-bold">
      Stringy
    </h1>
  </div>
</template>

<style>
</style>

<script setup lang="ts">
import anime from 'animejs';
</script>


<script lang="ts">
export default {
  mounted(){
    const tl = anime.timeline({
      easing: 'easeOutExpo'
    })
    tl.add({
      targets: '.logo',
      duration: 1400,
      translateY: [20, 0],
      opacity: [0, 1]
    })
    tl.add({
      targets: '.anim-logotext',
      duration: 1200,
      translateX: [20, 0],
      opacity: [0, 1]
    }, "-=1000")
  }
}
</script>