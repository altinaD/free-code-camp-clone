<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Reuse JavaScript Code Using import</h1>
          <p>
            <Code>import</Code> allows you to choose which parts of a file or
            module to load. In the previous lesson, the examples exported
            <Code>add</Code> from the <Code>math_functions.js</Code> file.
            Here's how you can import it to use in another file:
          </p>
          <Comment>
            <span class="blue">import </span>
            <span class="black">{ add }</span>
            <span class="blue"> from </span>
            <span class="green">'./math_functions.js'</span>
            <span class="black">;</span>
          </Comment>
          <p>
            Here, <Code>import</Code> will find <Code>add</Code> in
            <Code>math_functions.js</Code>, import just that function for you to
            use, and ignore the rest. The <Code>./</Code> tells the import to
            look for the <Code>math_functions.js</Code> file in the same folder
            as the current file. The relative file path (<Code>./</Code>) and
            file extension (<Code>.js</Code>) are required when using import in
            this way.
          </p>
          <p>
            You can import more than one item from the file by adding them in
            the <Code>import</Code> statement like this:
          </p>
          <Comment>
            <span class="blue">import </span>
            <span class="black">{ add, subtract }</span>
            <span class="blue"> from </span>
            <span class="green">'./math_functions.js'</span>
            <span class="black">;</span>
          </Comment>
          <hr />
          <p>
            Add the appropriate <Code>import</Code> statement that will allow
            the current file to use the <Code>uppercaseString</Code> and
            <Code>lowercaseString</Code> functions you exported in the previous
            lesson. These functions are in a file called
            <Code>string_functions.js</Code>, which is in the same directory as
            the current file.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should properly import <Code>uppercaseString</Code>.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should properly import <Code>lowercaseString</Code>.</p>
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
