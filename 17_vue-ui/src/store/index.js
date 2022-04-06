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
            axios.get ('https://newsapi.org/v2/everything?q=apple&from=2022-03-29&to=2022-03-29&sortBy=popularity&apiKey=76498005a5094c01b700cfc68f469fbb').
            then((response => {
                console.log("response", response);
                store.commit("setlistItem", response.data.articles)
            }));
        },
     },
    modules: {},
     
})