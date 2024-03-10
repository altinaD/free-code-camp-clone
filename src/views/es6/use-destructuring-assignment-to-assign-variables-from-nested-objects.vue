<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>
            Use Destructuring Assignment to Assign Variables from Nested Objects
          </h1>
          <p>
            You can use the same principles from the previous two lessons to
            destructure values from nested objects.
          </p>
          <p>Using an object similar to previous examples:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">use = {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">johnDoe</span>
            <span class="black">: {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="red">age</span>
            <span class="black">: </span>
            <span class="purple">34</span>
            <span class="black">, </span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="red">email</span>
            <span class="black">: </span>
            <span class="green">'johnDoe@freeCodeCamp.com'</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">};</span>
          </Comment>
          <p>
            Here's how to extract the values of object properties and assign
            them to variables with the same name:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">{ </span>
            <span class="red">johnDoe</span>
            <span class="black">: { age, email }} = user;</span>
          </Comment>
          <p>
            And here's how you can assign an object properties' values to
            variables with different names:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">{ </span>
            <span class="red">johnDoe</span>
            <span class="black">: { </span>
            <span class="red">age</span>
            <span class="black">: userAge, </span>
            <span class="red">email</span>
            <span class="black">: userEmail }} = user;</span>
          </Comment>
          <hr />
          <p>
            Replace the two assignments with an equivalent destructuring
            <Code>lowToday</Code> and <Code>highToday</Code> the values of
            <Code>today.low</Code> and <Code>today.high</Code> from the
            <Code>LOCAL_FORECAST</Code> object.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should remove the ES5 assignment syntax.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should use destructuring to create the
                <Code>lowToday</Code> variable.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should use destructuring to create the
                <Code>highToday</Code> variable.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>lowToday</Code> should be equal to <Code>64</Code> and
                <Code>highToday</Code> should be equal to <Code>77</Code>.
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
