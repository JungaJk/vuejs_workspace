import Vue from 'vue'
import App from './App.vue'

// export const eventBus = new Vue();

export const eventBus = new Vue({
   methods:{
            changeAge(age){
                this.userAge = 30;
                //this.$emit('ageWasEdited',this.userAge);
                eventBus.$emit('ageWasEdited',this.userAge);
            }
        }
});
new Vue({
  el: '#app',
  render: h => h(App)
});