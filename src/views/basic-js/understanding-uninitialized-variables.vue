<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Understanding Uninitialized Variables</h1>
          <p>
            When JavaScript variables are declared, they have an initial value
            of <Code>undefined</Code>. If you do a mathematical operation on an
            <Code>undefined</Code> variable your result will be
            <Code>NaN</Code> which means "Not a Number". If you concatenate a
            string with an <Code>undefined</Code> variable, you will get a
            string of <Code>undefined</Code>.
          </p>
          <hr />
          <p>
            Initialize the three variables <Code>a</Code>, <Code>b</Code>, and
            <Code>c</Code> with <Code>5</Code>, <Code>10</Code>, and
            <Code>"I am a"</Code>
            respectively so that they will not be <Code>undefined</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>a</Code> should be defined and have a final value of
                <Code>6</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>b</Code> should be defined and have a final value of
                <Code>15</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>c</Code> should not contain <Code>undefined</Code> and
                should have a final value of the string
                <Code>I am a String!</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should not change code below the specified comment.</p>
            </li>
          </ul>
        </LeftScreen>
      </div>
      <RightScreen @resize-width="changeWidth">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          doloremque.
        </p>
      </RightScreen>
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
