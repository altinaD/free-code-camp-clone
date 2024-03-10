<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use Destructuring Assignment to Extract Values from Objects</h1>
          <p>
            Destructuring assignment is special syntax introduced in ES6, for
            neatly assigning values taken directly from an object.
          </p>
          <p>Consider the following ES5 code:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">user = { </span>
            <span class="red">name</span>
            <span class="black">: '</span>
            <span class="green">John Doe</span>
            <span class="black">', </span>
            <span class="red">age</span>
            <span class="black">: </span>
            <span class="purple">34 </span>
            <span class="black">};</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="blue">const </span>
            <span class="black">name = user.name;</span>
            <div class="next"></div>
            <span class="blue">const </span>
            <span class="black">age = user.age;</span>
          </Comment>
          <p>
            <Code>name</Code> would have a value of the string
            <Code>John Doe</Code>, and <Code>age</Code> would have the number
            <Code>34</Code>.
          </p>
          <p>
            Here's an equivalent assignment statement using the ES6
            destructuring syntax:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">{ name, age } = user;</span>
          </Comment>
          <p>
            Again, <Code>name</Code> would have a value of the string
            <Code>John Doe</Code>, and <Code>age</Code> would have the number
            <Code>34</Code>.
          </p>
          <p>
            Here, the <Code>name</Code> and <Code>age</Code> variables will be
            created and assigned the values of their respective values from the
            <Code>user</Code> object. You can see how much cleaner this is.
          </p>
          <p>
            You can extract as many or few values from the object as you want.
          </p>
          <hr />
          <p>
            Replace the two assignments with an equivalent destructuring
            assignment. It should still assign the variables
            <Code>today</Code> and <Code>tomorrow</Code> the values of
            <Code>today</Code> and <Code>tomorrow</Code> from the
            <Code>HIGH_TEMPERATURES</Code> object.
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
                <Code>today</Code> variable.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should use destructuring to create the
                <Code>tomorrow</Code> variable.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>today</Code> should be equal to <Code>77</Code> and
                <Code>tomorrow</Code> should be equal to 80.
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
