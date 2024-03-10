<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Prevent Object Mutation</h1>
          <p>
            As seen in the previous challenge, <Code>const</Code> declaration
            alone doesn't really protect your data from mutation. To ensure your
            data doesn't change, JavaScript provides a function
            <Code>Object.freeze</Code> to prevent data mutation.
          </p>
          <p>
            Any attempt at changing the object will be rejected, with an error
            thrown if the script is running in strict mode.
          </p>
          <Comment>
            <span class="blue">let </span><span class="black">obj = {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">name: </span>
            <span class="black">:</span>
            <span class="green">"FreeCodeCamp"</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">review</span>
            <span class="black">:</span>
            <span class="green">"Awesome"</span>
            <div class="next"></div>
            <span class="black">};</span>
            <div class="next"></div>
            <span class="black">Object.</span>
            <span class="red">freeze</span>
            <span class="black">(obj);</span>
            <div class="next"></div>
            <span class="black">obj.review = </span>
            <span class="green">"bad"</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">obj.newProp = </span>
            <span class="green">"Test"</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(obj);</span>
          </Comment>
          <p>
            The <Code>obj.review</Code> and <Code>obj.newProp</Code> assignments
            will result in errors, because our editor runs in strict mode by
            default, and the console will display the value
            <Code>{ name: "FreeCodeCamp", review: "Awesome" }</Code>.
          </p>
          <hr />
          <p>
            In this challenge you are going to use <Code>Object.freeze</Code> to
            prevent mathematical constants from changing. You need to freeze the
            <Code>MATH_CONSTANTS</Code> object so that no one is able to alter
            the value of <Code>PI </Code>, add, or delete properties.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should not replace the <Code>const</Code> keyword.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>MATH_CONSTANTS</Code> should be a constant variable (by
                using <Code>const</Code>).
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should not change the original declaration of
                <Code>MATH_CONSTANTS</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>PI</Code> should equal <Code>3.14</Code>.</p>
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
