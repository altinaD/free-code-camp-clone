<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Use class Syntax to Define a Constructor Function</h1>
          <p>
            ES6 provides a new syntax to create objects, using the <i>class</i>
            keyword.
          </p>
          <p>
            In ES5, an object can be created by defining a
            <Code>constructor</Code> function and using the
            <Code>new</Code> keyword to instantiate the object.
          </p>
          <p>
            In ES6, a <Code>class</Code> declaration has a
            <Code>constructor</Code> method that is invoked with the
            <Code>new</Code>
            keyword. If the <Code>constructor</Code> method is not explicitly
            defined, then it is implicitly defined with no arguments.
          </p>
          <Comment>
            <span>// Explicit constructor</span>
            <div class="next"></div>
            <span class="blue">class </span>
            <span class="red">SpaceShuttle </span>
            <span class="black">{</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">constructor</span>
            <span class="black">(targetPlanet) {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span>
            <span class="blue">this</span>
            <span class="black">.targetPlanet = targetPlanet;</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">takeOff</span>
            <span class="black">() {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="tab"></span>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(</span>
            <span class="green">"To "</span>
            <span class="black"> + </span>
            <span class="blue">this</span>
            <span class="black">.targetPlanet + </span>
            <span class="green">"!"</span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">}</span>
            <div class="next"></div>
            <div class="next"></div>
            <span>// Implicit constructor </span>
            <div class="next"></div>
            <span class="blue">class </span>
            <span class="red">Rocket </span>
            <span class="black">{</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">launch</span>
            <span class="black">() {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="tab"></span>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">( </span>
            <span class="green">"To the moon!" </span>
            <span class="black">);</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">}</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="blue">const </span>
            <span class="black">zeus = </span>
            <span class="blue">new </span>
            <span class="red">SpaceShuttle</span>
            <span class="black">( </span>
            <span class="green">'Jupiter' </span>
            <span class="black">);</span>
            <div class="next"></div>
            <span>// prints To Jupiter! in console</span>
            <div class="next"></div>
            <span class="black">zeus.</span>
            <span class="red">takeOff</span>
            <span class="black">();</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="blue">const </span>
            <span class="black">atlas = </span>
            <span class="blue">new </span>
            <span class="red">Rocket</span>
            <span class="black">();</span>
            <div class="next"></div>
            <span>// prints To the moon! in console</span>
            <div class="next"></div>
            <span class="black">atlas.</span>
            <span class="red">launch</span>
            <span class="black">();</span>
          </Comment>
          <p>
            It should be noted that the <Code>class</Code> keyword declares a
            new function, to which a constructor is added. This constructor is
            invoked when <Code>new</Code> is called to create a new object.
          </p>
          <p>
            <b>Note:</b> UpperCamelCase should be used by convention for ES6
            class names, as in <Code>SpaceShuttle</Code> used above.
          </p>
          <p>
            The <Code>constructor</Code> method is a special method for creating
            and initializing an object created with a class. You will learn more
            about it in the Object Oriented Programming section of the
            JavaScript Algorithms And Data Structures Certification.
          </p>
          <hr />
          <p>
            Use the <Code>class</Code> keyword and write a
            <Code>constructor</Code> to create the <Code>Vegetable</Code> class
          </p>
          <p>
            The <Code>Vegetable</Code> class allows you to create a vegetable
            object with a property <Code>name</Code> that gets passed to the
            <Code>constructor</Code>.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>Vegetable</Code> should be a <Code>class</Code> with a
                defined <Code>constructor</Code> method.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>The <Code>class</Code> keyword should be used.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>Vegetable</Code> should be able to be instantiated.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p><Code>carrot.name</Code> should return <Code>carrot</Code>.</p>
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
