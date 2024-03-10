<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Palindrome Checker</h1>
          <p>
            Return <Code>true</Code> if the given string is a palindrome.
            Otherwise, return <Code>false</Code>.
          </p>
          <p>
            A <i>palindrome</i> is a word or sentence that's spelled the same
            way both forward and backward, ignoring punctuation, case, and
            spacing.
          </p>
          <p>
            <b>Note:</b> You'll need to remove
            <b>all non-alphanumeric characters</b>
            (punctuation, spaces and symbols) and turn everything into the same
            case (lower or upper case) in order to check for palindromes.
          </p>
          <p>
            We'll pass strings with varying formats, such as
            <Code>racecar</Code>, <Code>RaceCar</Code>, and
            <Code>race CAR</Code> among others.
          </p>
          <p>
            We'll also pass strings with special symbols, such as
            <Code>2A3*3a2</Code>, <Code>2A3 3a2</Code>, and
            <Code>2_A3*3#A2</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>palindrome("eye")</Code> should return a boolean.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("eye")</Code> should return <Code>true</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("_eye")</Code> should return <Code>true</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("race car")</Code> should return
                <Code>true</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("not a palindrome")</Code> should return
                <Code>false</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("A man, a plan, a canal. Panama")</Code> should
                return <Code>true</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("never odd or even")</Code> should return
                <Code>true</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("nope")</Code> should return
                <Code>false</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("almostomla")</Code> should return
                <Code>false</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("My age is 0, 0 si ega ym.")</Code> should
                return <Code>true</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("1 eye for of 1 eye.")</Code> should return
                <Code>false</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("0_0 (: /-\ :) 0-0")</Code> should return
                <Code>true</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>palindrome("five|\_/|four")</Code> should return
                <Code>false</Code>.
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
