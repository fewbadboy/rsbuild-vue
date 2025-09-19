import { createApp } from 'vue';
import App from './App.vue';
import '@/css/index.css';

createApp(App).mount('#root');

const worker = new Worker(new URL('@/workers/rank.ts', import.meta.url))

worker.onmessage = (event) => {
  console.log('The results from rank Workers:', event.data);
};

worker.postMessage(10)