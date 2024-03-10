<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Divide One Number by Another with JavaScript</h1>
          <p>We can also divide one number by another.</p>
          <p>JavaScript uses the <Code>/</Code> symbol for division.</p>
          <p><b>Example: </b></p>
          <Comment
            ><span class="green">const </span>
            <span class="black"> myVar = </span>
            <span class="purple"> 16 </span>
            <span class="black"> / </span>
            <span class="purple"> 2;</span></Comment
          >
          <p><Code>myVar</Code> now has the value <Code>8</Code>.</p>
          <hr />
          <p>
            Change the <Code>0</Code> so that <Code>quotient</Code> is equal to
            <Code>2</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                The variable <Code>quotient</Code> should be equal
                <Code>2</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>You should use the <Code>/</Code> operator.</p>
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
