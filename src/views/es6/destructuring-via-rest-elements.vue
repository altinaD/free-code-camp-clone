<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreen">
        <LeftScreen>
          <h1>Destructuring via rest elements</h1>
          <p>
            In some situations involving array destructuring, we might want to
            collect the rest of the elements into a separate array.
          </p>
          <p>
            The result is similar to <Code>Array.prototype.slice()</Code>, as
            shown below:
          </p>
          <Comment>
            <span class="blue">const </span>
            <span class="black">[ a, b, ... arr ] = [ </span>
            <span class="purple">1</span>
            <span class="black">, </span>
            <span class="purple">2</span>
            <span class="black">, </span>
            <span class="purple">3</span>
            <span class="black">, </span>
            <span class="purple">4</span>
            <span class="black">, </span>
            <span class="purple">5</span>
            <span class="black">, </span>
            <span class="purple">6</span>
            <span class="black">, </span>
            <span class="purple">7</span>
            <span class="black"> ]; </span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">( a, b );</span>
            <div class="next"></div>
            <span class="black">console.</span>
            <span class="red">log</span>
            <span class="black">( arr );</span>
          </Comment>
          <p>
            The console would display the values <Code>1, 2</Code> and
            <Code>[3, 4, 5, 7]</Code>.
          </p>
          <p>
            Variables <Code>a</Code> and <Code>b</Code> take the first and
            second values from the array. After that, because of the rest syntax
            presence, <Code>arr</Code> gets the rest of the values in the form
            of an array. The rest element only works correctly as the last
            variable in the list. As in, you cannot use the rest syntax to catch
            a subarray that leaves out the last element of the original array.
          </p>
          <hr />
          <p>
            Use a destructuring assignment with the rest syntax to emulate the
            behavior of <Code>Array.prototype.slice()</Code>.
            <Code>removeFirstTwo()</Code> should return a sub-array of the
            original array <Code>list</Code> with the first two elements
            omitted.
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
                <Code>removeFirstTwo([1, 2, 3, 4, 5])</Code> should be
                <Code>[3, 4, 5]</Code>
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
                <Code>removeFirstTwo()</Code> should not modify
                <Code>list</Code>
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
              <p><Code>Array.slice()</Code> should not be used.</p>
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
              <p>You should use the rest syntax.</p>
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
