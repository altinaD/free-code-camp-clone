<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use Destructuring Assignment to Assign Variables from Arrays</h1>
          <p>
            ES6 makes destructuring arrays as easy as destructuring objects.
          </p>
          <p>
            One key difference between the spread operator and array
            destructuring is that the spread operator unpacks all contents of an
            array into a comma-separated list. Consequently, you cannot pick or
            choose which elements you want to assign to variables.
          </p>
          <p>Destructuring an array lets us do exactly that:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">[ a, b ] = [ </span>
            <span class="purple">1</span>
            <span class="black">, </span>
            <span class="purple">2</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black">, </span>
            <span class="purple">4</span>
            <span class="black">, </span>
            <span class="purple">5</span>
            <span class="black">, </span>
            <span class="purple">6</span>
            <span class="black">]; </span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">( a, b );</span>
          </Comment>
          <p>
            The console will display the values of <Code>a</Code> and
            <Code>b</Code> as <Code>1, 2</Code>.
          </p>
          <p>
            The variable <Code>a</Code> is assigned the first value of the
            array, and <Code>b</Code> is assigned the second value of the array.
            We can also access the value at any index in an array with
            destructuring by using commas to reach the desired index:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">[ a, b, , , c ] = [ </span>
            <span class="purple">1</span>
            <span class="black">, </span>
            <span class="purple">2</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black">, </span>
            <span class="purple">4</span>
            <span class="black">, </span>
            <span class="purple">5</span>
            <span class="black">, </span>
            <span class="purple">6</span>
            <span class="black">]; </span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">( a, b, c );</span>
          </Comment>
          <p>
            The console will display the values of <Code>a</Code>,
            <Code>b</Code>, and <Code>c</Code> as <Code>1, 2, 5</Code>.
          </p>
          <hr />
          <p>
            Use destructuring assignment to swap the values of
            <Code>a</Code> and <Code>b</Code> so that <Code>a</Code> receives
            the value stored in <Code>b</Code>, and <Code>b</Code> receives the
            value stored in <Code>a</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                The value of <Code>a</Code> should be <Code>6</Code>, after
                swapping.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                The value of <Code>b</Code> should be <Code>8</Code>, after
                swapping.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should use array destructuring to swap <Code>a</Code> and
                <Code>b</Code>.
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
