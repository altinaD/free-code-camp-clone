<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use the Spread Operator to Evaluate Arrays In-Place</h1>
          <p>
            ES6 introduces the <i>spread operator</i>, which allows us to expand
            arrays and other expressions in places where multiple parameters or
            elements are expected.
          </p>
          <p>
            The ES5 code below uses <Code>apply()</Code> to compute the maximum
            value in an array:
          </p>
          <Comment>
            <span class="blue">var </span>
            <span class="black">arr = [</span>
            <span class="purple">6</span>
            <span class="black">, </span>
            <span class="purple">89</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black">, </span>
            <span class="purple">45</span>
            <span class="black">];</span>
            <div class="next"></div>
            <span class="blue">var </span>
            <span class="black">maximus = Math.</span>
            <span class="red">max</span>
            <span class="black">.</span>
            <span class="red">apply</span>
            <span class="black">(</span>
            <span class="blue">null</span>
            <span class="black">, arr);</span>
          </Comment>
          <p><Code>maximus</Code> would have a value of <Code>89</Code>.</p>
          <p>
            We had to use <Code>Math.max.apply(null, arr)</Code> because
            <Code>Math.max(arr)</Code> returns <Code>NaN</Code>.
            <Code>Math.max()</Code> expects comma-separated arguments, but not
            an array. The spread operator makes this syntax much better to read
            and maintain.
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">arr = [</span>
            <span class="purple">6</span>
            <span class="black">, </span>
            <span class="purple">89</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black">, </span>
            <span class="purple">45</span>
            <span class="black">];</span>
            <div class="next"></div>
            <span class="blue">const </span>
            <span class="black">maximus = Math.</span>
            <span class="red">max</span>
            <span class="black">(...arr);</span>
          </Comment>
          <p><Code>maximus</Code> would have a value of <Code>89</Code>.</p>
          <p>
            <Code>...arr</Code> returns an unpacked array. In other words, it
            spreads the array. However, the spread operator only works in-place,
            like in an argument to a function or in an array literal. For
            example:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">spreaded = [...arr];</span>
          </Comment>
          <p>However, the following code will not work:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">spreaded = ...arr;</span>
          </Comment>
          <hr />
          <p>
            Copy all contents of <Code>arr1</Code> into another array
            <Code>arr2</Code> using the spread operator.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>arr2</Code> should be correct copy of <Code>arr1</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>...</Code> spread operator should be used to duplicate
                <Code>arr1</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>arr2</Code> should remain unchanged when
                <Code>arr1</Code> is changed.
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
