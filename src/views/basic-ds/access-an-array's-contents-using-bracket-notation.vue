<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Access an Array's Contents Using Bracket Notation</h1>
          <p>
            The fundamental feature of any data structure is, of course, the
            ability to not only store data, but to be able to retrieve that data
            on command. So, now that we've learned how to create an array, let's
            begin to think about how we can access that array's information.
          </p>
          <p>
            When we define a simple array as seen below, there are 3 items in
            it:
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">ourArray = [ </span>
            <span class="green">"a"</span>
            <span class="black">, </span>
            <span class="green">"b"</span>
            <span class="black">, </span>
            <span class="green">"c" </span>
            <span class="black">];</span>
          </Comment>
          <p>
            In an array, each array item has an <Code>index</Code>. This index
            doubles as the position of that item in the array, and how you
            reference it. However, it is important to note, that JavaScript
            arrays are <Code>zero-indexed</Code>, meaning that the first element
            of an array is actually at the <b>zeroth</b> position, not the
            first. In order to retrieve an element from an array we can enclose
            an index in brackets and append it to the end of an array, or more
            commonly, to a variable which references an array object. This is
            known as <Code>bracket notation</Code>. For example, if we want to
            retrieve the <Code>a</Code> from <Code>ourArray</Code> and assign it
            to a variable, we can do so with the following code:
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">ourArray = ourArray[ </span>
            <span class="purple">0 </span>
            <span class="black">];</span>
          </Comment>
          <p>Now <Code>ourVariable</Code> has the value of <Code>a</Code>.</p>
          <p>
            In addition to accessing the value associated with an index, you can
            also set an index to a value using the same notation:
          </p>
          <Comment>
            <span class="black">ourArray[ </span>
            <span class="purple">1</span>
            <span class="black"> ] = </span>
            <span class="green">"not b anymore"</span>
            <span class="black">;</span>
          </Comment>
          <p>
            Using bracket notation, we have now reset the item at index 1 from
            the string <Code>b</Code>, to <Code>not b anymore</Code>. Now
            <Code>ourArray</Code> is <Code>["a", "not b anymore", "c"]</Code>.
          </p>
          <hr />
          <p>
            In order to complete this challenge, set the 2nd position (index
            <Code>1</Code>) of <Code>myArray</Code> to anything you want,
            besides the letter <Code>b</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>myArray[0]</Code> should be equal to the letter
                <Code>a</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>myArray[1]</Code> should not be equal to the letter
                <Code>b</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>myArray[2]</Code> should be equal to the letter
                <Code>c</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>myArray[3]</Code> should be equal to the letter
                <Code>d</Code>
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
