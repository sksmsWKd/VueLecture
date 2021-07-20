let app = new Vue({
        el: '#app',
        data: {
                user_id: 'user123',
                user_grade:'Silver'
        },
        computed: {
                
                user_info: function () {
                        return this.user_id + '(' + this.user_grade + ')';
                }
        }

})

// computed properties   , 변수처럼 사용 가능