<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreen">
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
          <Button>Run the Tests (Ctrl + Enter)</Button>
          <Button>Reset this lesson</Button>
          <Button
            >Get Help
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-up"
              class="arrow-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
              ></path>
            </svg>
          </Button>
          <h1>Tests</h1>
          <ul class="tests">
            <li class="test">
              <svg
                class="test-status-icon"
                height="50"
                viewBox="0 0 200 200"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <title>Initial</title>
                  <circle
                    cx="100"
                    cy="99"
                    fill="#0a0a23"
                    r="95"
                    stroke="#0a0a23"
                    stroke-dasharray="null"
                  ></circle>
                  <svg
                    height="200"
                    viewBox="-13 -12 50 50"
                    width="200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1zm13 20.554c0 1.284-1.023 2.446-2.424 2.446h-13.153c-1.4 0-2.423-1.162-2.423-2.445 0-.35.076-.709.242-1.057l3.743-7.856c1.04-2.186 2.015-4.581 2.015-7.007v-1.635h2l-.006 2c-.087 2.623-1.09 5.092-1.973 7h3.682l4.377 9h1.496c.309 0 .52-.342.377-.644l-3.743-7.854c-1.046-2.197-2.12-4.791-2.21-7.502v-2h2v1.635c0 2.426.975 4.82 2.016 7.006l3.743 7.856c.165.348.241.707.241 1.057zm-12-1.054c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.447 1-1zm3 3c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"
                      fill="#fff"
                    ></path>
                  </svg>
                </g>
              </svg>
              <p><Code>var</Code> should not exist in code.</p>
            </li>
            <li class="test">
              <svg
                class="test-status-icon"
                height="50"
                viewBox="0 0 200 200"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <title>Initial</title>
                  <circle
                    cx="100"
                    cy="99"
                    fill="#0a0a23"
                    r="95"
                    stroke="#0a0a23"
                    stroke-dasharray="null"
                  ></circle>
                  <svg
                    height="200"
                    viewBox="-13 -12 50 50"
                    width="200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1zm13 20.554c0 1.284-1.023 2.446-2.424 2.446h-13.153c-1.4 0-2.423-1.162-2.423-2.445 0-.35.076-.709.242-1.057l3.743-7.856c1.04-2.186 2.015-4.581 2.015-7.007v-1.635h2l-.006 2c-.087 2.623-1.09 5.092-1.973 7h3.682l4.377 9h1.496c.309 0 .52-.342.377-.644l-3.743-7.854c-1.046-2.197-2.12-4.791-2.21-7.502v-2h2v1.635c0 2.426.975 4.82 2.016 7.006l3.743 7.856c.165.348.241.707.241 1.057zm-12-1.054c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.447 1-1zm3 3c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"
                      fill="#fff"
                    ></path>
                  </svg>
                </g>
              </svg>
              <p>
                The variable <Code>i</Code> declared in the
                <Code>if</Code> statement should equal the string
                <Code>block scope</Code>.
              </p>
            </li>
            <li class="test">
              <svg
                class="test-status-icon"
                height="50"
                viewBox="0 0 200 200"
                width="50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <title>Initial</title>
                  <circle
                    cx="100"
                    cy="99"
                    fill="#0a0a23"
                    r="95"
                    stroke="#0a0a23"
                    stroke-dasharray="null"
                  ></circle>
                  <svg
                    height="200"
                    viewBox="-13 -12 50 50"
                    width="200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1c0-.552.448-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1h-6c-.552 0-1-.448-1-1zm13 20.554c0 1.284-1.023 2.446-2.424 2.446h-13.153c-1.4 0-2.423-1.162-2.423-2.445 0-.35.076-.709.242-1.057l3.743-7.856c1.04-2.186 2.015-4.581 2.015-7.007v-1.635h2l-.006 2c-.087 2.623-1.09 5.092-1.973 7h3.682l4.377 9h1.496c.309 0 .52-.342.377-.644l-3.743-7.854c-1.046-2.197-2.12-4.791-2.21-7.502v-2h2v1.635c0 2.426.975 4.82 2.016 7.006l3.743 7.856c.165.348.241.707.241 1.057zm-12-1.054c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5.671 1.5 1.5 1.5 1.5-.671 1.5-1.5zm2-3.5c0-.553-.448-1-1-1-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1-.447 1-1zm3 3c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z"
                      fill="#fff"
                    ></path>
                  </svg>
                </g>
              </svg>
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

<script>
import Navigation from "@/components/utilComponents/Navigation.vue";
import LeftScreen from "@/components/utilComponents/LeftScreen.vue";
import Code from "@/components/utilComponents/Code.vue";
import Comment from "@/components/utilComponents/Comment.vue";
import Button from "@/components/utilComponents/Button.vue";
import RightScreen from "@/components/utilComponents/RightScreen.vue";
export default {
  components: {
    Navigation,
    LeftScreen,
    Code,
    Comment,
    Button,
    RightScreen,
  },
  methods: {
    changeWidth(n) {
      let leftScreen = this.$refs.leftScreen;
      let size = window.innerWidth - n - 30;
      leftScreen.style.width = size + "px";
    },
  },
};
</script>
