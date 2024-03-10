<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Write Concise Declarative Functions with ES6</h1>
          <p>
            When defining functions within objects in ES5, we have to use the
            keyword <Code>function</Code> as follows:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">person = {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">name</span>
            <span class="black">: </span>
            <span class="green">"Taylor"</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">sayHello</span>
            <span class="black">: </span>
            <span class="blue">function</span>
            <span class="black">() {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="blue">return </span>
            <span class="green">`Hello! My name is `</span>
            <span class="black">${ </span>
            <span class="blue">this</span>
            <span class="black">.name }. `;</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">};</span>
          </Comment>
          <p>
            With ES6, you can remove the <Code>function</Code> keyword and colon
            altogether when defining functions in objects. Here's an example of
            this syntax:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">person = {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">name</span>
            <span class="black">: </span>
            <span class="green">"Taylor"</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">sayHello</span>
            <span class="black">() {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="blue">return </span>
            <span class="green">`Hello! My name is `</span>
            <span class="black">${ </span>
            <span class="blue">this</span>
            <span class="black">.name }. `;</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">};</span>
          </Comment>
          <hr />
          <p>
            Refactor the function setGear inside the object bicycle to use the
            shorthand syntax described above.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>Traditional function expression should not be used.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>setGear</Code> should be a declarative function.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>bicycle.setGear(48)</Code> should change the
                <Code>gear</Code> value to 48.
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
