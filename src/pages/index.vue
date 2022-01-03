<template>
  <div class="h-full">
    <div class="mt-20 flex flex-row justify-center items-center space-x-24">
      <div class="flex flex-col tracking-tighter space-y-2 px-4 sm:px-0">
        <div>
          <h1 class="text-8xl sm:text-8xl font-bold break-words overflow-hidden" id="anim_name">
            hi! i'm
            <span class="bg-gradient-to-r from-str-cotton to-str-yarn bg-clip-text text-transparent tracking-tighter">mae</span>
          </h1>
          <h2 class="text-xl font-light flex flex-row items-center space-x-1">
            👩‍💻
            <p>code typer</p>
          </h2>
          <h2 class="text-xl font-light flex flex-row items-center space-x-1">
            🎛️
            <p>music maker</p>
          </h2>
          <h2 class="text-xl font-light flex flex-row items-center space-x-1">
            🇬🇧
            <p>uk born, uk based</p>
          </h2>
          <h2 class="text-xl font-light flex flex-row items-center space-x-1">
            🍃
            <p>videogame player</p>
          </h2>
          <h2 class="text-xl font-light flex flex-row items-center space-x-1">
            🏳️‍⚧️
            <p>
              <a href="https://lgbta.fandom.com/wiki/Transgender" target="_blank">transgirl</a>
              and
              <a href="https://lgbta.fandom.com/wiki/Bisexual" target="_blank">bisexual</a>
              (she/they)
            </p>
          </h2>
        </div>
        <icon-row :links="social_links"/>
      </div>
      <div class="hidden md:block">
        <img src="../assets/stringychan_wave.png" class="w-72 drop-shadow-lg"/>
        <!-- <blob class="w-96 text-str-cotton"/> -->
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script lang="ts">
import twemoji from 'twemoji';
import anime from 'animejs';
import iconrow from '../components/icon-row.vue';
import blob from '../components/svg/blob.vue'
// import stringychan_wave from '../assets/stringychan_wave.png';

export default {
  data(){
    return {
      social_links: [
        {
          "name": "YouTube",
          "url": "https://youtube.com/Stringy",
          "icon": "bxl-youtube"
        },
        {
          "name": "Twitter",
          "url": "https://twitter.com/etstringy",
          "icon": "bxl-twitter"
        },
        {
          "name": "Discord",
          "url": "https://discord.gg/A8A52G2",
          "icon": "bxl-discord-alt"
        },
        {
          "name": "GitHub",
          "url": "https://github.com/etstringy",
          "icon": "bxl-github"
        },
        {
          "name": "Reddit",
          "url": "https://reddit.com/u/etstringy",
          "icon": "bxl-reddit"
        },
        {
          "name": "Twitch",
          "url": "https://twitch.tv/etstringy",
          "icon": "bxl-twitch"
        },
        {
          "name": "TikTok",
          "url": "https://tiktok.com/@etstringy",
          "icon": "bxl-tiktok"
        },
        {
          "name": "Mastodon",
          "url": "https://wetdry.world/@mae",
          "icon": "bxl-mastodon"
        },
        {
          "name": "Figma",
          "url": "https://figma.com/@yarn",
          "icon": "bxl-figma"
        },
      ]
    }
  },
  components: {
    "icon-row": iconrow,
    blob
  },
  mounted() {
    this.parseTwemoji();
    const tl = anime.timeline();
    tl.add({
      targets: "#anim_name",
      translateX: [-50, 0],
      scaleX: ["90%", "100%"],
      // easing: 'easeOutExpo',
      opacity: [0, 1],
      duration: 800,
      delay: 200
    })
    tl.add({
      targets: ".anim_social_icon",
      translateY: [10, 0],
      opacity: [0, 1],
      delay: anime.stagger(100)
    }, "-=900")
  },
  updated() {
    this.parseTwemoji();
  },
  methods: {
    parseTwemoji(){
      console.log("twemoji parsed")
      twemoji.parse(document.body, {
        folder: "svg",
        ext: ".svg"
      });
    }
  }
}
</script>