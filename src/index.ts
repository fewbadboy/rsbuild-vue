import '@/css/index.css';

import { createApp } from 'vue';
import { router } from '@/router';
import App from './App.vue';

createApp(App).use(router).mount('#root');

const worker = new Worker(new URL('@/workers/rank.ts', import.meta.url));

worker.onmessage = (event) => {
  console.log('The results from rank Workers:', event.data);
};

worker.postMessage(10);
