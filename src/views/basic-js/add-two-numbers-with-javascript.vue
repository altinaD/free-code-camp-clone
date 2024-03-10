<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Add Two Numbers with JavaScript</h1>
          <p>
            <Code>Number</Code> is a data type in JavaScript which represents
            numeric data.
          </p>
          <p>Now let's try to add two numbers using JavaScript.</p>
          <p>
            JavaScript uses the <Code>+</Code> symbol as an addition operator
            when placed between two numbers.
          </p>
          <p><b>Example: </b></p>
          <Comment
            ><span class="green">const </span>
            <span class="black"> myVar = </span> <span class="purple"> 5 </span>
            <span class="black"> + </span>
            <span class="purple"> 10;</span></Comment
          >
          <p><Code>myVar</Code> now has the value <Code>15</Code>.</p>
          <hr />
          <p>
            Change the <Code>0</Code> so that sum will equal <Code>20</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>sum</Code> should equal <Code>20</Code>.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should use the <Code>+</Code> operator.</p>
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
