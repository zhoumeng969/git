var list = [{
    title : "吃饭",
    checked : true
},{
    title:"睡觉",
    checked:false
},{
    title:"上课",
    checked:false
},{
    title:"翠鸟",
    checked:false
}]

var vm = new Vue({
    el : ".main",
    data :{
        list : list,
        inputValue : "",    
    },
    methods:{
        addTodo(){
            this.list.push({
                title:this.inputValue,
                checked:false
            }),
            this.inputValue=""
        },
        deleteTodo(todo){
            var index = this.list.indexOf(todo);
            this.list.splice(index,1)
        },
      
    },
    
    // methods:{
    //     addTodo(enevt){
        
    //     this.list.push({
    //         title:this.inputValue,
    //         checked:false
    //     })
    //     ,this.inputValue=""
    //     },
    //     deleteTodo(todo){
    //         var index = this.list.indexOf(todo);
    //         this.list.splice(index,1)
    //     },
    //     editTodo(todo){
    //         console.log(todo);
    //     }
    // }
})