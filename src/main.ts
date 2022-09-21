import { createApp } from 'vue';

// Plugins
import VueRouter from './plugins/router';
import VueTwemoji from './plugins/twemoji';
// import VueLanyard from "@eggsydev/vue-lanyard";
import VueGtag from "vue-gtag-next";

// Main component + CSS
import App from './App.vue';
import './styles/index.css';
import 'boxicons/css/boxicons.min.css';

const isProduction = window.location.hostname != 'localhost';

const app = createApp(App);
app.use(VueRouter);
app.use(VueTwemoji);
// app.use(VueLanyard);

if(isProduction){
  app.use(VueGtag, { property: { id: "UA-148249653-1" } });
}

app.mount('#app');

