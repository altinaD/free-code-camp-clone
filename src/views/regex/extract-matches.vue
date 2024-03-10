<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Extract Matches</h1>
          <p>
            So far, you have only been checking if a pattern exists or not
            within a string. You can also extract the actual matches you found
            with the <Code>.match()</Code> method.
          </p>
          <p>
            To use the <Code>.match()</Code> method, apply the method on a
            string and pass in the regex inside the parentheses.
          </p>
          <p>Here's an example:</p>
          <Comment>
            <span class="green">"Hello, World!"</span>
            <span class="black">.</span>
            <span class="red">match</span>
            <span class="black">(</span>
            <span class="brown">/Hello/</span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="blue">let </span>
            <span class="black">ourStr = </span>
            <span class="green">"Regular expressions"</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="blue">let </span>
            <span class="black">ourRegex = </span>
            <span class="brown">/expressions/</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">ourStr.</span>
            <span class="red">match</span>
            <span class="black">(ourRegex);</span>
          </Comment>
          <p>
            Here the first <Code>match</Code> would return
            <Code>["Hello"]</Code> and the second would return
            <Code>["expressions"]</Code>.
          </p>
          <p>
            Note that the <Code>.match</Code> syntax is the "opposite" of the
            <Code>.test</Code> method you have been using thus far:
          </p>
          <Comment>
            <span class="green">'string'</span>
            <span class="black">.</span>
            <span class="red">match</span>
            <span class="black">(</span>
            <span class="brown">/regex/</span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="brown">/regex/</span>
            <span class="black">.</span>
            <span class="red">test</span>
            <span class="black">(</span>
            <span class="green">'string'</span>
            <span class="black">);</span>
          </Comment>
          <hr />
          <p>
            Apply the <Code>.match()</Code> method to extract the string
            <Code>coding</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                The <Code>result</Code> should have the string
                <Code>coding</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>codingRegex</Code> should search for the string
                <Code>coding</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should use the <Code>.match()</Code> method.</p>
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
