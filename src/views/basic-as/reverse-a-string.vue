<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Reverse a String</h1>
          <p>Reverse the provided string and return the reversed string.</p>
          <p>
            For example, <Code>"hello"</Code> should become
            <Code>"olleh"</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>reverseString("hello") should return a string.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>reverseString("hello")</Code> should return the string
                <Code>olleh</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>reverseString("Howdy")</Code> should return the string
                <Code>ydwoH</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>reverseString("Greetings from Earth")</Code> should return
                the string <Code>htraE morf sgniteerG</Code>.
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
