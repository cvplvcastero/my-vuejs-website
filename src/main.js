import { createApp } from 'vue'
import VueFeather from 'vue-feather';
import App from './App.vue'
import './assets/main.css'

createApp(App)
    .component(VueFeather.name, VueFeather)
    .mount('#app');
    