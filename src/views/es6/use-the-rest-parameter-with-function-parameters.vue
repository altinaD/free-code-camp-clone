<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use the Rest Parameter with Function Parameters</h1>
          <p>
            In order to help us create more flexible functions, ES6 introduces
            the <i>rest parameter</i> for function parameters. With the rest
            parameter, you can create functions that take a variable number of
            arguments. These arguments are stored in an array that can be
            accessed later from inside the function.
          </p>
          <p>Check out this code:</p>
          <Comment>
            <span class="blue">function </span>
            <span class="red">howMany</span>
            <span class="black">(...args) {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="blue">return </span>
            <span class="green">"You have passed " </span>
            <span class="black">+ args.length + </span>
            <span class="green">" arguments." </span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="red">howMany</span>
            <span class="black">(</span>
            <span class="purple">0</span>
            <span class="black">, </span>
            <span class="purple">1</span>
            <span class="black">, </span>
            <span class="purple">2</span>
            <span class="black">));</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="red">howMany</span>
            <span class="black">(</span>
            <span class="green">"string"</span>
            <span class="black">, </span>
            <span class="blue">null</span>
            <span class="black">, [</span>
            <span class="purple">1</span>
            <span class="black">, </span>
            <span class="purple">2</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black">], { }));</span>
          </Comment>
          <p>
            The console would display the strings
            <Code>You have passed 3 arguments.</Code> and
            <Code>You have passed 4 arguments.</Code>.
          </p>
          <p>
            The rest parameter eliminates the need to use the
            <Code>arguments</Code> object and allows us to use array methods on
            the array of parameters passed to the function <Code>howMany</Code>.
          </p>
          <hr />
          <p>
            Modify the function <Code>sum</Code> using the rest parameter in
            such a way that the function <Code>sum</Code> is able to take any
            number of arguments and return their sum.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>The result of <Code>sum(0,1,2)</Code> should be 3</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>The result of <Code>sum(1,2,3,4)</Code> should be 10</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>The result of <Code>sum(5)</Code> should be 5</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>The result of <Code>sum()</Code> should be 0</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>sum</Code> should be an arrow function which uses the rest
                parameter syntax (<Code>...</Code>) on the
                <Code>args</Code> parameter.
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
