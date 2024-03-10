<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Explore Differences Between the var and let Keywords</h1>
          <p>
            One of the biggest problems with declaring variables with the
            <Code>var</Code>
            keyword is that you can easily overwrite variable declarations:
          </p>
          <Comment
            >var <span class="black">camper</span> =
            <span class="green">"James"</span>;
            <div class="next"></div>
            var <span class="black">camper</span> =
            <span class="green">"David"</span>;
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(camper);</span>
          </Comment>
          <p>
            In the code above, the <Code>camper</Code> variable is originally
            declared as <Code>James</Code>, and is then overridden to be
            <Code>David</Code>. The console then displays the string
            <Code>David</Code>.
          </p>
          <p>
            In a small application, you might not run into this type of problem.
            But as your codebase becomes larger, you might accidentally
            overwrite a variable that you did not intend to. Because this
            behavior does not throw an error, searching for and fixing bugs
            becomes more difficult.
          </p>
          <p>
            A keyword called <Code>let</Code> was introduced in ES6, a major
            update to JavaScript, to solve this potential issue with the
            <Code>var</Code> keyword. You'll learn about other ES6 features in
            later challenges.
          </p>
          <p>
            If you replace <Code>var</Code> with <Code>let</Code> in the code
            above, it results in an error:
          </p>

          <Comment
            >var <span class="black">camper</span> =
            <span class="green">"James"</span>;
            <div class="next"></div>
            var <span class="black">camper</span> =
            <span class="green">"David"</span>; <br />
          </Comment>
          <p>The error can be seen in your browser console.</p>
          So unlike <Code>var</Code>, when you use <Code>let</Code>, a variable
          with the same name can only be declared once.
          <hr />
          <p>Update the code so it only uses the <Code>let</Code> keyword.</p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>var</Code> should not exist in the code.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>catName</Code> should be the string <Code>Oliver.</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>catSound</Code> should be the string <Code>Meow!</Code>
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
