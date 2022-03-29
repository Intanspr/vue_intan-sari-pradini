import VueRouter from "vue-router";
// Import Component2 Kalian

import DetailTodo from "@/views/DetailTodo.vue";
import TodoList from "@/views/TodoList.vue";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
          path: "/",
          name: "TodoList",
          component: TodoList,
  },
  {
          path: "/DetailTodo",
          name: "DetailTodo",
          component: DetailTodo,
  },
];
const router = new VueRouter({
            mode: "history",
            base: "/",
            routes,
});
export default router;