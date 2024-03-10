<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use Dot Notation to Access the Properties of an Object</h1>
          <p>
            The last challenge created an object with various properties. Now
            you'll see how to access the values of those properties. Here's an
            example:
          </p>

          <Comment>
            <span class="blue">let </span>
            <span class="black">duck = {</span>
            <div class="next"></div>
            <span class="tab red">name</span>
            <span class="black">: </span>
            <span class="green">"Aflac"</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab red">numLegs</span>
            <span class="black">: </span>
            <span class="purple">2</span>
            <div class="next"></div>
            <span class="black">};</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(duck.name);</span>
          </Comment>
          <p>
            Dot notation is used on the object name, <Code>duck</Code>, followed
            by the name of the property, <Code>name</Code>, to access the value
            of <Code>Aflac</Code>.
          </p>
          <hr />
          <p>
            Print both properties of the <Code>dog</Code> object to your
            console.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Your code should use <Code>console.log</Code> to print the value
                for the <Code>name</Code> property of the
                <Code>dog</Code> object.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your code should use <Code>console.log</Code> to print the value
                for the <Code>numLegs</Code> property of the
                <Code>dog</Code> object.
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
