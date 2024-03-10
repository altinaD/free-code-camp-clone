<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Create an Export Fallback with export default</h1>
          <p>
            In the <Code>export</Code> lesson, you learned about the syntax
            referred to as a named export. This allowed you to make multiple
            functions and variables available for use in other files.
          </p>
          <p>
            There is another <Code>export</Code> syntax you need to know, known
            as export default. Usually you will use this syntax if only one
            value is being exported from a file. It is also used to create a
            fallback value for a file or module.
          </p>
          <p>Below are examples using <Code>export default</Code>:</p>
          <Comment>
            <span class="blue">export default function </span>
            <span class="red">add</span>
            <span class="black">(x, y) {</span>
            <div class="next"></div>
            <span class="tab blue">return </span>
            <span class="black">x + y;</span>
            <div class="next"></div>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="blue">export default function</span>
            <span class="black">(x, y) {</span>
            <div class="next"></div>
            <span class="tab blue">return </span>
            <span class="black">x + y;</span>
            <div class="next"></div>
            <span class="black">}</span>
          </Comment>
          <p>
            The first is a named function, and the second is an anonymous
            function.
          </p>
          <p>
            Since <Code>export default</Code> is used to declare a fallback
            value for a module or file, you can only have one value be a default
            export in each module or file. Additionally, you cannot use
            <Code>export default</Code> with <Code>var</Code>, <Code>let</Code>,
            or <Code>const</Code>
          </p>
          <hr />
          <p>
            The following function should be the fallback value for the module.
            Please add the necessary code to do so.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>Your code should use an <Code>export</Code> fallback.</p>
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
