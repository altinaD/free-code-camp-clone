<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use export to Share a Code Block</h1>
          <p>
            Imagine a file called <Code>math_functions.js</Code> that contains
            several functions related to mathematical operations. One of them is
            stored in a variable, <Code>add</Code>, that takes in two numbers
            and returns their sum. You want to use this function in several
            different JavaScript files. In order to share it with these other
            files, you first need to <Code>export</Code> it.
          </p>
          <Comment>
            <span class="blue">export const </span>
            <span class="red">add </span>
            <span class="black">= ( x, y ) => {</span>
            <div class="next"></div>
            <span class="tab blue">return </span>
            <span class="black">x + y;</span>
            <div class="next"></div>
            <span class="black">}</span>
          </Comment>
          <p>
            The above is a common way to export a single function, but you can
            achieve the same thing like this:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">add </span>
            <span class="black">= ( x, y ) => {</span>
            <div class="next"></div>
            <span class="tab blue">return </span>
            <span class="black">x + y;</span>
            <div class="next"></div>
            <span class="black">}</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="blue">export </span>
            <span class="black">{ add };</span>
          </Comment>
          <p>
            When you export a variable or function, you can import it in another
            file and use it without having to rewrite the code. You can export
            multiple things by repeating the first example for each thing you
            want to export, or by placing them all in the export statement of
            the second example, like this:
          </p>
          <Comment>
            <span class="blue">export </span>
            <span class="black">{ add, subtract };</span>
          </Comment>
          <hr />
          <p>
            There are two string-related functions in the editor. Export both of
            them using the method of your choice.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should properly export <Code>uppercaseString</Code>.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should properly export <Code>lowercaseString</Code>.</p>
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
