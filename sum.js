Vue.component('add', {
  template: `<div>
            <input type="number" v-model.lazy="num">
            <button @click="addadd">+</button>
            <p>{{ num }} </p>
            </div>`,
  data() {
    return {
      num: 0
    }
  },
  methods: {
    addadd() {
      this.num = num;
      this.$emit('customevent', num);
    }
  }
});


let app = new Vue({
  el: "#app",
  data: {
    totalsum: 0
  },
  methods: {
    total(num) {
      this.totalsum += num
    }
  }
});