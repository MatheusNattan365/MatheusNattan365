import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/vuetify'
import './plugins/jspdf'
import './plugins/axios'

import firebase from 'firebase'
import './firebase/firebaseInit'

Vue.config.productionTip = false



let app;
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App),
      }).$mount('#app')
    
  }
});