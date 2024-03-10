<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Match Literal Strings</h1>
          <p>
            In the last challenge, you searched for the word
            <Code>Hello</Code> using the regular expression
            <Code>/Hello/</Code>. That regex searched for a literal match of the
            string <Code>Hello</Code>. Here's another example searching for a
            literal match of the string <Code>Kevin</Code>:
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">testStr = </span>
            <span class="green">"Hello, my name is Kevin."</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="blue">let </span>
            <span class="black">testRegex = </span>
            <span class="brown">/Kevin/</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">testRegex.</span>
            <span class="red">test</span>
            <span class="black">(testStr);</span>
          </Comment>
          <p>This <Code>test</Code> call will return <Code>true</Code>.</p>
          <p>
            Any other forms of <Code>Kevin</Code> will not match. For example,
            the regex <Code>/Kevin/</Code> will not match <Code>kevin</Code> or
            <Code>KEVIN</Code>.
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">wrongRegex = </span>
            <span class="brown">/kevin/</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">wrongRegex.</span>
            <span class="red">test</span>
            <span class="black">(testStr);</span>
          </Comment>
          <p>This <Code>test</Code> call will return <Code>false</Code>.</p>
          <p>
            A future challenge will show how to match those other forms as well.
          </p>
          <hr />
          <p>
            Complete the regex <Code>waldoRegex</Code> to find
            <Code>"Waldo"</Code> in the string <Code>waldoIsHiding</Code> with a
            literal match.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>waldoRegex</Code> should find the string
                <Code>Waldo</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>waldoRegex</Code> should not search for
                anything else.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Waiting:You should perform a literal string match with your
                regex.
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
