<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Write Arrow Functions with Parameters</h1>
          <p>
            Just like a regular function, you can pass arguments into an arrow
            function.
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">doubler </span>
            <span class="black">= (item) => item * </span>
            <span class="purple">2</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="red">doubler</span>
            <span class="black">(</span>
            <span class="purple">4</span>
            <span class="black">);</span>
          </Comment>
          <p><Code>doubler(4)</Code> would return the value <Code>8</Code>.</p>
          <p>
            If an arrow function has a single parameter, the parentheses
            enclosing the parameter may be omitted.
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">doubler </span>
            <span class="black">= item => item * </span>
            <span class="purple">2</span>
            <span class="black">;</span>
          </Comment>
          <p>
            It is possible to pass more than one argument into an arrow
            function.
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">multiplier </span>
            <span class="black">= (item, multi) => item * multi;</span>
            <div class="next"></div>
            <span class="red">multiplier</span>
            <span class="black">(</span>
            <span class="purple">4</span>
            <span class="black">,</span>
            <span class="purple"> 2</span>
            <span class="black">);</span>
          </Comment>
          <p>
            <Code>multiplier(4, 2)</Code> would return the value <Code>8</Code>.
          </p>
          <hr />
          <p>
            Rewrite the <Code>myConcat</Code> function which appends contents of
            <Code>arr2</Code> to <Code>arr1</Code>
            so that the function uses arrow function syntax.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should replace the <Code>var</Code> keyword.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>myConcat</Code> should be a constant variable (by using
                <Code>const</Code>).
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>myConcat</Code> should be an arrow function with two
                parameters
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>myConcat</Code> should return [1, 2, 3, 4, 5].</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>The <Code>function</Code> keyword should not be used.</p>
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
