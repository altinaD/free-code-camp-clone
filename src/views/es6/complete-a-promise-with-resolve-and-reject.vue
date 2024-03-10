<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Complete a Promise with resolve and reject</h1>
          <p>
            A promise has three states: <Code>pending</Code>,
            <Code>fulfilled</Code>, and <Code>rejected</Code>. The promise you
            created in the last challenge is forever stuck in the
            <Code>pending</Code> state because you did not add a way to complete
            the promise. The <Code>resolve</Code> and
            <Code>reject</Code> parameters given to the promise argument are
            used to do this. <Code>resolve</Code> is used when you want your
            promise to succeed, and <Code>reject</Code> is used when you want it
            to fail. These are methods that take an argument, as seen below.
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">myPromise = </span>
            <span class="blue">new </span>
            <span class="red">Promise</span>
            <span class="black">((resolve, reject) => {</span>
            <div class="next"></div>
            <span class="tab blue">if</span>
            <span class="black">(condition here) {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="red">resolve</span>
            <span class="black">(</span>
            <span class="green">"Promise was fulfilled"</span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="tab black">} </span>
            <span class="blue">else </span>
            <span class="black">{</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="red">reject</span>
            <span class="black">(</span>
            <span class="green">"Promise was rejected"</span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="tab black">}</span>
            <div class="next"></div>
            <span class="black">});</span>
          </Comment>
          <p>
            The example above uses strings for the argument of these functions,
            but it can really be anything. Often, it might be an object, that
            you would use data from, to put on your website or elsewhere.
          </p>
          <hr />
          <p>
            Make the promise handle success and failure. If
            <Code>responseFromServer</Code> is <Code>true</Code>, call the
            <Code>resolve</Code> method to successfully complete the promise.
            Pass <Code>resolve</Code> a string with the value
            <Code>We got the data</Code>. If <Code>responseFromServer</Code> is
            <Code>false</Code>, use the <Code>reject</Code> method instead and
            pass it the string: <Code>Data not received</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>resolve</Code> should be called with the expected string
                when the <Code>if</Code> condition is <Code>true</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>reject</Code> should be called with the expected string
                when the <Code>if</Code> condition is <Code>false</Code>.
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
