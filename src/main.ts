import { createApp } from 'vue';

// Plugins
import router from './plugins/router'

// Main component + CSS
import App from './App.vue';
import './styles/index.css';

const app = createApp(App)
app.use(router)
app.mount('#app')

