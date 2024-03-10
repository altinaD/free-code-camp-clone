<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use getters and setters to Control Access to an Object</h1>
          <p>
            You can obtain values from an object and set the value of a property
            within an object.
          </p>
          <p>These are classically called getters and setters.</p>
          <p>
            Getter functions are meant to simply return (get) the value of an
            object's private variable to the user without the user directly
            accessing the private variable.
          </p>
          <p>
            Setter functions are meant to modify (set) the value of an object's
            private variable based on the value passed into the setter function.
            This change could involve calculations, or even overwriting the
            previous value completely.
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="red">Book </span>
            <span class="black">{</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">constructor</span>
            <span class="black">(author) {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="blue">this</span>
            <span class="black">._author = author;</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="tab">// getter</span>
            <div class="next"></div>
            <span class="tab blue">get </span>
            <span class="red">writer</span>
            <span class="black">() {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="blue">return this</span>
            <span class="black">._author;</span>
            <div class="next"></div>
            <span class="tab black">}</span>
            <div class="next"></div>
            <span class="tab">// setter</span>
            <div class="next"></div>
            <span class="tab blue">set </span>
            <span class="red">writer</span>
            <span class="black">(updateAuthor) {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="blue">this</span>
            <span class="black">._author = updateAuthor;</span>
            <div class="next"></div>
            <span class="tab black">}</span>
            <div class="next"></div>
            <span class="blue">const </span>
            <span class="black">novel = </span>
            <span class="blue">new </span>
            <span class="red">Book</span>
            <span class="black">( </span>
            <span class="green">'anonymous' </span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(novel.writer);</span>
            <div class="next"></div>
            <span class="black">novel.writer = </span>
            <span class="green">'newAuthor'</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(novel.writer);</span>
            <div class="next"></div>
          </Comment>
          <p>
            The console would display the strings <Code>anonymous</Code> and
            <Code>newAuthor</Code>.
          </p>
          <p>
            Notice the syntax used to invoke the getter and setter. They do not
            even look like functions. Getters and setters are important because
            they hide internal implementation details.
          </p>
          <p>
            <b>Note:</b> It is convention to precede the name of a private
            variable with an underscore (<Code>_</Code>). However, the practice
            itself does not make a variable private.
          </p>
          <hr />
          <p>
            Use the <Code>class</Code> keyword to create a
            <Code>Thermostat</Code> class. The <Code>constructor</Code>
            accepts a Fahrenheit temperature.
          </p>
          <p>
            In the class, create a <Code>getter</Code> to obtain the temperature
            in Celsius and a setter that accepts a temperature in Celsius.
          </p>
          <p>
            Remember that <Code>C = 5/9 * (F - 32)</Code> and
            <Code>F = C * 9.0 / 5 + 32</Code>, where <Code>F</Code> is the value
            of temperature in Fahrenheit, and <Code>C</Code> is the value of the
            same temperature in Celsius.
          </p>
          <p>
            <b>Note:</b> When you implement this, you will track the temperature
            inside the class in one scale, either Fahrenheit or Celsius.
          </p>
          <p>
            This is the power of a getter and a setter. You are creating an API
            for another user, who can get the correct result regardless of which
            one you track.
          </p>
          <p>
            In other words, you are abstracting implementation details from the
            user.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>Thermostat</Code> should be a <Code>class</Code> with a
                defined <Code>constructor</Code> method.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>The <Code>class</Code> keyword should be used.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>Thermostat</Code> should be able to be instantiated.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                When instantiated with a Fahrenheit value,
                <Code>Thermostat</Code> should set the correct
                <Code>temperature</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>A <Code>getter</Code> should be defined.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>A <Code>setter</Code> should be defined.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Calling the <Code>setter</Code> with a Celsius value should set
                the <Code>temperature</Code>.
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
