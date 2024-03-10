<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use Destructuring Assignment to Assign Variables from Objects</h1>
          <p>
            Destructuring allows you to assign a new variable name when
            extracting values. You can do this by putting the new name after a
            colon when assigning the value.
          </p>
          <p>Using the same object from the last example:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">user = {</span>
            <span class="red">name</span>
            <span class="black">: </span>
            <span class="green">'John Doe'</span>
            <span class="black">, </span>
            <span class="red">age</span>
            <span class="black">: </span>
            <span class="purple">34</span>
            <span class="black">};</span>
          </Comment>
          <p>Here's how you can give new variable names in the assignment:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">{ </span>
            <span class="red">name</span>
            <span class="black">: userName, </span>
            <span class="red">age</span>
            <span class="black">: userAge } = user;</span>
          </Comment>
          <p>
            You may read it as "get the value of <Code>user.name</Code> and
            assign it to a new variable named <Code>userName</Code> and so on.
            The value of userName would be the string <Code>John Doe</Code>, and
            the value of <Code>userAge</Code> would be the number
            <Code>34</Code>.
          </p>
          <hr />
          <p>
            Replace the two assignments with an equivalent destructuring
            assignment. It should still assign the variables
            <Code>highToday</Code> and <Code>highTomorrow</Code> the values of
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
                <Code>highToday</Code> variable.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should use destructuring to create the
                <Code>highTomorrow</Code>
                variable.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>highToday</Code> should be equal to <Code>77</Code> and
                <Code>highTomorrow</Code> should be equal to <Code>80</Code>.
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
