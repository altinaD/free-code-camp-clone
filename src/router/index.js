import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// basic-js
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

// es6 compareScopes from "
import compareScopes from "@/views/es6/compare-scopes-of-the-var-and-let-keywords.vue";
import completeAPromiseResolveReject from "@/views/es6/complete-a-promise-with-resolve-and-reject.vue";
import createPromise from "@/views/es6/create-a-javascript-promise.vue";
import createModuleScript from "@/views/es6/create-a-module-script.vue";
import createExportFallback from "@/views/es6/create-an-export-fallback-with-export-default.vue";
import createStringUsingLiterals from "@/views/es6/create-strings-using-template-literals.vue";
import destructingRestEl from "@/views/es6/destructuring-via-rest-elements.vue";
import handlePromiseWithThen from "@/views/es6/handle-a-fulfilled-promise-with-then.vue";
import handleRejectedPromiseWithCatch from "@/views/es6/handle-a-rejected-promise-with-catch.vue";
import importDefExport from "@/views/es6/import-a-default-export.vue";
import mutateArrConst from "@/views/es6/mutate-an-array-declared-with-const.vue";
import preventObjMutation from "@/views/es6/prevent-object-mutation.vue";

import reuseJsCodeImport from "@/views/es6/reuse-javascript-code-using-import.vue";
import setDefParamsForFunc from "@/views/es6/set-default-parameters-for-your-functions.vue";
import useArrowFuncForAnonFunc from "@/views/es6/use-arrow-functions-to-write-concise-anonymous-functions.vue";
import useClassSyntaxConstrFunc from "@/views/es6/use-class-syntax-to-define-a-constructor-function.vue";
import useDestrAssignfromArr from "@/views/es6/use-destructuring-assignment-to-assign-variables-from-arrays.vue";
import useDestrAssignToPassObj from "@/views/es6/use-destructuring-assignment-to-pass-an-object-as-a-function's-parameters.vue";
import useDestrAssignfromNestedObj from "@/views/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects.vue";
import useDestrAssignExtrVals from "@/views/es6/use-destructuring-assignment-to-extract-values-from-objects.vue";
import useExportToShare from "@/views/es6/use-export-to-share-a-code-block.vue";
import useGettersAndSetterToContrAccess from "@/views/es6/use-getters-and-setters-to-control-access-to-an-object.vue";
import useTheRestParamWithFuncParams from "@/views/es6/use-the-rest-parameter-with-function-parameters.vue";
import useSpreadOperToEvalArrInPlace from "@/views/es6/use-the-spread-operator-to-evaluate-arrays-in-place.vue";
import toImportEverything from "@/views/es6/use-to-import-everything-from-a-file.vue";
import writeArrowFunParams from "@/views/es6/write-arrow-functions-with-parameters.vue";
import writeConciseDecFunc from "@/views/es6/write-concise-declarative-functions-with-es6.vue";
import writeConciseObjLiteral from "@/views/es6/write-concise-object-literal-declarations-using-object-property-shorthand.vue";

const routes = [
  {
    path: "",
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

  // es6
  {
    path: "/compare-scopes-of-the-var-and-let-keywords",
    name: "compareScopes",
    component: compareScopes,
  },
  {
    path: "/complete-a-promise-with-resolve-and-reject",
    name: "completeAPromiseResolveReject",
    component: completeAPromiseResolveReject,
  },
  {
    path: "/create-a-javascript-promise",
    name: "createPromise",
    component: createPromise,
  },
  {
    path: "/create-a-module-script",
    name: "createModuleScript",
    component: createModuleScript,
  },
  {
    path: "/create-an-export-fallback-with-export-default",
    name: createExportFallback,
    component: "createExportFallback",
  },
  {
    path: "/create-strings-using-template-literals",
    name: "createStringUsingLiterals",
    component: createStringUsingLiterals,
  },
  {
    path: "/destructuring-via-rest-elements",
    name: "destructingRestEl",
    component: destructingRestEl,
  },
  {
    path: "/handle-a-fulfilled-promise-with-then",
    name: "handlePromiseWithThen",
    component: handlePromiseWithThen,
  },
  {
    path: "/handle-a-rejected-promise-with-catch",
    name: "handleRejectedPromiseWithCatch",
    component: handleRejectedPromiseWithCatch,
  },
  {
    path: "/import-a-default-export",
    name: "importDefExport",
    component: importDefExport,
  },
  {
    path: "/mutate-an-array-declared-with-const",
    name: "mutateArrConst",
    component: mutateArrConst,
  },
  {
    path: "/prevent-object-mutation",
    name: "preventObjMutation",
    component: preventObjMutation,
  },
  {
    path: "/reuse-javascript-code-using-import",
    name: "reuseJsCodeImport",
    component: reuseJsCodeImport,
  },
  {
    path: "/set-default-parameters-for-your-functions",
    name: "setDefParamsForFunc",
    component: setDefParamsForFunc,
  },
  {
    path: "/use-arrow-functions-to-write-concise-anonymous-functions",
    name: "useArrowFuncForAnonFunc",
    component: useArrowFuncForAnonFunc,
  },
  {
    path: "/use-class-syntax-to-define-a-constructor-function",
    name: "useClassSyntaxConstrFunc",
    component: useClassSyntaxConstrFunc,
  },
  {
    path: "/use-destructuring-assignment-to-assign-variables-from-arrays",
    name: "useDestrAssignfromArr",
    component: useDestrAssignfromArr,
  },
  {
    path: `/use-destructuring-assignment-to-pass-an-object-as-a-function's-parameters`,
    name: "useDestrAssignToPassObj",
    component: useDestrAssignToPassObj,
  },
  {
    path: "/use-destructuring-assignment-to-assign-variables-from-nested-objects",
    name: "useDestrAssignfromNestedObj",
    component: useDestrAssignfromNestedObj,
  },
  {
    path: "/use-destructuring-assignment-to-extract-values-from-objects",
    name: "useDestrAssignExtrVals",
    component: useDestrAssignExtrVals,
  },
  {
    path: "/use-export-to-share-a-code-block",
    name: "useExportToShare",
    component: useExportToShare,
  },
  {
    path: "/use-getters-and-setters-to-control-access-to-an-object",
    name: "useGettersAndSetterToContrAccess",
    component: useGettersAndSetterToContrAccess,
  },
  {
    path: "/use-the-rest-parameter-with-function-parameters",
    name: "useTheRestParamWithFuncParams",
    component: useTheRestParamWithFuncParams,
  },
  {
    path: "/use-the-spread-operator-to-evaluate-arrays-in-place",
    name: "useSpreadOperToEvalArrInPlace",
    component: useSpreadOperToEvalArrInPlace,
  },
  {
    path: "/use-to-import-everything-from-a-file",
    name: "toImportEverything",
    component: toImportEverything,
  },
  {
    path: "/write-arrow-functions-with-parameters",
    name: "writeArrowFunParams",
    component: writeArrowFunParams,
  },
  {
    path: "/write-concise-declarative-functions-with-es6",
    name: "writeConciseDecFunc",
    component: writeConciseDecFunc,
  },
  {
    path: "/write-concise-object-literal-declarations-using-object-property-shorthand",
    name: "writeConciseObjLiteral",
    component: writeConciseObjLiteral,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
