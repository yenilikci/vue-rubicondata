import Vue from 'vue'
import App from './App.vue'
import {newMixin} from "../newMixin";

Vue.config.productionTip = false

Vue.filter('newCapitalize', (value) => {
    if (!value) ''
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
})

new Vue({
    mixins: [newMixin], //global mixin kullanımı
    render: h => h(App),
}).$mount('#app')
