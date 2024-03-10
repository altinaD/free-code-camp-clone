<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Create Strings using Template Literals</h1>
          <p>
            A new feature of ES6 is the <i>template literal</i>. This is a
            special type of string that makes creating complex strings easier.
          </p>
          <p>
            Template literals allow you to create multi-line strings and to use
            string interpolation features to create strings.
          </p>
          <p>Consider the code below:</p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">person = {</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">name</span>
            <span class="black">: </span>
            <span class="green">"Zodiac Hasbro"</span>
            <span class="black">, </span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="red">age</span>
            <span class="black">: </span>
            <span class="green">56</span>
            <div class="next"></div>
            <span class="black">};</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="blue">const </span>
            <span class="black">greeting = </span>
            <span class="green">`Hello, my name is </span>
            <span class="black">${ person.name }</span>
            <span class="green">!</span>
            <div class="next"></div>
            <span class="green">I am </span>
            <span class="black">${ person.age } </span>
            <span class="green">years old.`</span>
            <span class="black">;</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">(greeting);</span>
          </Comment>
          <p>
            The console will display the strings
            <Code>Hello, my name is Zodiac Hasbro!</Code> and
            <Code>I am 56 years old.</Code>.
          </p>
          <p>
            A lot of things happened there. Firstly, the example uses backticks
            (<Code>`</Code>), not quotes (<Code>'</Code> or <Code>"</Code>), to
            wrap the string. Secondly, notice that the string is multi-line,
            both in the code and the output. This saves inserting
            <Code>\n</Code> within strings. The <Code>${variable}</Code> syntax
            used above is a placeholder. Basically, you won't have to use
            concatenation with the <Code>+</Code> operator anymore. To add
            variables to strings, you just drop the variable in a template
            string and wrap it with <Code>${</Code> and <Code>}</Code>.
            Similarly, you can include other expressions in your string literal,
            for example <Code>${a + b}</Code>. This new way of creating strings
            gives you more flexibility to create robust strings.
          </p>
          <hr />
          <p>
            Use template literal syntax with backticks to create an array of
            list element (li) strings. Each list element's text should be one of
            the array elements from the failure property on the result object
            and have a class attribute with the value text-warning. The makeList
            function should return the array of list item strings.
          </p>
          <p>
            Use an iterator method (any kind of loop) to get the desired output
            (shown below).
          </p>
          <Comment>
            <span class="black">[</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="green"> '{{ list1 }}' </span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="green">'{{ list2 }}'</span>
            <span class="black">,</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="green">'{{ list3 }}'</span>
            <div class="next"></div>
            <span class="black">]</span>
          </Comment>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p>
                <Code>failuresList</Code> should be an array containing
                <Code>result failure</Code> messages.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>failuresList</Code> should be equal to the specified
                output.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                Template strings and expression interpolation should be used.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>An iterator should be used.</p>
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

let list1 = ref('<li class="text-warning">no-var</li>'),
  list2 = ref('<li class="text-warning">var-on-top</li>'),
  list3 = ref('<li class="text-warning">linebreak</li>');

function changeWidth(n) {
  let size = window.innerWidth - n - 30;
  leftScreenRef.value.style.width = size + "px";
}
</script>
