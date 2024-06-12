// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apollo';
import { FontAwesomeIcon } from '@/plugins/fontawesome';
import './assets/scss/main.scss'; // Updated import statement

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(Buefy, {});
app.use(router);

provideApolloClient(apolloClient);

app.mount('#app');
