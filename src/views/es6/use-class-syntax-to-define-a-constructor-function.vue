<template>
  <div class="test-case">
    <Navigation />
    <div class="screen-divide">
      <div class="left-screen" ref="leftScreen">
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
                <Code>Vegetable</Code> should be a <Code>class</Code> with a
                defined <Code>constructor</Code> method.
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
              <p>The <Code>class</Code> keyword should be used.</p>
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
              <p><Code>Vegetable</Code> should be able to be instantiated.</p>
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
              <p><Code>carrot.name</Code> should return <Code>carrot</Code>.</p>
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
