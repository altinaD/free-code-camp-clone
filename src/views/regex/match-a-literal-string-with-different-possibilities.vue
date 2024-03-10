<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Match a Literal String with Different Possibilities</h1>
          <p>
            Using regexes like <Code>/coding/</Code>, you can look for the
            pattern <Code>coding</Code> in another string.
          </p>
          <p>
            This is powerful to search single strings, but it's limited to only
            one pattern. You can search for multiple patterns using the
            <Code>alternation</Code> or <Code>OR</Code> operator:
            <Code>|</Code>.
          </p>
          <p>
            This operator matches patterns either before or after it. For
            example, if you wanted to match the strings <Code>yes</Code> or
            <Code>no</Code>, the regex you want is <Code>/yes|no/</Code>.
          </p>
          <p>
            You can also search for more than just two patterns. You can do this
            by adding more patterns with more <Code>OR</Code> operators
            separating them, like <Code>/yes|no|maybe/</Code>.
          </p>
          <hr />
          <p>
            Complete the regex <Code>petRegex</Code> to match the pets
            <Code>dog</Code>, <Code>cat</Code>, <Code>bird</Code>, or
            <Code>fish</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>petRegex</Code> should return
                <Code>true</Code> for the string
                <Code>John has a pet dog</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>petRegex</Code> should return
                <Code>false</Code> for the string
                <Code>Emma has a pet rock</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>petRegex</Code> should return
                <Code>true</Code> for the string
                <Code>Emma has a pet bird</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>petRegex</Code> should return
                <Code>true</Code> for the string
                <Code>Emma has a pet cat</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>petRegex</Code> should return
                <Code>false</Code> for the string
                <Code>Kara has a pet dolphin</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>petRegex</Code> should return
                <Code>true</Code> for the string
                <Code>Alice has a pet fish</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Your regex <Code>petRegex</Code> should return
                <Code>false</Code> for the string
                <Code>Jimmy has a pet computer</Code>.
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
