<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use Arrow Functions to Write Concise Anonymous Functions</h1>
          <p>
            In JavaScript, we often don't need to name our functions, especially
            when passing a function as an argument to another function. Instead,
            we create inline functions. We don't need to name these functions
            because we do not reuse them anywhere else.
          </p>
          <p>To achieve this, we often use the following syntax:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">myFunc </span>
            <span class="black">= </span>
            <span class="blue">function</span>
            <span class="black">() {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="blue">const </span>
            <span class="black">myVar = </span>
            <span class="green">"value"</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="blue">return </span>
            <span class="black">myVar;</span>
            <div class="next"></div>
            <span class="black">}</span>
          </Comment>
          <p>
            ES6 provides us with the syntactic sugar to not have to write
            anonymous functions this way. Instead, you can use
            <b>arrow function syntax:</b>
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">myFunc </span>
            <span class="black">= () => {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="blue">const </span>
            <span class="black">myVar = </span>
            <span class="green">"value"</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="blue">return </span>
            <span class="black">myVar;</span>
            <div class="next"></div>
            <span class="black">}</span>
          </Comment>
          <p>
            When there is no function body, and only a return value, arrow
            function syntax allows you to omit the keyword
            <Code>return</Code> as well as the brackets surrounding the code.
            This helps simplify smaller functions into one-line statements:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">myFunc</span>
            <span class="black">= () => </span>
            <span class="green">"value"</span>
            <span class="black">;</span>
          </Comment>
          <p>
            This code will still return the string <Code>value</Code> by
            default.
          </p>
          <hr />
          <p>
            Rewrite the function assigned to the variable
            <Code>magic</Code> which returns a <Code>new Date()</Code> to use
            arrow function syntax. Also, make sure nothing is defined using the
            keyword <Code>var</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should replace the <Code>var</Code> keyword.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>magic</Code> should be a constant variable (by using
                <Code>const</Code>).
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>magic</Code> should be a
                <Code>function</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>magic</Code> should return the correct date.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>The <Code>function</Code> keyword should not be used;</p>
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
