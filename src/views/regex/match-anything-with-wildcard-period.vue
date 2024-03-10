<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Destructuring via rest elements</h1>
          <hr />
          <p></p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>removeFirstTwo([1, 2, 3, 4, 5])</Code> should be
                <Code>[3, 4, 5]</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>removeFirstTwo()</Code> should not modify
                <Code>list</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>Array.slice()</Code> should not be used.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should use the rest syntax.</p>
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
