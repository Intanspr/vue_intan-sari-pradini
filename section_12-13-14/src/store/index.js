import Vue from 'vue'
import Vuex from 'vuex'
import CreatePersistedState from 'vuex-persistedstate'
import TodoList from "@/views/TodoList.vue"


Vue.use(Vuex);
const PersistedDataState = CreatePersistedState ({
    paths: ["/"],
});


export default new Vuex.Store ({
    plugins: [PersistedDataState],
    modules: {
    TodoList: {
            namespaced: true,
            ...TodoList,
        },
    },
    state: {
        todos:[],
        
    },
    mutations: {
        Tambahkan(state, params) {
            state.todos.push({
                todo: params.todo
            })
        },
        deleteTodo(state, index) {
            state.todos.splice(index, 1)
        },
        editTodo(state, params) {
            state.todos[params.index].todo = params.todo
        },
        changeBio(state, params) {
            state.todos[params.index].item = params.item
        },
    },
    actions: {
        changeBio(store, payload) {
            store.commit("setBio"), payload;
        }
    },
})