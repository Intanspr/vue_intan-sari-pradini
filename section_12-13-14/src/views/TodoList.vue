<template>
  <div id="app">
    <h1>Todo List</h1>
      
     
      
     <ol>
      <li v-for="(todo, index) in todos" v-bind:key="index">
      <span  @click="() => redirect(todo)" > {{ todo }} </span>

      <button @click="editTodo(index)">Edit</button>  
      <button @click="deleteTodo(index)">Hapus</button>
      </li>
    </ol>
      <input type="text" class="itodo" v-model="item" placeholder="Tambahkan pesan">
      <button v-if="isEditing" @click="saveEdit">Simpan</button>
      <button v-else @click="Tambahkan">Tambahkan</button>
  <div v-if="todos.length >=4">Hebat</div>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
        return {
          isEditing: false,
          item: '',
          todos: [],
          currentIndex: 0,
        }
      },

      methods: {   
        redirect(item, index) {
        return this.$router.push({
          name: "DetailTodo",
          params: { currentBio: item, index: index },
          });
        },
        Tambahkan() {
          if(this.item !=''){this.todos.push( this.item )}
          this.item='';
        },

        editTodo(index) {
          const currentValue = this.todos[index];

          this.item = currentValue;
          this.isEditing = true;
          this.currentIndex = index;
        },

        deleteTodo(index) {
          this.todos.splice(index, 1)
        },
        saveEdit() {
        this.todos.splice(this.currentIndex, 1, this.item);
        this.item = "";
        this.isEditing = false;
        this.currentIndex = 0;
        }
      }, 
      
      
        
}
</script>

<style>
.h1 {
  font-family: Arial, Helvetica, sans-serif;
  color: #2c3e50;
}
.itodo {
  width: 80%;
  margin-right: 20px;
}
</style>