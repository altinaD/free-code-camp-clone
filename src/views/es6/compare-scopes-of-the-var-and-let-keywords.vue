<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreenRef">
        <LeftScreen>
          <h1>Compare Scopes of the var and let Keywords</h1>
          <p>
            If you are unfamiliar with <Code>let</Code>, check out
            <router-link
              style="color: #000"
              to="/explore-differences-between-the-var-and-let-keywords"
            >
              this challenge about the difference between <Code>let</Code> and
              <Code>var</Code></router-link
            >.
          </p>
          <p>
            When you declare a variable with the <Code>var</Code> keyword, it is
            declared globally, or locally if declared inside a function.
          </p>
          <p>
            The <Code>let</Code> keyword behaves similarly, but with some extra
            features. When you declare a variable with the
            <Code>let</Code> keyword inside a block, statement, or expression,
            its scope is limited to that block, statement, or expression.
          </p>
          <p>For example:</p>
          <Comment
            ><span class="blue">var </span>
            <span class="black">numArray = [ ]; </span>
            <div class="next"></div>
            <span class="blue">for</span> <span class="black">(</span>
            <span class="blue">var</span> <span class="black"> i = </span>
            <span class="purple">0</span><span class="black">; i &lt; </span> 3
            <span class="black"
              >; i++) {
              <div class="next"></div>
              <span class="tab"></span>numArray.</span
            ><span class="red">push</span
            ><span class="black"
              >(i);
              <div class="next"></div>
              }
              <div class="next"></div>
              console.</span
            ><span class="red">log</span
            ><span class="black"
              >(numArray);
              <div class="next"></div>
              console.</span
            ><span class="red">log</span><span class="black">(i); </span>
            <div class="next"></div>
          </Comment>
          <p>
            Here the console will display the values <Code>[0, 1, 2]</Code> and
            <Code>3</Code>.
          </p>
          <p>
            With the <Code>var</Code> keyword, <Code>i</Code> is declared
            globally. So when <Code>i++</Code> is executed, it updates the
            global variable. This code is similar to the following:
          </p>
          <Comment
            ><span class="blue">var </span>
            <span class="black">numArray = [ ]; </span>
            <div class="next"></div>
            <span class="blue">var </span><span class="black">i;</span>
            <div class="next"></div>
            <span class="blue">for</span> <span class="black">(</span>
            <span class="blue">var</span> <span class="black"> i = </span>
            <span class="purple">0</span><span class="black">; i &lt; </span> 3
            <span class="black"
              >; i++) {
              <div class="next"></div>
              <span class="tab"></span>numArray.</span
            ><span class="red">push</span
            ><span class="black"
              >(i);
              <div class="next"></div>
              }
              <div class="next"></div>
              console.</span
            ><span class="red">log</span
            ><span class="black"
              >(numArray);
              <div class="next"></div>
              console.</span
            ><span class="red">log</span><span class="black">(i); </span><br />
          </Comment>
          <p>
            Here the console will display the values <Code>[0, 1, 2]</Code> and
            <Code>3</Code>.
          </p>
          <p>
            This behavior will cause problems if you were to create a function
            and store it for later use inside a <Code>for</Code> loop that uses
            the <Code>i</Code> variable. This is because the stored function
            will always refer to the value of the updated global
            <Code>i</Code> variable.
          </p>
          <Comment>
            <span class="blue">var </span
            ><span class="black">printNumTwo;</span>
            <div class="next"></div>
            <span class="blue">for</span> <span class="black">(</span>
            <span class="blue">var</span> <span class="black"> i = </span>
            <span class="purple">0</span><span class="black">; i &lt; </span> 3
            <span class="black">; i++) { </span>
            <div class="next"></div>
            <span class="tab"></span><span class="blue">if</span>
            <span class="black"> (i === </span><span class="purple">2</span
            ><span class="black"> ) {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="red">printNumTwo </span>
            <span class="blue">= function</span><span class="black">() {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span><span class="blue">return </span
            ><span class="black">i;</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="black">};</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">console.</span><span class="red">log</span>
            <span class="black">(</span><span class="red">printNumTwo</span>
            <span class="black">());</span>
          </Comment>
          <p>Here the console will display the value <Code>3</Code>.</p>
          <p>
            As you can see, <Code>printNumTwo()</Code> prints 3 and not 2. This
            is because the value assigned to <Code>i</Code> was updated and the
            <Code>printNumTwo()</Code> returns the global <Code>i</Code> and not
            the value <Code>i</Code> had when the function was created in the
            for loop. The <Code>let</Code> keyword does not follow this
            behavior:
          </p>
          <Comment>
            <span class="blue">var </span
            ><span class="black">printNumTwo;</span>
            <div class="next"></div>
            <span class="blue">for</span> <span class="black">(</span>
            <span class="blue">var</span> <span class="black"> i = </span>
            <span class="purple">0</span><span class="black">; i &lt; </span> 3
            <span class="black">; i++) { </span>
            <div class="next"></div>
            <span class="tab"></span><span class="blue">if</span>
            <span class="black"> (i === </span><span class="purple">2</span
            ><span class="black"> ) {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="red">printNumTwo </span>
            <span class="blue">= function</span><span class="black">() {</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="tab"></span><span class="blue">return </span
            ><span class="black">i;</span>
            <div class="next"></div>
            <span class="tab"></span><span class="tab"></span
            ><span class="black">};</span>
            <div class="next"></div>
            <span class="tab"></span>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">}</span>
            <div class="next"></div>
            <span class="black">console.</span><span class="red">log</span>
            <span class="black">(</span><span class="red">printNumTwo</span>
            <span class="black">());</span>
            <div class="next"></div>
            <span class="black">console.</span><span class="red">log</span>
            <span class="black">(</span>
            <span class="black">i);</span>
          </Comment>
          <p>
            Here the console will display the value <Code>2</Code>, and an error
            that <Code>i is not defined</Code>.
          </p>
          <p>
            <Code>i</Code> is not defined because it was not declared in the
            global scope. It is only declared within the <Code>for</Code> loop
            statement. <Code>printNumTwo()</Code> returned the correct value
            because three different <Code>i</Code> variables with unique values
            (0, 1, and 2) were created by the <Code>let</Code> keyword within
            the loop statement.
          </p>
          <hr />
          <p>
            Fix the code so that <Code>i</Code> declared in the
            <Code>if</Code> statement is a separate variable than
            <Code>i</Code> declared in the first line of the function. Be
            certain not to use the <Code>var</Code> keyword anywhere in your
            code.
          </p>
          <p>
            This exercise is designed to illustrate the difference between how
            <Code>var</Code> and <Code>let</Code> keywords assign scope to the
            declared variable. When programming a function similar to the one
            used in this exercise, it is often better to use different variable
            names to avoid confusion.
          </p>
          <hr />
          <tests />
          <ul class="tests">
            <li class="test">
              <tests-initial />
              <p><Code>var</Code> should not exist in code.</p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                The variable <Code>i</Code> declared in the
                <Code>if</Code> statement should equal the string
                <Code>block scope</Code>.
              </p>
            </li>
            <li class="test">
              <tests-initial />
              <p>
                <Code>checkScope()</Code> should return the string
                <Code>function scope</Code>
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
