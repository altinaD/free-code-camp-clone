<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>
            Use Destructuring Assignment to Pass an Object as a Function's
            Parameters
          </h1>
          <p>
            In some cases, you can destructure the object in a function argument
            itself.
          </p>
          <p>Consider the code below:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">profileUpdate </span>
            <span class="black">= (profileData) => {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="blue">const </span>
            <span class="black"
              >{ name, age, nationality, location } = profileData;
            </span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">}</span>
          </Comment>
          <p>
            This effectively destructures the object sent into the function.
            This can also be done in-place:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">profileUpdate </span>
            <span class="black"
              >= ({ name, age, nationality, location }) => {</span
            >
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">}</span>
          </Comment>
          <p>
            When <Code>profileData</Code> is passed to the above function, the
            values are destructured from the function parameter for use within
            the function.
          </p>
          <hr />
          <p>
            Use destructuring assignment within the argument to the function
            <Code>half</Code> to send only <Code>max</Code> and
            <Code>min</Code> inside the function.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>stats</Code> should be an <Code>object</Code>.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>half(stats)</Code> should be <Code>28.015</Code></p>
            </li>
            <li class="test">
              <tests-initial />
              <p>Destructuring should be used.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>Destructuring parameter should be used.</p>
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
