let app = new Vue({
        el: '#app',
        data: {
                user_id: 'user123',
                user_grade: ["bronze" ,"silver","gold"],
                age:21
        },
        computed: {
                
                user_info: function () {
                        return this.user_id + '(' + this.user_grade + ')';
                },
                user_age() {
                        let str = '';
                        if (this.age > 20) {
                                 str='adult'
                        } else {
                                str='not adult'
                         }
                  return  str
                }
        }

})

// computed properties   , 변수처럼 사용 가능