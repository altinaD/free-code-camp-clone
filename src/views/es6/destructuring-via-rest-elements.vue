<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Destructuring via rest elements</h1>
          <p>
            In some situations involving array destructuring, we might want to
            collect the rest of the elements into a separate array.
          </p>
          <p>
            The result is similar to <Code>Array.prototype.slice()</Code>, as
            shown below:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">[ a, b, ... arr ] = [ </span>
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
            <span class="black">, </span>
            <span class="purple">7</span>
            <span class="black"> ]; </span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">( a, b );</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">( arr );</span>
          </Comment>
          <p>
            The console would display the values <Code>1, 2</Code> and
            <Code>[3, 4, 5, 7]</Code>.
          </p>
          <p>
            Variables <Code>a</Code> and <Code>b</Code> take the first and
            second values from the array. After that, because of the rest syntax
            presence, <Code>arr</Code> gets the rest of the values in the form
            of an array. The rest element only works correctly as the last
            variable in the list. As in, you cannot use the rest syntax to catch
            a subarray that leaves out the last element of the original array.
          </p>
          <hr />
          <p>
            Use a destructuring assignment with the rest syntax to emulate the
            behavior of <Code>Array.prototype.slice()</Code>.
            <Code>removeFirstTwo()</Code> should return a sub-array of the
            original array <Code>list</Code> with the first two elements
            omitted.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>removeFirstTwo([1, 2, 3, 4, 5])</Code> should be
                <Code>[3, 4, 5]</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>removeFirstTwo()</Code> should not modify
                <Code>list</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>Array.slice()</Code> should not be used.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should use the rest syntax.</p>
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
