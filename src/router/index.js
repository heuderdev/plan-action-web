import { createRouter, createWebHistory } from 'vue-router';
import PublicationView from '../view/PublicationView.vue';
import Login from '../view/LoginView.vue';

const routes = [
  { path: '/', component: PublicationView },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;