<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Sum All Numbers in a Range</h1>
          <p>
            We'll pass you an array of two numbers. Return the sum of those two
            numbers plus the sum of all the numbers between them. The lowest
            number will not always come first.
          </p>
          <p>
            For example, <Code>sumAll([4,1])</Code> should return
            <Code>10</Code> because sum of all the numbers between 1 and 4 (both
            inclusive) is <Code>10</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>sumAll([1, 4])</Code> should return a number.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>sumAll([1, 4])</Code> should return 10.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>sumAll([4, 1])</Code> should return 10.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>sumAll([5, 10])</Code> should return 45.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>sumAll([10, 5])</Code> should return 10.</p>
            </li>
          </ul>
        </LeftScreen>
      </div>
      <RightScreen @resize-width="changeWidth"> </RightScreen>
    </div>
  </div>
</template>

<script setup>
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
