import { createRouter, createWebHashHistory } from "vue-router";

const Home = () =>
    import ("@/views/Home.vue");
const addTwoNums = () =>
    import ("@/views/basic-js/add-two-numbers-with-javascript.vue");
const assignVal = () =>
    import ("@/views/basic-js/assigning-the-value-of-one-variable-to-another.vue");
const comment = () =>
    import ("@/views/basic-js/comment-your-javascript-code.vue");
const declareConst = () =>
    import (
        "@/views/basic-js/declare-a-read-only-variable-with-the-const-keyword.vue"
    );
const declare = () =>
    import ("@/views/basic-js/declare-javascript-variables.vue");
const division = () =>
    import ("@/views/basic-js/divide-one-number-by-another-with-javascript.vue");
const declareStr = () =>
    import ("@/views/basic-js/declare-string-variables.vue");
const differencesVarLet = () =>
    import (
        "@/views/basic-js/explore-differences-between-the-var-and-let-keywords.vue"
    );
const initVarsAssign = () =>
    import (
        "@/views/basic-js/initializing-variables-with-the-assignment-operator.vue"
    );
const multiply = () =>
    import ("@/views/basic-js/multiply-two-numbers-with-javascript.vue");
const storingVals = () =>
    import ("@/views/basic-js/storing-values-with-the-assignment-operator.vue");
const substract = () =>
    import (
        "@/views/basic-js/subtract-one-number-from-another-with-javascript.vue"
    );
const caseSens = () =>
    import ("@/views/basic-js/understanding-case-sensitivity-in-variables.vue");
const uninitVars = () =>
    import ("@/views/basic-js/understanding-uninitialized-variables.vue");

// es6 compareScopes from "

const compareScopes = () =>
    import ("@/views/es6/compare-scopes-of-the-var-and-let-keywords.vue");
const completeAPromiseResolveReject = () =>
    import ("@/views/es6/complete-a-promise-with-resolve-and-reject.vue");
const createPromise = () =>
    import ("@/views/es6/create-a-javascript-promise.vue");
const createModuleScript = () =>
    import ("@/views/es6/create-a-module-script.vue");
const createExportFallback = () =>
    import ("@/views/es6/create-an-export-fallback-with-export-default.vue");
const createStringUsingLiterals = () =>
    import ("@/views/es6/create-strings-using-template-literals.vue");
const destructingRestEl = () =>
    import ("@/views/es6/destructuring-via-rest-elements.vue");
const handlePromiseWithThen = () =>
    import ("@/views/es6/handle-a-fulfilled-promise-with-then.vue");
const handleRejectedPromiseWithCatch = () =>
    import ("@/views/es6/handle-a-rejected-promise-with-catch.vue");
const importDefExport = () =>
    import ("@/views/es6/import-a-default-export.vue");
const mutateArrConst = () =>
    import ("@/views/es6/mutate-an-array-declared-with-const.vue");
const preventObjMutation = () =>
    import ("@/views/es6/prevent-object-mutation.vue");
const reuseJsCodeImport = () =>
    import ("@/views/es6/reuse-javascript-code-using-import.vue");
const setDefParamsForFunc = () =>
    import ("@/views/es6/set-default-parameters-for-your-functions.vue");
const useArrowFuncForAnonFunc = () =>
    import (
        "@/views/es6/use-arrow-functions-to-write-concise-anonymous-functions.vue"
    );
const useClassSyntaxConstrFunc = () =>
    import ("@/views/es6/use-class-syntax-to-define-a-constructor-function.vue");
const useDestrAssignfromArr = () =>
    import (
        "@/views/es6/use-destructuring-assignment-to-assign-variables-from-arrays.vue"
    );
const useDestrAssignToPassObj = () =>
    import (
        "@/views/es6/use-destructuring-assignment-to-pass-an-object-as-a-function's-parameters.vue"
    );
const useDestrAssignfromNestedObj = () =>
    import (
        "@/views/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects.vue"
    );
const useDestrAssignExtrVals = () =>
    import (
        "@/views/es6/use-destructuring-assignment-to-extract-values-from-objects.vue"
    );
const useDesrtAssignVarsFromObj = () =>
    import (
        "@/views/es6/use-destructuring-assignment-to-assign-variables-from-objects.vue"
    );
const useExportToShare = () =>
    import ("@/views/es6/use-export-to-share-a-code-block.vue");
const useGettersAndSetterToContrAccess = () =>
    import (
        "@/views/es6/use-getters-and-setters-to-control-access-to-an-object.vue"
    );
const useTheRestParamWithFuncParams = () =>
    import ("@/views/es6/use-the-rest-parameter-with-function-parameters.vue");
const useSpreadOperToEvalArrInPlace = () =>
    import ("@/views/es6/use-the-spread-operator-to-evaluate-arrays-in-place.vue");
const toImportEverything = () =>
    import ("@/views/es6/use-to-import-everything-from-a-file.vue");
const writeArrowFunParams = () =>
    import ("@/views/es6/write-arrow-functions-with-parameters.vue");
const writeConciseDecFunc = () =>
    import ("@/views/es6/write-concise-declarative-functions-with-es6.vue");
const writeConciseObjLiteral = () =>
    import (
        "@/views/es6/write-concise-object-literal-declarations-using-object-property-shorthand.vue"
    );

// regex

const usingTheTestMethod = () =>
    import ("@/views/regex/using-the-test-method.vue");
const matchLiteralStrings = () =>
    import ("@/views/regex/match-literal-strings.vue");
const matchALiteralStringWithDifPos = () =>
    import (
        "@/views/regex/match-a-literal-string-with-different-possibilities.vue"
    );
const ignoreCaseWhileMatch = () =>
    import ("@/views/regex/ignore-case-while-matching.vue");
const extractMatches = () =>
    import ("@/views/regex/extract-matches.vue");
const findMoreThanTheFirstMAtch = () =>
    import ("@/views/regex/find-more-than-the-first-match.vue");
const matchAnythingWithWildcard = () =>
    import ("@/views/regex/match-anything-with-wildcard-period.vue");

/////// debugging

const useJsConsoleToCheckVal = () =>
    import (
        "@/views/debugging/use-the-javascript-console-to-check-the-value-of-a-variable.vue"
    );
const understandDiffBtwFreeCodeAndBrowserConsole = () =>
    import (
        "@/views/debugging/understanding-the-differences-between-the-freecodecamp-and-browser-console.vue"
    );
const useTypeofToCheckTypeVar = () =>
    import ("@/views/debugging/use-typeof-to-check-the-type-of-a-variable.vue");
const catchMisspelledVarAndFuncName = () =>
    import ("@/views/debugging/catch-misspelled-variable-and-function-names.vue");

// basic ds
const useAnArrToStoreCollectOfData = () =>
    import ("@/views/basic-ds/use-an-array-to-store-a-collection-of-data.vue");
const accessAnArrContentUsingBracketNot = () =>
    import (
        "@/views/basic-ds/access-an-array's-contents-using-bracket-notation.vue"
    );
const addItemToAnArrPushAndUnshift = () =>
    import (
        "@/views/basic-ds/add-items-to-an-array-with-push()-and-unshift().vue"
    );

// basic algorithm scripting

const convertCelsiusToFahr = () =>
    import ("@/views/basic-as/convert-celsius-to-fahrenheit.vue");
const reverseAStr = () =>
    import ("@/views/basic-as/reverse-a-string.vue");
const factorANum = () =>
    import ("@/views/basic-as/factorialize-a-number.vue");

// object-oriented-programming

const createABasicObj = () =>
    import ("@/views/oop/create-a-basic-javascript-object.vue");
const useDotNotatToAccessPropOfObj = () =>
    import (
        "@/views/oop/use-dot-notation-to-access-the-properties-of-an-object.vue"
    );

// functional programming

const learnAboutFuncProgram = () =>
    import ("@/views/func-prog/learn-about-functional-programming.vue");
const undersFuncProgTermin = () =>
    import ("@/views/func-prog/understand-functional-programming-terminology.vue");

// intermediate algorithm scripting

const sumAllNumsInARange = () =>
    import ("@/views/inter-as/sum-all-numbers-in-a-range.vue");
const diffTwoArrs = () =>
    import ("@/views/inter-as/diff-two-arrays.vue");

// js algorithms and ds projects

import palindromeChecker from "@/views/jsdsa/palindrome-checker.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: "",
            component: Home,
        },
        {
            path: "/basic-javascript/add-two-numbers-with-javascript",
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
            path: "/basic-algorithm-scripting/convert-celsius-to-fahrenheit",
            component: convertCelsiusToFahr,
            name: "convertCelsiusToFahr",
        },
        {
            path: "/basic-algorithm-scripting/reverse-a-string",
            component: reverseAStr,
            name: "reverseAStr",
        },
        {
            path: "/basic-algorithm-scripting/factorialize-a-number",
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
            path: "/functional-programming/learn-about-functional-programming",
            component: learnAboutFuncProgram,
            name: "learnAboutFuncProgram",
        },
        {
            path: "/functional-programming/understand-functional-programming-terminology",
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
    ],

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