<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Understanding Case Sensitivity in Variables</h1>
          <p>
            In JavaScript all variables and function names are case sensitive.
            This means that capitalization matters.
          </p>
          <p>
            <Code>MYVAR</Code> is not the same as <Code>MyVar</Code> nor
            <Code>myvar</Code>. It is possible to have multiple distinct
            variables with the same name but different casing. It is strongly
            recommended that for the sake of clarity, you do not use this
            language feature.
          </p>
          <p><b>Best Practice</b></p>
          <p>
            Write variable names in JavaScript in camelCase. In camelCase,
            multi-word variable names have the first word in lowercase and the
            first letter of each subsequent word is capitalized.
          </p>
          <p><b>Examples: </b></p>
          <Comment
            >var <span class="black">someVariable</span>; <br />
            <br />
            var <span class="black">anotherVariableName</span>; <br />
            <br />
            var <span class="black">thisVariableNameIsSoLong</span>;</Comment
          >
          <hr />
          <p>
            Modify the existing declarations and assignments so their names use
            <i>camelCase</i>.
          </p>
          <p>Do not create any new variables.</p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should not change code above the specified comment.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>a should have a value of <Code>7</Code>.</p>
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
