import { 
  createRouter, 
  createWebHashHistory, 
  createWebHistory 
} from 'vue-router';
import { trackRouter } from 'vue-gtag-next';

import index from '../pages/index.vue';
import music from '../pages/music.vue';
import commissions from '../pages/commissions.vue';
import notfound from '../pages/notfound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/music',
      component: music
    },
    {
      path: '/commissions',
      component: commissions
    },
    {
      path: '/:pathMatch(.*)*',
      component: notfound
    }
  ]
})

trackRouter(router);

export default router;