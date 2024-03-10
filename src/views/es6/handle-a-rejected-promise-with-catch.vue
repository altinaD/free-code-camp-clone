<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Handle a Rejected Promise with catch</h1>
          <p>
            <Code>catch</Code> is the method used when your promise has been
            rejected. It is executed immediately after a promise's
            <Code>reject</Code> method is called. Here’s the syntax:
          </p>
          <Comment>
            <span class="black">myPromise.</span>
            <span class="red">catch</span>
            <span class="black">(error => {</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">});</span>
          </Comment>
          <p>
            <Code>error</Code> is the argument passed in to the
            <Code>reject</Code> method.
          </p>
          <hr />
          <p>
            Add the <Code>catch</Code> method to your promise. Use
            <Code>error</Code> as the parameter of its callback function and log
            <Code>error</Code> to the console.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                You should call the <Code>catch</Code> method on the promise.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your <Code>catch</Code> method should have a callback function
                with <Code>error</Code> as its parameter.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should log <Code>error</Code> to the console.</p>
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
