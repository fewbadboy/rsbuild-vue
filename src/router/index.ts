import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import Layout from '@/layout/default.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      { path: 'dashboard', name: 'home', component: () => import('@/components/VuePuppy.vue') }
    ]
  },
];

export const router = createRouter({
  history: createWebHistory('/web'),
  routes,
});
