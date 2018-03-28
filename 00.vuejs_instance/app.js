var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

setTimeout(function(){
  vm1.title = 'Chnaged by Timer!';
  vm1.show();
},3000);

Vue.component('hello',{
  template: '<h1>hello</h1>'
})
var vm2 = new Vue({
  el: '#app2',
  data:{
    title: 'The Second Instance'
  },
  methods:{
    onChange:function(){
      vm1.title = 'Change!';
    }
  }
})
