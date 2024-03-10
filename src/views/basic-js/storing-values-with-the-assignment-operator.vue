<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Storing Values with the Assignment Operator</h1>
          <p>
            In JavaScript, you can store a value in a variable with the
            assignment operator (<Code>=</Code>).
          </p>
          <Comment><span class="black">myVariable</span> = 5;</Comment>
          <p>
            This assigns the <Code>Number</Code> value <Code>5</Code> to
            <Code>myVariable</Code>.
          </p>
          <p>
            If there are any calculations to the right of the
            <Code>=</Code> operator, those are performed before the value is
            assigned to the variable on the left of the operator.
          </p>
          <Comment
            >var <span class="black">myVar</span>;
            <div class="next"></div>
            <span class="black">myVar</span> = 5;</Comment
          >
          <p>
            First, this code creates a variable named <Code>myVar</Code>. Then,
            the code assigns <Code>5</Code> to <Code>myVar</Code>. Now, if
            <Code>myVar</Code> appears again in the code, the program will treat
            it as if it is <Code>5</Code>.
          </p>
          <hr />
          <p>Assign the value <Code>7</Code> to variable <Code>a</Code>.</p>
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
