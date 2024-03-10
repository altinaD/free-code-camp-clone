<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Initializing Variables with the Assignment Operator</h1>
          <p>
            It is common to initialize a variable to an initial value in the
            same line as it is declared.
          </p>
          <Comment>var <span class="black">myVar</span> = 0;</Comment>
          <p>
            Creates a new variable called <Code>myVar</Code> and assigns it an
            initial value of <Code>0</Code>.
          </p>
          <hr />
          <p>
            Define a variable <Code>a</Code> with <Code>var</Code> and
            initialize it to a value of <Code>9</Code>.
          </p>

          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Waiting:You should initialize a to a value of <Code>9</Code>.
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
