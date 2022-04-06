import Vue from "vue";
import VueRouter from "vue-router";
import FirstNews from "@/views/FirstNews.vue";
import SecondNews from "@/views/SecondNews.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "FirstNews",
    component: FirstNews,
  },
  {
    path: "/SecondNews",
    name: "SecondNews",
    component: SecondNews,
  }
];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});
export default router;