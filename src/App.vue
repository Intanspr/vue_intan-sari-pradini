<template>
  <div id="app">
     <ol>
      <li v-for="todo in todos" v-bind:key="todo">
        {{ todo }}
      </li>
    </ol>
  <input type="text" v-model="item">
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
        }
      }, 

}
</script>
