import Vue from 'vue'
import App from './App.vue'
import {newMixin} from "../newMixin";

Vue.config.productionTip = false

new Vue({
    mixins: [newMixin], //global mixin kullanımı
    render: h => h(App),
}).$mount('#app')
