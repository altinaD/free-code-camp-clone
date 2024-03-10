<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Catch Misspelled Variable and Function Names</h1>
          <p>
            The <Code>console.log()</Code> and <Code>typeof</Code> methods are
            the two primary ways to check intermediate values and types of
            program output. Now it's time to get into the common forms that bugs
            take. One syntax-level issue that fast typers can commiserate with
            is the humble spelling error.
          </p>
          <p>
            Transposed, missing, or miscapitalized characters in a variable or
            function name will have the browser looking for an object that
            doesn't exist - and complain in the form of a reference error.
            JavaScript variable and function names are case-sensitive.
          </p>
          <hr />
          <p>
            Fix the two spelling errors in the code so the
            <Code>netWorkingCapital</Code>
            calculation works.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Check the spelling of the two variables used in the
                netWorkingCapital calculation, the console output should show
                that "Net working capital is: 2".
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                There should be no instances of misspelled variables in the
                code.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                The <Code>receivables</Code> variable should be declared and
                used properly in the code.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                There should be no instances of misspelled variables in the
                code.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                The <Code>payables</Code> variable should be declared and used
                properly in the code.
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
