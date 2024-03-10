<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Mutate an Array Declared with const</h1>
          <p>
            If you are unfamiliar with <Code>const</Code>, check out
            <u>this challenge about the <Code>const</Code> keyword.</u>
          </p>
          <p>
            The <Code>const</Code> declaration has many use cases in modern
            JavaScript.
          </p>
          <p>
            Some developers prefer to assign all their variables using
            <Code>const</Code> by default, unless they know they will need to
            reassign the value. Only in that case, they use <Code>let</Code>.
          </p>
          <p>
            However, it is important to understand that objects (including
            arrays and functions) assigned to a variable using
            <Code>const</Code> are still mutable. Using the
            <Code>const</Code> declaration only prevents reassignment of the
            variable identifier.
          </p>
          <Comment>
            <span class="blue">const </span><span class="black">s = [</span
            ><span class="purple"> 5, 6, 7 </span>
            <span class="black"
              >];
              <div class="next"></div>
              s = [
            </span>
            <span class="purple">1, 2, 3</span><span class="black">];</span>
            <div class="next"></div>
            <span class="black">s [ </span><span class="purple">2</span>
            <span class="black"> ] = </span> <span class="purple">45</span
            ><span class="black"
              >;
              <div class="next"></div>
              console.
            </span>
            <span class="red">log</span>
            <span class="black">(s);</span>
          </Comment>
          <p>
            <Code>s = [1, 2, 3]</Code> will result in an error. After commenting
            out that line, the <Code>console.log</Code> will display the value
            <Code>[5, 6, 45]</Code>.
          </p>
          <p>
            As you can see, you can mutate the object
            <Code>[5, 6, 7]</Code> itself and the variable s will still point to
            the altered array <Code>[5, 6, 45]</Code>. Like all arrays, the
            array elements in <Code>s</Code> are mutable, but because
            <Code>const</Code> was used, you cannot use the variable identifier
            <Code>s</Code> to point to a different array using the assignment
            operator.
          </p>
          <hr />
          <p>
            An array is declared as <Code>const s = [5, 7, 2]</Code>. Change the
            array to <Code>[2, 5, 7]</Code> using various element assignments.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should not replace <Code>const</Code> keyword.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>s</Code> should be a constant variable (by using
                <Code>const</Code>).
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should not change the original array declaration.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>s</Code> should be equal to <Code>[2, 5, 7]</Code>.</p>
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
