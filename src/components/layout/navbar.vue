<template>
  <!-- backdrop-blur-xl -->
  <div class="p-6 backdrop-filter z-20">
    <div class="flex flex-row items-center space-x-8 w-full justify-between md:justify-start">
      <animatednameplate/>
      <div class="space-x-2 md:flex hidden">
        <button 
        id="nav_button"
        v-for="page in pages" 
        :key="page.name" 
        v-on:click="$router.push(page.route)"
        :class=" ((page.route == $router.currentRoute.value.path) ? 'bg-str-cotton text-white' : '') +
        ` rounded-lg pl-3 pr-3 pt-2 pb-2 flex space-x-1 transform transition-all duration-200 hover:bg-str-cotton hover:scale-105 hover:-translate-y-1`"
        >
          <span class="material-icons">{{ page.icon }}</span>
          <h1>{{ page.name }}</h1>
        </button>
      </div>
      <button class="md:hidden ml-auto" @click="toggle_menu">
        <span class="material-icons">menu</span>
      </button>
    </div>
  </div>
  <transition
  v-on:enter="menu_enter"
  v-on:leave="menu_exit"
  >
    <div id="mobile_navbar" class="absolute h-full w-full z-10 dark:bg-str-bleck bg-str-ice" v-if="display_menu">
      <button
      id="nav_button"
      v-for="page in pages"
      :key="page.name"
      v-on:click="$router.push(page.route)"
      :class=" ((page.route == $router.currentRoute.value.path) ? 'bg-str-cotton' : '') +
      ` w-full px-3 py-3 flex space-x-1`"
      >
        <span class="material-icons">{{ page.icon }}</span>
        <h1>{{ page.name }}</h1>
      </button>
    </div>
  </transition>
</template>

<script lang="ts">
import anime from 'animejs';
import animatednameplate from '../nameplate.vue'
export default {
  data(){
    return {
      display_menu: false,
      pages: [
        {
          name: 'Home',
          route: '/',
          icon: 'home'
        },
        {
          name: 'Music',
          route: '/music',
          icon: 'audiotrack'
        },
        {
          name: 'Commissions',
          route: '/commissions',
          icon: 'payments'
        }
      ]
    }
  },
  components: { animatednameplate },
  mounted() {
  },
  methods: {
    unfinishedWarning() {
      alert('this isnt done yet lol')
    },
    toggle_menu() {
      this.display_menu = !this.display_menu
    },

    menu_enter(el: Element, done: any) {
      anime({
        targets: el,
        duration: 600,
        easing: 'easeOutExpo',
        translateX: [-40, 0],
        opacity: [0, 1.5],
        complete: done
      })
    },
    menu_exit(el: Element, done: () => void) {
      anime({
        targets: el,
        duration: 600,
        easing: 'easeOutExpo',
        translateX: [0, -40],
        opacity: [1, -0.2],
        complete: done
      })
    }
  }

}
</script>

<style>

</style>