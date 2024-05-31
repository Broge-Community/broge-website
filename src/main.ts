// @src/main.ts
import { createApp, provide } from 'vue';
import App from './App.vue';
import router from './router';
import Buefy from 'buefy';
import { provideApolloClient } from '@vue/apollo-composable';
import apolloClient from './apollo';

const app = createApp(App);

app.use(Buefy, {});
app.use(router);

provideApolloClient(apolloClient);

app.mount('#app');
