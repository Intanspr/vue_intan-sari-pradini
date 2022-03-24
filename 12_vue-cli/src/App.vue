<template>
  <div id="app">
    <h1>Todo List</h1>
     <ol>
      <li v-for="(todo, index) in todos" v-bind:key="todo">
        {{ todo }}

      <button @click="editTodo(index)">Edit</button>  
      <button @click="deleteTodo(index, todo)">Hapus</button>
      </li>
    </ol>
      <input type="text" class="itodo" v-model="item">
      <button @click="Tambahkan">Tambahkan</button>
  <div v-if="todos.length >=4">Hebat</div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
        return {
          
          item: '',
          todos: []
        }
      },

      methods: {
        Tambahkan() {
          if(this.item !=''){this.todos.push( this.item )}
          this.item='';
        },
        editTodo(index) {
          this.todo = this.todo[index].name;
          this.editTodo = index;
        },

        deleteTodo(index) {
          this.todos.splice(index, 1)
        }
      }, 

}
</script>

<style>
.h1 {
  color: #2c3e50;
  font-family: serif;
}
.itodo {
  width: 80%;
  margin-right: 20px;
}
</style>