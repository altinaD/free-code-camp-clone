<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Declare String Variables</h1>
          <p>Previously you used the following code to declare a variable:</p>
          <Comment>var <span class="black">myName</span>;</Comment>
          <p>But you can also declare a string variable like this:</p>
          <Comment>var <Code>myName</Code> = "your name";</Comment>
          <p>
            <Code>"your name"</Code> is called a string literal. A string
            literal, or string, is a series of zero or more characters enclosed
            in single or double quotes.
          </p>
          <hr />
          <p>
            Create two new string variables: <Code>myFirstName</Code> and
            <Code>myLastName</Code> and assign them the values of your first and
            last name, respectively.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>myFirstName</Code> should be a string with at least one
                character in it.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>myLastName</Code> should be a string with at least one
                character in it.
              </p>
            </li>
          </ul>
        </LeftScreen>
      </div>
      <RightScreen @resize-width="changeWidth">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          doloremque.
        </p>
      </RightScreen>
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
