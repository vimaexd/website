<template>
  <div class="h-full">
    <div class="flex flex-col items-center tracking-tighter mt-20">
      <h1 class="text-9xl font-bold">Hi, I'm Stringy</h1>
      <h2 class="text-2xl font-light">You know the rules and so do I.</h2>
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2 -bottom-40">
    </div>
    <!-- <div class="nav flex flex-col items-center justify-center space-y-6">
    </div> -->
    <!-- <vue-writer
    :array="typed_strings"
    :typeSpeed="150"
    class="font-code text-2xl"/> -->
  </div>
</template>

<style>
</style>

<script setup lang="ts">
// @ts-ignore
import VueWriter from 'vue-writer';
import anime from 'animejs';

const typed_strings = [
  "Programmer",
  "Music maker",
  "Web developer",
  "Internet user",
  "PHP Hater",
  "Cookie enjoyer",
  ""
]
</script>


<script lang="ts">

export default {
  mounted() {

  }
}
</script>