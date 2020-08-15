var app = new Vue({
    el: '#app',
    data(){
        return{
            todos:[],
            newTodo:'',
            baseId: 1,
        }
    },
    methods:{
        add(){
            const t = this;
            let todo = {
                id: t.baseId,
                text:t.newTodo,
                finished: false,
            }
            t.todos.unshift(todo);
            t.newTodo = '';
            t.baseId++;
        },
        updateStatus(todo){
            todo.finished = !todo.finished;
        },
        remove(index){
            const t = this;
            t.todos.splice(index, 1);
        }
    }
  })