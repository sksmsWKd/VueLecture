let app = new Vue({
        el: '#app',
        data :{
                counter: 0,
                counter1: 0
},
        methods: {
                addCounter: function () {
                        this.counter +=1
                },
                 Counter: function () {
                        this.counter1 -=1
                }
        }
});