<template>
  <div class="h-full flex justify-center">
    <div class="w-1/3 pt-4 space-y-2 flex flex-col">
      <h1 class="text-4xl font-semibold tracking-tight">
        Looking for something 
        <span class="text-transparent bg-gradient-to-r from-str-cotton to-str-yarn bg-clip-text">customized</span>?
      </h1>
      <p>
        I offer commissions for certain services. 
        Please note there is no set price list, as most services' price differ depending on the complexity of the request.
        Please contact me to get a price estimation! 💜
      </p>

      <comm-type title="🤖 Discord Bots">
        I have experience in TypeScript, the discord.js library and the Discord API
        and can make a customized Discord bot for you and your server.<br/><br/>
        <b>Please note</b>
        <ul class="list-disc list-inside">
          <li>I cannot provide hosting services or API keys</li>
        </ul>
        <br/>
        <b>You will receive</b>
        <ul class="list-inside">
          <li>TypeScript source code</li>
          <li>Setup instructions</li>
        </ul>
      </comm-type>
      <comm-type title="🌍 Websites">
        I have experience in HTML/CSS/JS as well as the ReactJS and VueJS frameworks
        and can make a customized website for you.<br/><br/>
        <b>Please note</b>
        <ul class="list-disc list-inside">
          <li>If you require a certain framework or editable HTML files please specify so</li>
          <li>You will need to provide a website design plan</li>
          <li>I cannot provide hosting services or API keys</li>
        </ul>
        <br/>
        <b>You will receive</b>
        <ul class="list-inside">
          <li>TypeScript source code</li>
          <li>Built website</li>
          <li>Setup instructions (if required)</li>
        </ul>
      </comm-type>
      <comm-type title="📺 Livestream Overlays">
        I have experience with creating active livestream overlays. 
        These are mini websites which are usually added using the Browser Source feature of the OBS project.<br/>
        <br/>
        <b>You will receive</b>
        <ul class="list-inside">
          <li>TypeScript source code</li>
          <li>Executable file for running the overlay</li>
          <li>Setup instructions</li>
        </ul>
      </comm-type>
      <comm-type title="🎵 Music">
        I have experience in making mostly electronic music and can make a customized beat or music track for you.<br/>
        <br/>
        <b>You will receive</b>
        <ul class="list-inside">
          <li>Lossless WAV file</li>
        </ul>
      </comm-type>
    </div>
    
  </div>
</template>

<script lang="ts">
import commtype from '../components/commissions/comm-type.vue'
export default {
  components: {
    "comm-type": commtype
  }
}
</script>