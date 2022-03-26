import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos:'',
        
    },
    mutations: {
        setBio(state, payload) {
            state.bio = payload;
        },
    },
    actions: {
        changeBio(store, payload) {
            store.commit("setBio"), payload;
        }
    },
    modules: {},
})