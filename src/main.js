import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Marco',
    weather: 'Shit',
  },
});

export default app;
