<template>
  <div
  id="track_info"
  class="flex flex-col w-80 md:w-96 rounded-md m-2"
  >
    <div
    class="bg-center bg-cover dark:bg-str-bleck-100 bg-str-ice-100 rounded-lg h-full"
    >
      <div class="h-full w-full p-4">
        <div class="flex flex-row justify-between">
          <div class="flex flex-row">
            <img :src="`./assets/albumart/${release.assets.artwork}`" class="w-14 h-14 rounded-md"/>
            <div class="text-xl ml-4 leading-6 self-center">
              <h3 class="font-semibold">{{ release.name }}</h3>
              <h4 class="text-base font-normal dark:text-gray-200 text-gray-700">{{ release.artists.join(", ")}}</h4>
            </div>
          </div>
          <a :href="'/audio/' + release.assets.audio" download>
            <button class="bg-str-cotton w-10 h-10 rounded-full transition-all transform-gpu hover:scale-110 self-center">
                <span class="material-icons text-2xl text-str-ice">download</span>
            </button>
          </a>
        </div>
        <div class="my-2 flex flex-row justify-between">
            <div class="flex flex-row w-10">
              <span class="material-icons">album</span>
              <p class="ml-1">{{ release.type }}</p>
            </div>
            <div class="flex flex-row">
              <span class="material-icons">event</span>
              <p class="ml-1">{{ dayjs.unix(release.timestamp).format("DD/MM/YYYY")}}</p>
            </div>
            <div class="space-x-1">
              <a :href="release.yt">
                <button class="transition-all transform-gpu hover:scale-110" v-if="release.yt">
                  <span class="bx bxl-youtube bx-sm"></span>
                </button>
              </a>
            </div>
        </div>
        <div
        class="w-full dark:bg-str-bleck-200 bg-str-ice-200 flex py-1 px-2 my-1 rounded-md"
        v-for="(track, trackindex) in release.tracks"
        :key="track"
        >
          <p>{{ trackindex + 1 }} - {{ track }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

defineProps<{
  release: {
    name: string;
    description: string;
    assets: {
      artwork: string;
      audio: string;
    }
    timestamp: number;
    type: string;
    tracks: string[];
    yt: string;
    artists: string[];
  };
}>();
</script>

<script lang="ts">
export default {
}
</script>