<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>
            Write Concise Object Literal Declarations Using Object Property
            Shorthand
          </h1>
          <p>ES6 adds some nice support for easily defining object literals.</p>
          <p>Consider the code below:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">getMousePosition </span>
            <span class="black">= ( x, y ) => ({</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">x</span>
            <span class="black">: x,</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">y</span>
            <span class="black">: y</span>
            <div class="next"></div>
            <span class="black">});</span>
          </Comment>
          <p>
            <Code>getMousePosition</Code> is a simple function that returns an
            object containing two properties. ES6 provides the syntactic sugar
            to eliminate the redundancy of having to write <Code>x: x</Code>.
            You can simply write <Code>x</Code> once, and it will be converted
            to <Code>x: x</Code> (or something equivalent) under the hood. Here
            is the same function from above rewritten to use this new syntax:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">getMousePosition </span>
            <span class="black">= ( x, y ) => ({ x, y });</span>
          </Comment>
          <hr />
          <p>
            Use object property shorthand with object literals to create and
            return an object with name, age and gender properties.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>createPerson("Zodiac Hasbro", 56, "male")</Code> should
                return
                <Code>{name: "Zodiac Hasbro", age: 56, gender: "male"}</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>Your code should not use <Code>key:value</Code>.</p>
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
