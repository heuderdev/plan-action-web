import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import routes from './router';

const pinia = createPinia()

const app = createApp(App);

app.use(pinia)

app.use(routes);

app.mount('#app')
