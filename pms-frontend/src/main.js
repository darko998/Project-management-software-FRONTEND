import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Multiselect from 'vue-multiselect'

Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});


new Vue({
  render: h => h(App),
  components: { Multiselect },
  router: router
}).$mount('#app')
