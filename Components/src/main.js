import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  data: {
    status: 'Critical'
  },
  template: '<p>Server Status: {{ status }}</p>'
})
