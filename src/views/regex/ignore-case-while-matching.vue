<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Ignore Case While Matching</h1>
          <p>
            Up until now, you've looked at regexes to do literal matches of
            strings. But sometimes, you might want to also match case
            differences.
          </p>
          <p>
            Case (or sometimes letter case) is the difference between uppercase
            letters and lowercase letters. Examples of uppercase are
            <Code>A</Code>, <Code>B</Code>, and <Code>C</Code>. Examples of
            lowercase are <Code>a</Code>, <Code>b</Code>, and <Code>c</Code>.
          </p>
          <p>
            You can match both cases using what is called a flag. There are
            other flags but here you'll focus on the flag that ignores case -
            the <Code>i</Code> flag. You can use it by appending it to the
            regex. An example of using this flag is <Code>/ignorecase/i</Code>.
            This regex can match the strings <Code>ignorecase</Code>,
            <Code>igNoreCase</Code>, and <Code>IgnoreCase</Code>.
          </p>
          <hr />
          <p>
            Write a regex <Code>fccRegex</Code> to match
            <Code>freeCodeCamp</Code>, no matter its case. Your regex should not
            match any abbreviations or variations with spaces.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Your regex should match the string <Code>freeCodeCamp</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex should match the string <Code>FreeCodeCamp</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex should match the string <Code>FreeCodecamp</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex should match the string <Code>FreecodeCamp</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex should not match the string
                <Code>Free Code Camp</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex should match the string <Code>FreeCOdeCamp</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>Your regex should not match the string <Code>FCC</Code></p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex should match the string <Code>FrEeCoDeCamp</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex should match the string <Code>FrEeCodECamp</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex should match the string <Code>FrEeCodeCAmp</Code>
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
