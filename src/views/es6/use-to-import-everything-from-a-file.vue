<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreen">
        <LeftScreen>
          <h1>Use * to Import Everything from a File</h1>
          <p>
            Suppose you have a file and you wish to import all of its contents
            into the current file. This can be done with the
            <Code>import * as</Code> syntax. Here's an example where the
            contents of a file named <Code>math_functions.js</Code> are imported
            into a file in the same directory:
          </p>
          <Comment>
            <span class="blue">import </span>
            <span class="black">* </span>
            <span class="blue">as </span>
            <span class="black">myMathModule </span>
            <span class="blue">from </span>
            <span class="green">"./math_functions.js"</span>
            <span class="black">;</span>
          </Comment>
          <p>
            The above <Code>import</Code> statement will create an object called
            <Code>myMathModule</Code>. This is just a variable name, you can
            name it anything. The object will contain all of the exports from
            <Code>math_functions.js</Code> in it, so you can access the
            functions like you would any other object property. Here's how you
            can use the <Code>add</Code> and <Code>subtract</Code> functions
            that were imported:
          </p>
          <Comment>
            <span class="black">myMathModule.</span>
            <span class="red">add</span>
            <span class="black">( </span>
            <span class="purple">2</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black"> );</span>
            <div class="next"></div>
            <span class="black">myMathModule.</span>
            <span class="red">subtract</span>
            <span class="black">( </span>
            <span class="purple">5</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black"> );</span>
          </Comment>
          <hr />
          <p>
            The code in this file requires the contents of the file:
            <Code>string_functions.js</Code>, that is in the same directory as
            the current file. Use the <Code>import * as</Code> syntax to import
            everything from the file into an object called
            <Code>stringFunctions</Code>.
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
              <p>
                Your code should properly use <Code>import * as</Code> syntax.
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
