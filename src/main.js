import { createApp } from 'vue'
import App from './App.vue'
import Example from './Example.vue'

window.vm = createApp(Example).mount('#app')
