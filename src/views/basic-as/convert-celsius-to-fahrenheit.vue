<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <left-screen>
          <h1>Convert Celsius to Fahrenheit</h1>
          <p>
            The formula to convert from Celsius to Fahrenheit is the temperature
            in Celsius times <Code>9/5</Code>, plus <Code>32</Code>.
          </p>
          <p>
            You are given a variable <Code>celsius</Code> representing a
            temperature in Celsius. Use the variable
            <Code>fahrenheit</Code> already defined and assign it the Fahrenheit
            temperature equivalent to the given Celsius temperature. Use the
            formula mentioned above to help convert the Celsius temperature to
            Fahrenheit.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>convertCtoF(0)</Code> should return a number</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <code>convertCtoF(-30)</code> should return a value of
                <code>-22</code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <code>convertCtoF(-10)</code> should return a value of
                <code>14</code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <code>convertCtoF(0)</code> should return a value of
                <code>32</code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <code>convertCtoF(20)</code> should return a value of
                <code>68</code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>convertCtoF(30)</Code> should return a value of
                <Code>86</Code>
              </p>
            </li>
          </ul>
        </left-screen>
      </div>
      <right-screen @resize-width="changeWidth"> </right-screen>
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
  return leftScreenRef;
}
</script>
