<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Declare JavaScript Variables</h1>
          <p>
            In computer science, data is anything that is meaningful to the
            computer. JavaScript provides eight different data types which are
            <Code>undefined</Code>, <Code>null</Code>, <Code>boolean</Code>,
            <Code>string</Code>, <Code>symbol</Code>, <Code>bigint</Code>,
            <Code>number</Code>, and <Code>object</Code>.
          </p>
          <p>
            For example, computers distinguish between numbers, such as the
            number <Code>12</Code>, and <Code>strings</Code>, such as
            <Code>"12"</Code>, <Code>"dog"</Code>, or <Code>"123 cats"</Code>,
            which are collections of characters. Computers can perform
            mathematical operations on a number, but not on a string.
          </p>
          <p>
            <i>Variables</i> allow computers to store and manipulate data in a
            dynamic fashion. They do this by using a "label" to point to the
            data rather than using the data itself. Any of the eight data types
            may be stored in a variable.
          </p>
          <p>
            Variables are similar to the x and y variables you use in
            mathematics, which means they're a simple name to represent the data
            we want to refer to. Computer variables differ from mathematical
            variables in that they can store different values at different
            times.
          </p>
          <p>
            We tell JavaScript to create or <i>declare</i> a variable by putting
            the keyword <Code>var</Code> in front of it, like so:
          </p>
          <Comment>var <span class="black">ourName;</span></Comment>
          <p>
            creates a variable called <Code>ourName</Code>. In JavaScript we end
            statements with semicolons. Variable names can be made up of
            numbers, letters, and <Code>$</Code> or <Code>_</Code>, but may not
            contain spaces or start with a number.
          </p>
          <hr />
          <p>
            Use the <Code>var</Code> keyword to create a variable called
            <Code>myName</Code>.
          </p>
          <h3><b>Hint</b></h3>
          <p>
            Look at the <Code>ourName</Code> example above if you get stuck.
          </p>
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                You should declare <Code>myName</Code> with the
                <Code>var</Code> keyword, ending with a semicolon
              </p>
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
