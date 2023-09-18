import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import 'flowbite'
createApp(App).use(store).use(router).use(VCalendar, {}).mount('#app')
