<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use the JavaScript Console to Check the Value of a Variable</h1>
          <p>
            Both Chrome and Firefox have excellent JavaScript consoles, also
            known as DevTools, for debugging your JavaScript.
          </p>
          <p>
            You can find Developer tools in your Chrome's menu or Web Console in
            Firefox's menu. If you're using a different browser, or a mobile
            phone, we strongly recommend switching to desktop Firefox or Chrome.
          </p>
          <p>
            The <Code>console.log()</Code> method, which "prints" the output of
            what's within its parentheses to the console, will likely be the
            most helpful debugging tool. Placing it at strategic points in your
            code can show you the intermediate values of variables. It's good
            practice to have an idea of what the output should be before looking
            at what it is. Having check points to see the status of your
            calculations throughout your code will help narrow down where the
            problem is.
          </p>
          <p>
            Here's an example to print the string <Code>Hello world!</Code> to
            the console:
          </p>
          <Comment>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="green">'Hello world!'</span>
            <span class="black">);</span>
          </Comment>
          <hr />
          <p>
            Use the <Code>console.log()</Code> method to print the value of the
            variable <Code>a</Code>
            where noted in the code.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Your code should use <Code>console.log()</Code> to check the
                value of the variable <Code>a</Code>.
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
