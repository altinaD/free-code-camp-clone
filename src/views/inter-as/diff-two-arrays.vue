<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Diff Two Arrays</h1>
          <p>
            Compare two arrays and return a new array with any items only found
            in one of the two given arrays, but not both. In other words, return
            the symmetric difference of the two arrays.
          </p>
          <p>
            <b>Note:</b> You can return the array with its elements in any
            order.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])</Code> should
                return an array.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code
                  >["diorite", "andesite", "grass", "dirt", "pink wool", "dead
                  shrub"], ["diorite", "andesite", "grass", "dirt", "dead
                  shrub"]</Code
                >
                should return <Code>["pink wool"]</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code
                  >["diorite", "andesite", "grass", "dirt", "pink wool", "dead
                  shrub"], ["diorite", "andesite", "grass", "dirt", "dead
                  shrub"]</Code
                >
                should return an array with one item.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code
                  >["andesite", "grass", "dirt", "pink wool", "dead shrub"],
                  ["diorite", "andesite", "grass", "dirt", "dead shrub"]</Code
                >
                should return <Code>["diorite", "pink wool"]</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code
                  >["andesite", "grass", "dirt", "pink wool", "dead shrub"],
                  ["diorite", "andesite", "grass", "dirt", "dead shrub"]</Code
                >
                should return an array with two items.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code
                  >["andesite", "grass", "dirt", "dead shrub"], ["andesite",
                  "grass", "dirt", "dead shrub"]</Code
                >
                should return <Code>[]</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code
                  >["andesite", "grass", "dirt", "dead shrub"], ["andesite",
                  "grass", "dirt", "dead shrub"]</Code
                >
                should return an empty array.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</Code> should return
                <Code>[4]</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>[1, 2, 3, 5], [1, 2, 3, 4, 5]</Code> should return an
                array with one item.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</Code> should
                return <Code>["piglet", 4]</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>[1, "calf", 3, "piglet"], [1, "calf", 3, 4]</Code> should
                return an array with two items.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>[], ["snuffleupagus", "cookie monster", "elmo"]</Code>
                should return
                <Code>["snuffleupagus", "cookie monster", "elmo"]</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>[], ["snuffleupagus", "cookie monster", "elmo"]</Code>
                should return an array with three items.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>[1, "calf", 3, "piglet"], [7, "filly"]</Code> should
                return <Code>[1, "calf", 3, "piglet", 7, "filly"]</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>[1, "calf", 3, "piglet"], [7, "filly"]</Code> should
                return an array with six items.
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
