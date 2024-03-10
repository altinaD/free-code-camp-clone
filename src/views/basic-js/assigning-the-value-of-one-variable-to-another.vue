<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Assigning the Value of One Variable to Another</h1>
          <p>
            After a value is assigned to a variable using the assignment
            operator, you can assign the value of that variable to another
            variable using the <i>assignment</i> operator.
          </p>
          <Comment
            >var <span class="black">myVar</span>;
            <div class="next"></div>
            <span class="black">myVar</span> = 5;
            <div class="next"></div>
            var <span class="black">myVar</span>;
            <div class="next"></div>
            <span class="black">myVar</span> = <span class="black">myVar</span>;
          </Comment>
          <p>
            The above declares a <Code>myVar</Code> variable with no value, then
            assigns it the value <Code>5</Code>. Next, a variable named
            <Code>myNum</Code> is declared with no value. Then, the contents of
            <Code>myVar</Code> (which is <Code>5</Code>) is assigned to the
            variable <Code>myNum</Code>. Now, <Code>myNum</Code> also has the
            value of <Code>5</Code>.
          </p>
          <hr />
          <p>
            Assign the contents of <Code>a</Code> to variable <Code>b</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>You should not change code above the specified comment.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>b</Code> should have a value of <Code>7</Code>.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>a</Code> should be assigned to <Code>b</Code> with
                <Code>=</Code>.
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
