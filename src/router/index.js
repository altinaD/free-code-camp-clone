import { createRouter, createWebHistory } from "vue-router";
import comment from "../views/commentYourJavaScriptCode.vue";

const routes = [
  {
    path: "/commentYourJavaScriptCode",
    name: "comment",
    component: comment,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
