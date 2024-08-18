import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';

import './style.css';

import App from './App.vue';
import PrimeVue from 'primevue/config';
import Quiz from './components/Quiz.vue';
import Results from './components/Results.vue';

const routes = [
    { path: '/', component: Quiz },
    { path: '/result', component: Results }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(PrimeVue, {
        ripple: true, 
        unstyled: true, 
    })
    .use(router)
    .mount('#app')
