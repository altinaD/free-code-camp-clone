import {
  createRouter,
  createWebHashHistory,
  // createWebHistory,
} from "vue-router";
import Home from "@/views/Home.vue";
// basic-js
import addTwoNums from "@/views/basic-js/add-two-numbers-with-javascript.vue";
import assignVal from "@/views/basic-js/assigning-the-value-of-one-variable-to-another.vue";
import comment from "@/views/basic-js/comment-your-javascript-code.vue";
import declareConst from "@/views/basic-js/declare-a-read-only-variable-with-the-const-keyword.vue";
import declare from "@/views/basic-js/declare-javascript-variables.vue";
import division from "@/views/basic-js/divide-one-number-by-another-with-javascript.vue";
import declareStr from "@/views/basic-js/declare-string-variables.vue";
import differencesVarLet from "@/views/basic-js/explore-differences-between-the-var-and-let-keywords.vue";
import initVarsAssign from "@/views/basic-js/initializing-variables-with-the-assignment-operator.vue";
import multiply from "@/views/basic-js/multiply-two-numbers-with-javascript.vue";
import storingVals from "@/views/basic-js/storing-values-with-the-assignment-operator.vue";
import substract from "@/views/basic-js/subtract-one-number-from-another-with-javascript.vue";
import caseSens from "@/views/basic-js/understanding-case-sensitivity-in-variables.vue";
import uninitVars from "@/views/basic-js/understanding-uninitialized-variables.vue";

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
import useDesrtAssignVarsFromObj from "@/views/es6/use-destructuring-assignment-to-assign-variables-from-objects.vue";
import useExportToShare from "@/views/es6/use-export-to-share-a-code-block.vue";
import useGettersAndSetterToContrAccess from "@/views/es6/use-getters-and-setters-to-control-access-to-an-object.vue";
import useTheRestParamWithFuncParams from "@/views/es6/use-the-rest-parameter-with-function-parameters.vue";
import useSpreadOperToEvalArrInPlace from "@/views/es6/use-the-spread-operator-to-evaluate-arrays-in-place.vue";
import toImportEverything from "@/views/es6/use-to-import-everything-from-a-file.vue";
import writeArrowFunParams from "@/views/es6/write-arrow-functions-with-parameters.vue";
import writeConciseDecFunc from "@/views/es6/write-concise-declarative-functions-with-es6.vue";
import writeConciseObjLiteral from "@/views/es6/write-concise-object-literal-declarations-using-object-property-shorthand.vue";

// regex

import usingTheTestMethod from "@/views/regex/using-the-test-method.vue";
import matchLiteralStrings from "@/views/regex/match-literal-strings.vue";
import matchALiteralStringWithDifPos from "@/views/regex/match-a-literal-string-with-different-possibilities.vue";
import ignoreCaseWhileMatch from "@/views/regex/ignore-case-while-matching.vue";
import extractMatches from "@/views/regex/extract-matches.vue";
import findMoreThanTheFirstMAtch from "@/views/regex/find-more-than-the-first-match.vue";
import matchAnythingWithWildcard from "@/views/regex/match-anything-with-wildcard-period.vue";

/////// debugging

import useJsConsoleToCheckVal from "@/views/debugging/use-the-javascript-console-to-check-the-value-of-a-variable.vue";
import understandDiffBtwFreeCodeAndBrowserConsole from "@/views/debugging/understanding-the-differences-between-the-freecodecamp-and-browser-console.vue";
import useTypeofToCheckTypeVar from "@/views/debugging/use-typeof-to-check-the-type-of-a-variable.vue";
import catchMisspelledVarAndFuncName from "@/views/debugging/catch-misspelled-variable-and-function-names.vue";

// basic ds
import useAnArrToStoreCollectOfData from "@/views/basic-ds/use-an-array-to-store-a-collection-of-data.vue";
import accessAnArrContentUsingBracketNot from "@/views/basic-ds/access-an-array's-contents-using-bracket-notation.vue";
import addItemToAnArrPushAndUnshift from "@/views/basic-ds/add-items-to-an-array-with-push()-and-unshift().vue";

// basic algorithm scripting

import convertCelsiusToFahr from "@/views/basic-as/convert-celsius-to-fahrenheit.vue";
import reverseAStr from "@/views/basic-as/reverse-a-string.vue";
import factorANum from "@/views/basic-as/factorialize-a-number.vue";

// object-oriented-programming

import createABasicObj from "@/views/oop/create-a-basic-javascript-object.vue";
import useDotNotatToAccessPropOfObj from "@/views/oop/use-dot-notation-to-access-the-properties-of-an-object.vue";

// functional programming

import learnAboutFuncProgram from "@/views/func-prog/learn-about-functional-programming.vue";
import undersFuncProgTermin from "@/views/func-prog/understand-functional-programming-terminology.vue";

// intermediate algorithm scripting

import sumAllNumsInARange from "@/views/inter-as/sum-all-numbers-in-a-range.vue";
import diffTwoArrs from "@/views/inter-as/diff-two-arrays.vue";

// js algorithms and ds projects

import palindromeChecker from "@/views/jsdsa/palindrome-checker.vue";
import romanNumeralConverter from "@/views/jsdsa/roman-numeral-converter.vue";

const routes = [
  {
    path: "",
    component: Home,
  },
  {
    path: "/basic-javascript/add-two-numbers-with-javascript",
    name: "addTwoNums",
    component: addTwoNums,
  },
  {
    path: "/basic-javascript/assigning-the-value-of-one-variable-to-another",
    name: "assignVal",
    component: assignVal,
  },
  {
    path: "/basic-javascript/comment-your-javascript-code",
    name: "comment",
    component: comment,
  },
  {
    path: "/basic-javascript/declare-a-read-only-variable-with-the-const-keyword",
    name: "declareConst",
    component: declareConst,
  },
  {
    path: "/basic-javascript/divide-one-number-by-another-with-javascript",
    name: "division",
    component: division,
  },
  {
    path: "/basic-javascript/declare-javascript-variables",
    name: "declare",
    component: declare,
  },
  {
    path: "/basic-javascript/declare-string-variables",
    name: "declareStr",
    component: declareStr,
  },
  {
    path: "/basic-javascript/explore-differences-between-the-var-and-let-keywords",
    name: "differencesVarLet",
    component: differencesVarLet,
  },
  {
    path: "/basic-javascript/initializing-variables-with-the-assignment-operator",
    name: "initVarsAssign",
    component: initVarsAssign,
  },
  {
    path: "/basic-javascript/multiply-two-numbers-with-javascript",
    name: "multiply",
    component: multiply,
  },
  {
    path: "/basic-javascript/storing-values-with-the-assignment-operator",
    name: "storingVals",
    component: storingVals,
  },
  {
    path: "/basic-javascript/subtract-one-number-from-another-with-javascript",
    name: "substract",
    component: substract,
  },
  {
    path: "/basic-javascript/understanding-case-sensitivity-in-variables",
    name: "caseSens",
    component: caseSens,
  },
  {
    path: "/basic-javascript/understanding-uninitialized-variables",
    name: "uninitVars",
    component: uninitVars,
  },

  // es6
  {
    path: "/es6/compare-scopes-of-the-var-and-let-keywords",
    name: "compareScopes",
    component: compareScopes,
  },
  {
    path: "/es6/complete-a-promise-with-resolve-and-reject",
    name: "completeAPromiseResolveReject",
    component: completeAPromiseResolveReject,
  },
  {
    path: "/es6/create-a-javascript-promise",
    name: "createPromise",
    component: createPromise,
  },
  {
    path: "/es6/create-a-module-script",
    name: "createModuleScript",
    component: createModuleScript,
  },
  {
    path: "/es6/create-an-export-fallback-with-export-default",
    name: "createExportFallback",
    component: createExportFallback,
  },
  {
    path: "/es6/create-strings-using-template-literals",
    name: "createStringUsingLiterals",
    component: createStringUsingLiterals,
  },
  {
    path: "/es6/destructuring-via-rest-elements",
    name: "destructingRestEl",
    component: destructingRestEl,
  },
  {
    path: "/es6/handle-a-fulfilled-promise-with-then",
    name: "handlePromiseWithThen",
    component: handlePromiseWithThen,
  },
  {
    path: "/es6/handle-a-rejected-promise-with-catch",
    name: "handleRejectedPromiseWithCatch",
    component: handleRejectedPromiseWithCatch,
  },
  {
    path: "/es6/import-a-default-export",
    name: "importDefExport",
    component: importDefExport,
  },
  {
    path: "/es6/mutate-an-array-declared-with-const",
    name: "mutateArrConst",
    component: mutateArrConst,
  },
  {
    path: "/es6/prevent-object-mutation",
    name: "preventObjMutation",
    component: preventObjMutation,
  },
  {
    path: "/es6/reuse-javascript-code-using-import",
    name: "reuseJsCodeImport",
    component: reuseJsCodeImport,
  },
  {
    path: "/es6/set-default-parameters-for-your-functions",
    name: "setDefParamsForFunc",
    component: setDefParamsForFunc,
  },
  {
    path: "/es6/use-arrow-functions-to-write-concise-anonymous-functions",
    name: "useArrowFuncForAnonFunc",
    component: useArrowFuncForAnonFunc,
  },
  {
    path: "/es6/use-class-syntax-to-define-a-constructor-function",
    name: "useClassSyntaxConstrFunc",
    component: useClassSyntaxConstrFunc,
  },
  {
    path: "/es6/use-destructuring-assignment-to-assign-variables-from-objects",
    name: "useDesrtAssignVarsFromObj",
    component: useDesrtAssignVarsFromObj,
  },
  {
    path: "/es6/use-destructuring-assignment-to-assign-variables-from-arrays",
    name: "useDestrAssignfromArr",
    component: useDestrAssignfromArr,
  },
  {
    path: `/use-destructuring-assignment-to-pass-an-object-as-a-function's-parameters`,
    name: "useDestrAssignToPassObj",
    component: useDestrAssignToPassObj,
  },
  {
    path: "/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects",
    name: "useDestrAssignfromNestedObj",
    component: useDestrAssignfromNestedObj,
  },
  {
    path: "/es6/use-destructuring-assignment-to-extract-values-from-objects",
    name: "useDestrAssignExtrVals",
    component: useDestrAssignExtrVals,
  },
  {
    path: "/es6/use-export-to-share-a-code-block",
    name: "useExportToShare",
    component: useExportToShare,
  },
  {
    path: "/es6/use-getters-and-setters-to-control-access-to-an-object",
    name: "useGettersAndSetterToContrAccess",
    component: useGettersAndSetterToContrAccess,
  },
  {
    path: "/es6/use-the-rest-parameter-with-function-parameters",
    name: "useTheRestParamWithFuncParams",
    component: useTheRestParamWithFuncParams,
  },
  {
    path: "/es6/use-the-spread-operator-to-evaluate-arrays-in-place",
    name: "useSpreadOperToEvalArrInPlace",
    component: useSpreadOperToEvalArrInPlace,
  },
  {
    path: "/es6/use-*-to-import-everything-from-a-file",
    name: "toImportEverything",
    component: toImportEverything,
  },
  {
    path: "/es6/write-arrow-functions-with-parameters",
    name: "writeArrowFunParams",
    component: writeArrowFunParams,
  },
  {
    path: "/es6/write-concise-declarative-functions-with-es6",
    name: "writeConciseDecFunc",
    component: writeConciseDecFunc,
  },
  {
    path: "/es6/write-concise-object-literal-declarations-using-object-property-shorthand",
    name: "writeConciseObjLiteral",
    component: writeConciseObjLiteral,
  },

  // regex

  {
    path: "/regular-expressions/using-the-test-method",
    name: "usingTheTestMethod",
    component: usingTheTestMethod,
  },
  {
    path: "/regular-expressions/match-literal-strings",
    name: "matchLiteralStrings",
    component: matchLiteralStrings,
  },
  {
    path: "/regular-expressions/match-a-literal-string-with-different-possibilities",
    name: "matchALiteralStringWithDifPos",
    component: matchALiteralStringWithDifPos,
  },
  {
    path: "/regular-expressions/ignore-case-while-matching",
    name: "ignoreCaseWhileMatch",
    component: ignoreCaseWhileMatch,
  },
  {
    path: "/regular-expressions/extract-matches",
    name: "extractMatches",
    component: extractMatches,
  },
  {
    path: "/regular-expressions/find-more-than-the-first-match",
    component: findMoreThanTheFirstMAtch,
    name: "findMoreThanTheFirstMAtch",
  },
  {
    path: "/regular-expressions/match-anything-with-wildcard-period",
    component: matchAnythingWithWildcard,
    name: "matchAnythingWithWildcard",
  },

  // debugging

  {
    path: "/debugging/use-the-javascript-console-to-check-the-value-of-a-variable",
    component: useJsConsoleToCheckVal,
    name: "useJsConsoleToCheckVal",
  },
  {
    path: "/debugging/understanding-the-differences-between-the-freecodecamp-and-browser-console",
    component: understandDiffBtwFreeCodeAndBrowserConsole,
    name: "understandDiffBtwFreeCodeAndBrowserConsole",
  },
  {
    path: "/debugging/use-typeof-to-check-the-type-of-a-variable",
    component: useTypeofToCheckTypeVar,
    name: "useTypeofToCheckTypeVar",
  },
  {
    path: "/debugging/catch-misspelled-variable-and-function-names",
    component: catchMisspelledVarAndFuncName,
    name: "catchMisspelledVarAndFuncName",
  },

  // basic-data-structures

  {
    path: "/basic-data-structures/use-an-array-to-store-a-collection-of-data",
    component: useAnArrToStoreCollectOfData,
    name: "useAnArrToStoreCollectOfData",
  },
  {
    path: "/basic-data-structures/access-an-array's-contents-using-bracket-notation",
    component: accessAnArrContentUsingBracketNot,
    name: "accessAnArrContentUsingBracketNot",
  },
  {
    path: "/basic-data-structures/add-items-to-an-array-with-push()-and-unshift()",
    component: addItemToAnArrPushAndUnshift,
    name: "addItemToAnArrPushAndUnshift",
  },

  //   basic as

  {
    path: "/basic-algorith-scripting/convert-celsius-to-fahrenheit",
    component: convertCelsiusToFahr,
    name: "convertCelsiusToFahr",
  },
  {
    path: "/basic-algorith-scripting/reverse-a-string",
    component: reverseAStr,
    name: "reverseAStr",
  },
  {
    path: "/basic-algorith-scripting/factorialize-a-number",
    component: factorANum,
    name: "factorANum",
  },

  //   oop
  {
    path: "/object-oriented-programming/create-a-basic-javascript-object",
    component: createABasicObj,
    name: "createABasicObj",
  },
  {
    path: "/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object",
    component: useDotNotatToAccessPropOfObj,
    name: "useDotNotatToAccessPropOfObj",
  },

  //   func program

  {
    path: "/functional-progamming/learn-about-functional-programming",
    component: learnAboutFuncProgram,
    name: "learnAboutFuncProgram",
  },
  {
    path: "/functional-progamming/understand-functional-programming-terminology",
    component: undersFuncProgTermin,
    name: "undersFuncProgTermin",
  },

  //   intermed algorithm scripting
  {
    path: "/intermediate-algorithm-scripting/sum-all-numbers-in-a-range",
    component: sumAllNumsInARange,
    name: "sumAllNumsInARange",
  },
  {
    path: "/intermediate-algorithm-scripting/diff-two-arrays",
    component: diffTwoArrs,
    name: "diffTwoArrs",
  },

  // js algorithms and data structures projects
  {
    path: "/javascript-algorithms-and-data-structures-projects/palindrome-checker",
    component: palindromeChecker,
    name: "palindromeChecker",
  },
  {
    path: "/javascript-algorithms-and-data-structures-projects/roman-numeral-converter",
    component: romanNumeralConverter,
    name: "romanNumeralConverter",
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
