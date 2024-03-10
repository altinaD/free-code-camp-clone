<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Learn About Functional Programming</h1>
          <p>
            Functional programming is a style of programming where solutions are
            simple, isolated functions, without any side effects outside of the
            function scope: <Code>INPUT -> PROCESS -> OUTPUT</Code>
          </p>
          <p>Functional programming is about:</p>
          <ol class="numeral-lists">
            <li>
              Isliated functions - there is no dependence on the state of the
              program, which includes global variables that are subject to
              change
            </li>
            <li>
              Pure functions - the same input always gives the same output
            </li>
            <li>
              Functions with limited side effects - any changes, or mutations,
              to the state of the program outside the function are carefully
              contrliled
            </li>
          </ol>
          <hr />
          <p>The members of freeCodeCamp happen to love tea.</p>
          <p>
            In the code editor, the <Code>prepareTea</Code> and
            <Code>getTea</Code> functions are already defined for you. Call the
            <Code>getTea</Code> function to get 40 cups of tea for the team, and
            store them in the <Code>tea4TeamFCC</Code> variable.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                The <Code>tea4TeamFCC</Code> variable should hold 40 cups of tea
                for the team.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                The <Code>tea4TeamFCC</Code> variable should hold cups of green
                tea.
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

<style scoped>
.numeral-lists li {
  list-style-type: decimal;
  list-style-position: inside;
  padding: 7px 0;
}
</style>
