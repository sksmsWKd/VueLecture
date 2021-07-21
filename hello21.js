Vue.component('hello', {
        props: ['name','age'],
        template: '<p>{{message}} 이네요</p>',
        data: function () {
                return { message: 'hello!,' + this.name+this.age }
        }
});

let app = new Vue({
        el: '#app',
     
})

//전역component