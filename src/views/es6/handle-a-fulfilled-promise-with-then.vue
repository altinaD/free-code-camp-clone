<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Handle a Fulfilled Promise with then</h1>
          <p>
            Promises are most useful when you have a process that takes an
            unknown amount of time in your code (i.e. something asynchronous),
            often a server request. When you make a server request it takes some
            amount of time, and after it completes you usually want to do
            something with the response from the server. This can be achieved by
            using the <Code>then</Code> method. The <Code>then</Code> method is
            executed immediately after your promise is fulfilled with
            <Code>resolve</Code>. Here’s an example:
          </p>
          <Comment>
            <span class="black">myPromise.</span>
            <span class="red">then</span>
            <span class="black">(result => {</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">});</span>
          </Comment>
          <p>
            <Code>result</Code> comes from the argument given to the
            <Code>resolve</Code> method.
          </p>
          <hr />
          <p>
            Add the <Code>then</Code> method to your promise. Use
            <Code>result</Code> as the parameter of its callback function and
            log <Code>result</Code> to the console.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                You should call the <Code>then</Code> method on the promise.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your <Code>then</Code> method should have a callback function
                with <Code>result</Code> as its parameter.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should log
                <Code>result</Code> to the console.
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
