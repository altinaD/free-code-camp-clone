<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Comment Your Js Code</h1>
          <p>
            Comments are lines of code that JavaScript will intentionally
            ignore. Comments are a great way to leave notes to yourself and to
            other people who will later need to figure out what that code does.
          </p>
          <p>There are two ways to write comments in JavaScript:</p>
          <p>
            Using <Code>//</Code> will tell JavaScript to ignore the remainder
            of the text on the current line. This is an in-line comment:
          </p>
          <Comment>// This is an in-line comment.</Comment>
          <p>
            You can make a multi-line comment beginning with <Code>/*</Code> and
            ending with <Code>*/</Code>. This is a multi-line comment:
          </p>
          <Comment>/* This is a multi-line comment */</Comment>
          <p>
            <b>NOTE:</b> As you write code, you should regularly add comments to
            clarify the function of parts of your code. Good commenting can help
            communicate the intent of your code—both for others and for your
            future self.
          </p>
          <hr />
          <p>Try creating one of each type of comment.</p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                You should create a <Code>//</Code> style comment that contains
                at least five letters.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                You should create a <Code>/* */</Code> style comment that
                contains at least five letters.
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
