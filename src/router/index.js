import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import addTwoNums from "../views/basic-js/add-two-numbers-with-javascript.vue";
import assignVal from "../views/basic-js/assigning-the-value-of-one-variable-to-another.vue";
import comment from "../views/basic-js/comment-your-javascript-code.vue";
import declareConst from "../views/basic-js/declare-a-read-only-variable-with-the-const-keyword.vue";
import declare from "../views/basic-js/declare-javascript-variables.vue";
import division from "../views/basic-js/divide-one-number-by-another-with-javascript.vue";
import declareStr from "../views/basic-js/declare-string-variables.vue";
import differencesVarLet from "../views/basic-js/explore-differences-between-the-var-and-let-keywords.vue";
import initVarsAssign from "../views/basic-js/initializing-variables-with-the-assignment-operator.vue";
import multiply from "../views/basic-js/multiply-two-numbers-with-javascript.vue";
import storingVals from "../views/basic-js/storing-values-with-the-assignment-operator.vue";
import substract from "../views/basic-js/subtract-one-number-from-another-with-javascript.vue";
import caseSens from "../views/basic-js/understanding-case-sensitivity-in-variables.vue";
import uninitVars from "../views/basic-js/understanding-uninitialized-variables.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/add-two-numbers-with-javascript",
    name: "addTwoNums",
    component: addTwoNums,
  },
  {
    path: "/assigning-the-value-of-one-variable-to-another",
    name: "assignVal",
    component: assignVal,
  },
  {
    path: "/comment-your-javascript-code",
    name: "comment",
    component: comment,
  },
  {
    path: "/declare-a-read-only-variable-with-the-const-keyword",
    name: "declareConst",
    component: declareConst,
  },
  {
    path: "/divide-one-number-by-another-with-javascript",
    name: "division",
    component: division,
  },
  {
    path: "/declare-javascript-variables",
    name: "declare",
    component: declare,
  },
  {
    path: "/declare-string-variables",
    name: "declareStr",
    component: declareStr,
  },
  {
    path: "/explore-differences-between-the-var-and-let-keywords",
    name: "differencesVarLet",
    component: differencesVarLet,
  },
  {
    path: "/initializing-variables-with-the-assignment-operator",
    name: "initVarsAssign",
    component: initVarsAssign,
  },
  {
    path: "/multiply-two-numbers-with-javascript",
    name: "multiply",
    component: multiply,
  },
  {
    path: "/storing-values-with-the-assignment-operator",
    name: "storingVals",
    component: storingVals,
  },
  {
    path: "/subtract-one-number-from-another-with-javascript",
    name: "substract",
    component: substract,
  },
  {
    path: "/understanding-case-sensitivity-in-variables",
    name: "caseSens",
    component: caseSens,
  },
  {
    path: "/understanding-uninitialized-variables",
    name: "uninitVars",
    component: uninitVars,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
