Vue.component('add', {


   template: `
   <div>   
                <p>작성자</p>
                <input type="text" v-model="writter">
                <p>글내용</p>
                <input type="text" v-model="comment">
                <button @click="save">저장하기</button><br>
                <ul>
                        <li v-for="it in messages">
                                <p>{{ it.writter }} {{ it.comment }}</p>
                        </li>
                </ul>
                   </ div > `,
   data() {
      return {
         writter: null,
         comment: null,
         messages: []
      }
   },
   methods: {
      save() {
         const message = {
            writter: this.writter,
            comment: this.comment
         };

         this.messages.unshift(message);
         this.writter = null;
         this.comment = null;
      }
   }

});

let app = new Vue({
   el: '#app'

});