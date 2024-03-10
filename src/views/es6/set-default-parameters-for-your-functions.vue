<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Set Default Parameters for Your Functions</h1>
          <p>
            In order to help us create more flexible functions, ES6 introduces
            <i>default parameters</i> for functions.
          </p>
          <p>Check out this code:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">greeting = (name = </span>
            <span class="green">"Anonymous"</span>
            <span class="black">) => </span>
            <span class="green">"Hello " </span>
            <span class="black">+ name;</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="red">greeting</span>
            <span class="black">(</span>
            <span class="green">"John"</span>
            <span class="black">));</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="red">greeting</span>
            <span class="black">());</span>
          </Comment>
          <p>
            The console will display the strings <Code>Hello John</Code> and
            <Code>Hello Anonymous</Code>.
          </p>
          <p>
            The default parameter kicks in when the argument is not specified
            (it is undefined). As you can see in the example above, the
            parameter <Code>name</Code> will receive its default value
            <Code>Anonymous</Code> when you do not provide a value for the
            parameter. You can add default values for as many parameters as you
            want.
          </p>
          <hr />
          <p>
            Modify the function <Code>increment</Code> by adding default
            parameters so that it will add 1 to <Code>number</Code> if
            <Code>value</Code> is not specified.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                The result of <Code>increment(5, 2)</Code> should be
                <Code>7</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                The result of <Code>increment(5)</Code> should be
                <Code>6</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                A default parameter value of <Code>1</Code> should be used for
                <Code>value</Code>.
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
