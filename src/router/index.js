import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import commentYourJavascriptCode from "../views/basic-js/1-comment-your-javascript-code.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/comment-your-javascript-code",
    name: commentYourJavascriptCode,
    component: commentYourJavascriptCode,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //     import ( /* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
