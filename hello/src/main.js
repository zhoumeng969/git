import Vue from 'vue'
import App from './App'
import { Tab, Tabs } from 'vant';
import { Stepper } from 'vant';
import { Field } from 'vant';
import { SubmitBar } from 'vant';
import './assets/css/modo1.css'
import './assets/css/modo2.css'
import './assets/css/modo3.css'
import './assets/css/modo4.css'
import './assets/css/modo5.css'
import './assets/css/modo6.css'
import './assets/css/modo7.css'



Vue.use(Tab).use(Tabs);
Vue.use(Stepper);
Vue.use(Field);
Vue.use(SubmitBar);

new Vue({
  el: '#app',
  components: { App,
  },
  template: '<App/>'
})
