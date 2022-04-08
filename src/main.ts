import { createApp } from 'vue';

// Plugins
import router from './plugins/router';
import twemoji from './plugins/twemoji';
import VueGtag from "vue-gtag-next";

// Main component + CSS
import App from './App.vue';
import './styles/index.css';
import 'boxicons/css/boxicons.min.css';

const isProduction = window.location.hostname != 'localhost';

const app = createApp(App);
app.use(router);
app.use(twemoji);

if(isProduction){
  app.use(VueGtag, { property: { id: "UA-148249653-1" } });
}

app.mount('#app');

