<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Create a JavaScript Promise</h1>
          <p>
            A promise in JavaScript is exactly what it sounds like - you use it
            to make a promise to do something, usually asynchronously. When the
            task completes, you either fulfill your promise or fail to do so.
            <Code>Promise</Code> is a constructor function, so you need to use
            the <Code>new</Code> keyword to create one. It takes a function, as
            its argument, with two parameters - <Code>resolve</Code> and
            <Code>reject</Code>. These are methods used to determine the outcome
            of the promise. The syntax looks like this:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">myPromise = </span>
            <span class="blue">new </span>
            <span class="red">Promise</span>
            <span class="black">((resolve, reject) => {</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">});</span>
          </Comment>
          <hr />
          <p>
            Create a new promise called <Code>makeServerRequest</Code>. Pass in
            a function with <Code>resolve</Code> and
            <Code>reject</Code> parameters to the constructor.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                You should assign a promise to a declared variable named
                <Code>makeServerRequest</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your promise should receive a function with
                <Code>resolve</Code> and <Code>reject</Code> as parameters.
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
