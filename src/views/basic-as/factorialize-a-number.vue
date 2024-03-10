<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Factorialize a Number</h1>
          <p>Return the factorial of the provided integer.</p>
          <p>
            If the integer is represented with the letter <Code>n</Code>, a
            factorial is the product of all positive integers less than or equal
            to <Code>n</Code>.
          </p>
          <p>
            Factorials are often represented with the shorthand notation
            <Code>n!</Code>
          </p>
          <p>For example: <Code>5! = 1 * 2 * 3 * 4 * 5 = 120</Code></p>
          <p>
            Only integers greater than or equal to zero will be supplied to the
            function.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>factorialize(5)</Code> should return a number.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>factorialize(5)</Code> should return <Code>120</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>factorialize(10)</Code> should return
                <Code>3628800</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>factorialize(20)</Code> should return
                <Code>2432902008176640000</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>factorialize(0)</Code> should return <Code>1</Code>.</p>
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
