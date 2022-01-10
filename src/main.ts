import { createApp } from 'vue';

// Plugins
import router from './plugins/router';
import twemoji from './plugins/twemoji';

// Main component + CSS
import App from './App.vue';
import './styles/index.css';
import 'boxicons/css/boxicons.min.css';

const app = createApp(App);
app.use(router);
app.use(twemoji);
app.mount('#app');

