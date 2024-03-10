<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use * to Import Everything from a File</h1>
          <p>
            Suppose you have a file and you wish to import all of its contents
            into the current file. This can be done with the
            <Code>import * as</Code> syntax. Here's an example where the
            contents of a file named <Code>math_functions.js</Code> are imported
            into a file in the same directory:
          </p>
          <Comment>
            <span class="blue">import </span>
            <span class="black">* </span>
            <span class="blue">as </span>
            <span class="black">myMathModule </span>
            <span class="blue">from </span>
            <span class="green">"./math_functions.js"</span>
            <span class="black">;</span>
          </Comment>
          <p>
            The above <Code>import</Code> statement will create an object called
            <Code>myMathModule</Code>. This is just a variable name, you can
            name it anything. The object will contain all of the exports from
            <Code>math_functions.js</Code> in it, so you can access the
            functions like you would any other object property. Here's how you
            can use the <Code>add</Code> and <Code>subtract</Code> functions
            that were imported:
          </p>
          <Comment>
            <span class="black">myMathModule.</span>
            <span class="red">add</span>
            <span class="black">( </span>
            <span class="purple">2</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black"> );</span>
            <div class="next"></div>
            <span class="black">myMathModule.</span>
            <span class="red">subtract</span>
            <span class="black">( </span>
            <span class="purple">5</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black"> );</span>
          </Comment>
          <hr />
          <p>
            The code in this file requires the contents of the file:
            <Code>string_functions.js</Code>, that is in the same directory as
            the current file. Use the <Code>import * as</Code> syntax to import
            everything from the file into an object called
            <Code>stringFunctions</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Your code should properly use <Code>import * as</Code> syntax.
              </p>
            </li>
          </ul>
        </LeftScreen>
      </div>
      <RightScreen @resize-width="changeWidth"> </RightScreen>
    </div>
  </div>
</template>

<script setup>
import Comment from "@/components/util-components/comment.vue";
import Navigation from "@/components/util-components/navigation.vue";
import LeftScreen from "@/components/util-components/left-screen.vue";
import Code from "@/components/util-components/code.vue";
import RightScreen from "@/components/util-components/right-screen.vue";
import Tests from "@/components/util-components/tests.vue";
import testsInitial from "@/components/util-components/svg-components/tests-initial.vue";
import { ref } from "vue";
const leftScreenRef = ref();

function changeWidth(n) {
  let size = window.innerWidth - n - 30;
  leftScreenRef.value.style.width = size + "px";
}
</script>
