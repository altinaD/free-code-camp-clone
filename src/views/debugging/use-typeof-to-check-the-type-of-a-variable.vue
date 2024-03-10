<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use typeof to Check the Type of a Variable</h1>
          <p>
            You can use <Code>typeof</Code> to check the data structure, or
            type, of a variable. This is useful in debugging when working with
            multiple data types. If you think you're adding two numbers, but one
            is actually a string, the results can be unexpected. Type errors can
            lurk in calculations or function calls. Be careful especially when
            you're accessing and working with external data in the form of a
            JavaScript Object Notation (JSON) object.
          </p>
          <p>Here are some examples using <Code>typeof</Code>:</p>
          <Comment>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="blue">typeof ""</span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="blue">typeof </span>
            <span class="purple">0</span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="blue">typeof </span>
            <span class="black">[] );</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="blue">typeof </span>
            <span class="black">{});</span>
            <div class="next"></div>
          </Comment>
          <p>
            In order, the console will display the strings <Code>string</Code>,
            <Code>number</Code>, and <Code>object</Code>.
          </p>
          <p>
            JavaScript recognizes seven primitive (immutable) data types:
            <Code>Boolean</Code>, <Code>Null</Code>, <Code>Undefined</Code>,
            <Code>Number</Code>, <Code>String</Code>, Symbol (new with ES6), and
            <Code>BigInt</Code> (new with ES2020), and one type for mutable
            items: <Code>Object</Code>. Note that in JavaScript, arrays are
            technically a type of object.
          </p>
          <hr />
          <p>
            Add two <Code>console.log()</Code> statements to check the
            <Code>typeof</Code> each of the two variables <Code>seven</Code> and
            <Code>three</Code> in the code.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Your code should use <Code>typeof</Code> in two
                <Code>console.log()</Code> statements to check the type of the
                variables.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your code should use <Code>typeof</Code> to check the type of
                the variable <Code>seven</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your code should use <Code>typeof</Code> to check the type of
                the variable <Code>three</Code>.
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
