import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import axios from 'axios'

Vue.use(Vuex);


const GlobalPermanent = createPersistedState({
    paths: ["list", "title"],
});
 export default new Vuex.Store({
     plugins: [GlobalPermanent],
     state: {
        list: [],
        title: "",
        listItem: [],
        
     },
     mutations: {
        setlistItem(state, payload){
            state.listItem = payload;
        },
     },
     actions: {
        fetchItem(store){
            axios.get ('https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=2ddeba2597c24a05b0c461d469517349').
            then((response => {
                console.log("response", response);
                store.commit("setlistItem", response.data.articles)
            }));
        },
     },
    modules: {},
     
})