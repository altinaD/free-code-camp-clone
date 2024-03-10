<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Import a Default Export</h1>
          <p>
            In the last challenge, you learned about
            <Code>export default</Code> and its uses. To import a default
            export, you need to use a different <Code>import</Code> syntax. In
            the following example, <Code>add</Code> is the default export of the
            <Code>math_functions.js</Code> file. Here is how to import it:
          </p>
          <Comment>
            <span class="blue">import </span>
            <span class="black">add </span>
            <span class="blue">from </span>
            <span class="green">"./math_functions.js"</span>
            <span class="black">;</span>
          </Comment>
          <p>
            The syntax differs in one key place. The imported value,
            <Code>add</Code>, is not surrounded by curly braces
            (<Code>{}</Code>). add here is simply a variable name for whatever
            the default export of the <Code>math_functions.js</Code> file is.
            You can use any name here when importing a default.
          </p>
          <hr />
          <p>
            In the following code, import the default export from the
            <Code>math_functions.js</Code> file, found in the same directory as
            this file. Give the import the name <Code>subtract</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Waiting:You should properly import <Code>subtract</Code> from
                <Code>math_functions.js</Code>.
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
