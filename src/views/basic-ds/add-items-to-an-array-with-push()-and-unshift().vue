<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Add Items to an Array with push() and unshift()</h1>
          <p>
            An array's length, like the data types it can contain, is not fixed.
            Arrays can be defined with a length of any number of elements, and
            elements can be added or removed over time; in other words, arrays
            are mutable. In this challenge, we will look at two methods with
            which we can programmatically modify an array:
            <Code>Array.push()</Code> and <Code>Array.unshift()</Code>.
          </p>
          <p>
            Both methods take one or more elements as parameters and add those
            elements to the array the method is being called on; the
            <Code>push()</Code> method adds elements to the end of an array, and
            <Code>unshift()</Code> adds elements to the beginning. Consider the
            following:
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">twentyThree = </span>
            <span class="green">'XXIII'</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="blue">let </span>
            <span class="black">romanNumerals = [ </span>
            <span class="green">'XXI', 'XXII'</span>
            <span class="black">];</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">romanNumerals.</span>
            <span class="red">unshift</span>
            <span class="black">( </span>
            <span class="green">'XIX', 'XX'</span>
            <span class="black">);</span>
          </Comment>
          <p>
            <Code>romanNumerals</Code> would have the value
            <Code>['XIX', 'XX', 'XXI', 'XXII']</Code>.
          </p>
          <Comment>
            <span class="black">romanNumerals.</span>
            <span class="red">push</span>
            <span class="black">(twentyThree);</span>
          </Comment>
          <p>
            <Code>romanNumerals</Code> would have the value
            <Code>['XIX', 'XX', 'XXI', 'XXII', 'XXIII']</Code>. Notice that we
            can also pass variables, which allows us even greater flexibility in
            dynamically modifying our array's data.
          </p>
          <hr />
          <p>
            We have defined a function, <Code>mixedNumbers</Code>, which we are
            passing an array as an argument. Modify the function by using
            <Code>push()</Code> and <Code>unshift()</Code> to add
            <Code>'I', 2, 'three'</Code> to the beginning of the array and
            <Code>7, 'VIII', 9</Code> to the end so that the returned array
            contains representations of the numbers 1-9 in order.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>mixedNumbers(["IV", 5, "six"])</Code> should now return
                <Code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</Code>
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                The <Code>mixedNumbers</Code> function should utilize the
                <Code>push()</Code> method
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                The <Code>mixedNumbers</Code> function should utilize the
                <Code>unshift()</Code> method
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
