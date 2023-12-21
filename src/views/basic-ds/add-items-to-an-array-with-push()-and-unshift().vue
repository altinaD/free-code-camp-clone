<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreen">
        <LeftScreen>
          <h1>Add Items to an Array with push() and unshift()</h1>
          <p>
            An array's length, like the data types it can contain, is not fixed.
            Arrays can be defined with a length of any number of elements, and
            elements can be added or removed over time; in other words, arrays
            are mutable. In this challenge, we will look at two methods with
            which we can programmatically modify an array:
            <Code>Array.push()</Code> and <Code>Array.unshift()</Code>.
          </p>
          <p>
            Both methods take one or more elements as parameters and add those
            elements to the array the method is being called on; the
            <Code>push()</Code> method adds elements to the end of an array, and
            <Code>unshift()</Code> adds elements to the beginning. Consider the
            following:
          </p>
          <Comment>
            <span class="blue">let </span>
            <span class="black">twentyThree = </span>
            <span class="green">'XXIII'</span>
            <span class="black">;</span>
            <div class="next"></div>
            <span class="blue">let </span>
            <span class="black">romanNumerals = [ </span>
            <span class="green">'XXI', 'XXII'</span>
            <span class="black">];</span>
            <div class="next"></div>
            <div class="next"></div>
            <span class="black">romanNumerals.</span>
            <span class="red">unshift</span>
            <span class="black">( </span>
            <span class="green">'XIX', 'XX'</span>
            <span class="black">);</span>
          </Comment>
          <p>
            <Code>romanNumerals</Code> would have the value
            <Code>['XIX', 'XX', 'XXI', 'XXII']</Code>.
          </p>
          <Comment>
            <span class="black">romanNumerals.</span>
            <span class="red">push</span>
            <span class="black">(twentyThree);</span>
          </Comment>
          <p>
            <Code>romanNumerals</Code> would have the value
            <Code>['XIX', 'XX', 'XXI', 'XXII', 'XXIII']</Code>. Notice that we
            can also pass variables, which allows us even greater flexibility in
            dynamically modifying our array's data.
          </p>
          <hr />
          <p>
            We have defined a function, <Code>mixedNumbers</Code>, which we are
            passing an array as an argument. Modify the function by using
            <Code>push()</Code> and <Code>unshift()</Code> to add
            <Code>'I', 2, 'three'</Code> to the beginning of the array and
            <Code>7, 'VIII', 9</Code> to the end so that the returned array
            contains representations of the numbers 1-9 in order.
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
                <Code>mixedNumbers(["IV", 5, "six"])</Code> should now return
                <Code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</Code>
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
                The <Code>mixedNumbers</Code> function should utilize the
                <Code>push()</Code> method
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
                The <Code>mixedNumbers</Code> function should utilize the
                <Code>unshift()</Code> method
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
