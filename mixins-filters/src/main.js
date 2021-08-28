import Vue from 'vue'
import App from './App.vue'
import {newMixin} from "../newMixin";
import VueCurrencyFilter from "vue-currency-filter";

Vue.config.productionTip = false

Vue.filter('newCapitalize', (value) => {
    if (!value) ''
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
})

Vue.use(VueCurrencyFilter,
    {
        symbol: '€',
        thousandsSeparator: '.',
        fractionCount: 2,
        fractionSeparator: ',',
        symbolPosition: 'front',
        symbolSpacing: true,
        avoidEmptyDecimals: undefined,
    })

Vue.use(require("vue-moment"));

new Vue({
    mixins: [newMixin], //global mixin kullanımı
    render: h => h(App),
}).$mount('#app')
