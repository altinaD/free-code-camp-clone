<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Find More Than the First Match</h1>
          <p>
            So far, you have only been able to extract or search a pattern once.
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">testStr = </span>
            <span class="green">"Repeat, Repeat, Repeat"</span>
            <span class="black">;</span>
            <span class="blue">let </span>
            <span class="black">ourRegex = </span>
            <span class="brown">/Repeat/</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">testStr.</span>
            <span class="red">match</span>
            <span class="black">(ourRegex);</span>
          </Comment>
          <p>Here <Code>match</Code> would return <Code>["Repeat"]</Code>.</p>
          <p>
            To search or extract a pattern more than once, you can use the
            global search flag: <Code>g</Code>.
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">repeatRegex = </span>
            <span class="brown">/Repeat/g</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">testStr.</span>
            <span class="red">match</span>
            <span class="black">(repeatRegex);</span>
          </Comment>
          <p>
            And here <Code>match</Code> returns the value
            <Code>["Repeat", "Repeat", "Repeat"]</Code>
          </p>
          <hr />
          <p>
            Using the regex <Code>starRegex</Code>, find and extract both
            <Code>Twinkle</Code> words from the string <Code>twinkleStar</Code>.
          </p>
          <p><b>Note</b></p>
          <p>
            You can have multiple flags on your regex like
            <Code>/search/gi</Code>
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>starRegex</Code> should use the global flag
                <Code>g</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>starRegex</Code> should use the case
                insensitive flag <Code>i</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your match should match both occurrences of the word
                <Code>Twinkle</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your match <Code>result</Code> should have two elements in it.
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
