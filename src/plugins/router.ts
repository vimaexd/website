import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import index from '../pages/index.vue';
import music from '../pages/music.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/music',
      component: music
    }
  ]
})