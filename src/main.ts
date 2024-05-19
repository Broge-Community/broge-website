import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';

const app = createApp(App);

app.use(Buefy, {});

app.use(router);

app.mount('#app');
