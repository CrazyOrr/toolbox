import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import UUID from 'vue-uuid'
import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(UUID)
Vue.use(VueGtag, {
    config: {
        id: 'G-RJWVNCVQTB',
    },
})

new Vue({
    render: h => h(App),
}).$mount('#app')
