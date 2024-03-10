<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Create a Module Script</h1>
          <p>
            JavaScript started with a small role to play on an otherwise mostly
            HTML web. Today, it’s huge, and some websites are built almost
            entirely with JavaScript. In order to make JavaScript more modular,
            clean, and maintainable; ES6 introduced a way to easily share code
            among JavaScript files. This involves exporting parts of a file for
            use in one or more other files, and importing the parts you need,
            where you need them. In order to take advantage of this
            functionality, you need to create a script in your HTML document
            with a <Code>type</Code> of <Code>module</Code>. Here’s an example:
          </p>
          <Comment>
            <span class="black">&lt;</span>
            <span class="red">script </span>
            <span class="green">type</span>
            <span class="black">="</span>
            <span class="blue">module</span>
            <span class="black">" </span>
            <span class="green">src</span>
            <span class="black">="</span>
            <span class="blue">filename.js</span>
            <span class="black">"&gt;&lt;/</span>
            <span class="red">script</span>
            <span class="black">&gt;</span>
          </Comment>
          <p>
            A script that uses this <Code>module</Code> type can now use the
            <Code>import</Code> and <Code>export</Code> features you will learn
            about in the upcoming challenges.
          </p>
          <hr />
          <p>
            Add a script to the HTML document of type <Code>module</Code> and
            give it the source file of <Code>index.js</Code>
          </p>
          <hr />
          <tests />
          <h1>Tests</h1>
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should create a <Code>script</Code> tag.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your <Code>script</Code> tag should have the
                <Code>type</Code> attribute with a value of <Code>module</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your <Code>script</Code> tag should have a <Code>src</Code> of
                <Code>index.js</Code>
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

<style scoped>
.tests {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.test {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding: 5px 10px;
}
.test:nth-child(2n + 1) {
  background-color: #dfdfe2;
}
.test p {
  margin: 0;
  margin-left: 20px;
}

.arrow-down {
  min-width: 15px;
  min-height: 15px;
  width: 15px;
  height: 15px;
  display: inline;
  vertical-align: middle;
}

.left-screen .test-status-icon {
  stroke: #fff;
  width: 40px;
  height: 40px;
}

span.black {
  color: #000;
}
span.red {
  color: #992900;
}
span.green {
  color: #008040;
}
span.blue {
  color: #2574a9;
}
span.purple {
  color: #9932cc;
}
</style>
