import Vue, {createApp} from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

createApp(App).mount('#app')
