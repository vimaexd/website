<template>
    <div class="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-4">

      <div class="flex flex-col w-11/12 md:w-96 md:mb-0 mb-4">
        <div class="flex text-4xl space-x-2">
          <span class="material-icons text-4xl">music_note</span>
          <h1 class="font-bold">Music</h1>
        </div>
        <p class="text-sm">Download all my music for free! (320kbps MP3 files)</p>

        <div class="flex items-center space-x-2 mt-6">
          <span class="material-icons">search</span>
          <h1 class="font-normal">Search</h1>
        </div>
        <input
        class="bg-str-bleck-200 py-2 px-1 rounded-lg my-1"
        v-model="search_query"
        />

        <div class="flex items-center space-x-2 mt-6">
          <span class="material-icons">filter_list</span>
          <h1 class="font-normal">Filter</h1>
        </div>
        <div class="flex flex-wrap" id="filter_buttons">
          <filterbutton 
          v-for="filter in filter_types"
          :key="filter"
          :filter_name="filter" 
          :button_color="(filter_type === filter) ? 'bg-str-cotton' : 'bg-str-bleck-200'"
          @click="filter_type = filter"
          />
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <trackinfo
        v-for="release in releases"
        :key="release.name"
        :release="release"
        />
        <div v-if="releases.length === 0" class="w-96 h-40 rounded-md m-2">
          <div class="flex justify-center items-center bg-str-bleck-100 rounded-lg h-full">
            <h1 class="text-2xl font-bold">😔 No results</h1>
          </div>
        </div>
      </div>
    </div>
</template>

<style>
</style>

<script setup lang="ts">
import anime from 'animejs';
import releases_raw from '../assets/data/tracks.json';
import filterbutton from '../components/music/filterbutton.vue';
import trackinfo from '../components/music/track.vue';
</script>


<script lang="ts">

export default {
  components: { 
    filterbutton,
    trackinfo
  },
  data() {
    return {
      releases: releases_raw,
      search_query: '',
      filter_types: [
        "All",
        "Single", 
        "EP",
        "Remix"
      ],
      filter_type: 'All' // all, single, ep, remix_ep
    }
  },
  methods: {
    update_list() {
      let new_releases = releases_raw

      if(this.filter_type != 'All') {
        new_releases = new_releases.filter((r) => (
          r.type == this.filter_type
        ));
      }

      // Search
      new_releases = new_releases.filter((r) => (
        r.name.toLowerCase().includes(this.search_query.toLowerCase())
      ));

      this.releases = new_releases
    }
  },
  watch: {
    search_query() {
      this.update_list();
    },
    filter_type() {
      this.update_list();
    }
  },
  mounted() {
    const buttonAnimation = anime({
      targets: ["#filter_buttons"],
      easing: 'easeOutExpo',
      duration: 800,
      translateY: [20, 0],
      opacity: [0, 1],
    })

    const trackAnimation = anime({
      targets: "#track_info",
      easing: 'easeOutExpo',
      translateX: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100)
    })

    buttonAnimation.play();
    trackAnimation.play();
  }
}
</script>