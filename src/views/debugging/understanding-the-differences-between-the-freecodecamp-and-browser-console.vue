<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>
            Understanding the Differences between the freeCodeCamp and Browser
            Console
          </h1>
          <p>
            You may have noticed that some freeCodeCamp challenges include their
            own console. This console behaves a little differently than the
            browser console.
          </p>
          <p>
            There are many methods to use with <Code>console</Code> to output
            messages. <Code>log</Code>, <Code>warn</Code>, and
            <Code>clear</Code> to name a few. The freeCodeCamp console will only
            output <Code>log</Code> messages, while the browser console will
            output all messages. When you make changes to your code, it will
            automatically run and show the logs. The freeCodeCamp console is
            then cleared each time your code runs.
          </p>
          <hr />
          <p>
            First, open your browser console so you can see the logs. To do
            that, you can right-click the freeCodeCamp navigation bar at the top
            and click <Code>inspect</Code> on most browsers. Then find the
            <Code>console</Code> tab in the window that opens.
          </p>
          <p>
            After that, use <Code>console.log</Code> to log the
            <Code>output</Code> variable. View the two consoles to see the log.
            Finally, use <Code>console.clear</Code> after your log to clear the
            browser console. View the difference in the two consoles.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                You should use <Code>console.log()</Code> to print the
                <Code>output</Code> variable.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should use <Code>console.clear()</Code> to clear the browser
                console.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should clear the console after your log.</p>
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
