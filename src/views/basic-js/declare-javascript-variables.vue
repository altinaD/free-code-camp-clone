<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreen">
        <LeftScreen>
          <h1>Declare JavaScript Variables</h1>
          <p>
            In computer science, data is anything that is meaningful to the
            computer. JavaScript provides eight different data types which are
            <Code>undefined</Code>, <Code>null</Code>, <Code>boolean</Code>,
            <Code>string</Code>, <Code>symbol</Code>, <Code>bigint</Code>,
            <Code>number</Code>, and <Code>object</Code>.
          </p>
          <p>
            For example, computers distinguish between numbers, such as the
            number <Code>12</Code>, and <Code>strings</Code>, such as
            <Code>"12"</Code>, <Code>"dog"</Code>, or <Code>"123 cats"</Code>,
            which are collections of characters. Computers can perform
            mathematical operations on a number, but not on a string.
          </p>
          <p>
            <i>Variables</i> allow computers to store and manipulate data in a
            dynamic fashion. They do this by using a "label" to point to the
            data rather than using the data itself. Any of the eight data types
            may be stored in a variable.
          </p>
          <p>
            Variables are similar to the x and y variables you use in
            mathematics, which means they're a simple name to represent the data
            we want to refer to. Computer variables differ from mathematical
            variables in that they can store different values at different
            times.
          </p>
          <p>
            We tell JavaScript to create or <i>declare</i> a variable by putting
            the keyword <Code>var</Code> in front of it, like so:
          </p>
          <Comment>var <span class="black">ourName;</span></Comment>
          <p>
            creates a variable called <Code>ourName</Code>. In JavaScript we end
            statements with semicolons. Variable names can be made up of
            numbers, letters, and <Code>$</Code> or <Code>_</Code>, but may not
            contain spaces or start with a number.
          </p>
          <hr />
          <p>
            Use the <Code>var</Code> keyword to create a variable called
            <Code>myName</Code>.
          </p>
          <h3><b>Hint</b></h3>
          <p>
            Look at the <Code>ourName</Code> example above if you get stuck.
          </p>
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
                You should declare <Code>myName</Code> with the
                <Code>var</Code> keyword, ending with a semicolon
              </p>
            </li>
          </ul>
        </LeftScreen>
      </div>
      <RightScreen @resize-width="changeWidth">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          doloremque.
        </p>
      </RightScreen>
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

<style>
.arrow-down {
  min-width: 15px;
  min-height: 15px;
  width: 15px;
  height: 15px;
  display: inline;
  vertical-align: middle;
}

.test-status-icon {
  stroke: #fff;
  width: 40px;
  height: 40px;
}

.tests {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}
.test {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding: 5px 10px;
}

.test:nth-child(2n + 1) {
  background-color: #dfdfe2;
}
.test p {
  margin: 0;
  margin-left: 20px;
}
</style>
