import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

import Layout from '@/layout/default.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('@/components/VuePuppy.vue'),
      },
    ],
  },
  {
    path: '/components',
    component: Layout,
    children: [
      {
        path: '/document',
        name: 'document',
        component: () => import('@/pages/document/index.vue'),
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('@/pages/table/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: Layout,
    children: [
      {
        path: '',
        name: 'not-fond',
        component: () => import('@/pages/error/404.vue'),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory('/web'),
  routes,
});
