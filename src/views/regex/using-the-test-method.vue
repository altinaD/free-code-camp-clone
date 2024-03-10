<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Using the Test Method</h1>
          <p>
            Regular expressions are used in programming languages to match parts
            of strings. You create patterns to help you do that matching.
          </p>
          <p>
            If you want to find <Code>the</Code> word the in the string
            <Code>The dog chased the cat</Code>, you could use the following
            regular expression: <Code>/the/</Code>. Notice that quote marks are
            not required within the regular expression.
          </p>
          <p>
            JavaScript has multiple ways to use regexes. One way to test a regex
            is using the <Code>.test()</Code> method. The
            <Code>.test()</Code> method takes the regex, applies it to a string
            (which is placed inside the parentheses), and returns
            <Code>true</Code> or <Code>false</Code> if your pattern finds
            something or not.
          </p>
          <Comment>
            <span class="green">let </span>
            <span class="black">testStr = </span>
            <span class="green">"freeCodeCamp"</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="green">let </span>
            <span class="black">testRegex = </span>
            <span class="brown">/Code/</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">testRegex.</span>
            <span class="red">test</span>
            <span class="black">(testStr);</span>
          </Comment>
          <p>The <Code>test</Code> method here returns <Code>true</Code>.</p>
          <hr />
          <p>
            Apply the regex <Code>myRegex</Code> on the string
            <Code>myString</Code> using the <Code>.test()</Code> method.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should use <Code>.test()</Code> to test the regex.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>Your result should return <Code>true</Code>.</p>
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
