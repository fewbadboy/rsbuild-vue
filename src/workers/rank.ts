import type { RankItem } from '.';

self.onmessage = (event: MessageEvent<number>) => {
  console.log('Received From index', event.data);
  const rank: RankItem[] = [{ label: 'vue', rank: 100 }];
  // todo
  self.postMessage(rank);
};
