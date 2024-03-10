<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Create a Basic JavaScript Object</h1>
          <p>
            Think about things people see every day, like cars, shops, and
            birds. These are all <i>objects</i>: tangible things people can
            observe and interact with.
          </p>
          <p>
            What are some qualities of these objects? A car has wheels. Shops
            sell items. Birds have wings.
          </p>
          <p>
            These qualities, or <i>properties</i>, define what makes up an
            object. Note that similar objects share the same properties, but may
            have different values for those properties. For example, all cars
            have wheels, but not all cars have the same number of wheels.
          </p>
          <p>
            Objects in JavaScript are used to model real-world objects, giving
            them properties and behavior just like their real-world
            counterparts. Here's an example using these concepts to create a
            <Code>duck</Code> object:
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">duck = {</span>
            <div class="next"></div>
            <span class="tab red">name</span>
            <span class="black">: </span>
            <span class="green">"Aflac"</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab red">numLegs</span>
            <span class="black">: </span>
            <span class="purple">2</span>
            <div class="next"></div>
            <span class="black">};</span>
          </Comment>
          <p>
            This <Code>duck</Code> object has two property/value pairs: a
            <Code>name</Code> of <Code>Aflac</Code> and a
            <Code>numLegs</Code> of 2.
          </p>
          <hr />
          <p>
            Create a <Code>dog</Code> object with <Code>name</Code> and
            <Code>numLegs</Code> properties, and set them to a string and a
            number, respectively.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>dog</Code> should be an object.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>dog</Code> should have a <Code>name</Code> property set to
                a string.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>dog</Code> should have a <Code>numLegs</Code> property set
                to a number.
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
