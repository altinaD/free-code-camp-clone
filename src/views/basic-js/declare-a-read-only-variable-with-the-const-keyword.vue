<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Declare a Read-Only Variable with the const Keyword</h1>
          <p>
            The keyword <Code>let</Code> is not the only new way to declare
            variables. In ES6, you can also declare variables using the
            <Code>const</Code> keyword.
          </p>
          <p>
            <Code>const</Code> has all the awesome features that
            <Code>let</Code> has, with the added bonus that variables declared
            using <Code>const</Code> are read-only. They are a constant value,
            which means that once a variable is assigned with
            <Code>const</Code>, it cannot be reassigned:
          </p>
          <Comment
            ><span class="green">const</span> <span class="red">FAV_PET</span>
            <span class="green"> = "Cats";</span>
            <div class="next"></div>
            <span class="red">FAV_PET </span
            ><span class="green"> = "Dogs";</span></Comment
          >
          <p>
            The console will display an error due to reassigning the value of
            <Code>FAV_PET</Code>.
          </p>
          <p>
            You should always name variables you don't want to reassign using
            the <Code>const</Code> keyword. This helps when you accidentally
            attempt to reassign a variable that is meant to stay constant.
          </p>
          <p>
            <b>Note: </b>It is common for developers to use uppercase variable
            identifiers for immutable values and lowercase or camelCase for
            mutable values (objects and arrays). You will learn more about
            objects, arrays, and immutable and mutable values in later
            challenges. Also in later challenges, you will see examples of
            uppercase, lowercase, or camelCase variable identifiers.
          </p>
          <hr />
          <p>
            Change the code so that all variables are declared using
            <Code>let</Code> or <Code>const</Code>. Use <Code>let</Code> when
            you want the variable to change, and <Code>const</Code> when you
            want the variable to remain constant. Also, rename variables
            declared with <Code>const</Code> to conform to common practices. Do
            not change the strings assigned to the variables.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>var</Code> should not exist in your code.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should change <Code>fCC</Code> to all uppercase.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>FCC</Code> should be a constant variable declared with
                <Code>const</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Waiting:The string assigned to <Code>FCC</Code> should not be
                changed.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>fact</Code> should be declared with <Code>let</Code>.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>console.log</Code> should be changed to print the
                <Code>FCC</Code> and <Code>fact</Code> variables.
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
