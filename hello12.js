let app = new Vue({
        el: '#app',
        data: {
                message: 'Select a user',
                users: [{ name: 'user' }, { name: 'admin' }]
        },
        methods: {
                sayHi(name) {
                        this.message = 'Hi , ' + name
                        //this 없는건?
                }
        }
});