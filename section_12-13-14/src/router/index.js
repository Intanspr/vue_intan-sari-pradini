import VueRouter from "vue-router";
// Import Component2 Kalian

import DetailTodo from "@/views/DetailTodo.vue";
import TodoList from "@/views/TodoList.vue"
import Vue from "vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: "/",
            component: TodoList,
            },
          {
            path: "/:index",
            component: DetailTodo,
          }
        ]
});
