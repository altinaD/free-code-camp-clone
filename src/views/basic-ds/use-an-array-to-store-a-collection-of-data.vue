<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use an Array to Store a Collection of Data</h1>
          <p>
            The below is an example of the simplest implementation of an array
            data structure. This is known as a <i>one-dimensional</i> array,
            meaning it only has one level, or that it does not have any other
            arrays nested within it. Notice it contains
            <i>booleans, strings</i>, and <i>numbers</i>, among other valid
            JavaScript data types:
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">simpleArray = [</span>
            <span class="green">'one', </span>
            <span class="purple">2, </span>
            <span class="green">'three', </span>
            <span class="blue">true, false, undefined, null</span>
            <span class="black">];</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(simpleArray.length);</span>
          </Comment>
          <p>The <Code>console.log</Code> call displays <Code>7</Code>.</p>
          <p>
            All arrays have a length property, which as shown above, can be very
            easily accessed with the syntax <Code>Array.length</Code>. A more
            complex implementation of an array can be seen below. This is known
            as a multi-dimensional array, or an array that contains other
            arrays. Notice that this array also contains JavaScript objects,
            which we will examine very closely in our next section, but for now,
            all you need to know is that arrays are also capable of storing
            complex objects.
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">complexArray = [</span>
            <div class="next"></div>
            <span class="tab black">[</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="black">{</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span>
            <span class="red">one</span>
            <span class="black">: </span>
            <span class="purple">1</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span>
            <span class="red">two</span>
            <span class="black">: </span>
            <span class="purple">2</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="black">},</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="black">{</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span>
            <span class="red">three</span>
            <span class="black">: </span>
            <span class="purple">3</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span>
            <span class="red">four</span>
            <span class="black">: </span>
            <span class="purple">4</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="tab black">],</span>
            <div class="next"></div>
            <span class="tab black">[</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="black">{</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span>
            <span class="red">a</span>
            <span class="black">: </span>
            <span class="purple">"a"</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span>
            <span class="red">b</span>
            <span class="black">: </span>
            <span class="purple">"b"</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="black">},</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="black">{</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span>
            <span class="red">c</span>
            <span class="black">: </span>
            <span class="purple">"c"</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span>
            <span class="red">d</span>
            <span class="black">: </span>
            <span class="purple">"d"</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="tab black">]</span>
            <div class="next"></div>
            <span class="black">];</span>
          </Comment>
          <hr />
          <p>
            We have defined a variable called <Code>yourArray</Code>. Complete
            the statement by assigning an array of at least 5 elements in length
            to the <Code>yourArray</Code> variable. Your array should contain at
            least one <i>string</i>, one <i>number</i>, and one <i>boolean</i>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>yourArray</Code> should be an array.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>yourArray</Code> should be at least 5 elements long.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>yourArray</Code> should contain at least one
                <Code>boolean</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>yourArray</Code> should contain at least one
                <Code>number</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>yourArray</Code> should contain at least one
                <Code>string</Code>.
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

<style scoped>
span {
  font-size: 1.2rem;
}
</style>
