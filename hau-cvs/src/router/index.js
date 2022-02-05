import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "resume" */ "../views/Resume.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
