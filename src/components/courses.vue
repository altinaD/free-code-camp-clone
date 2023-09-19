<template>
  <div class="courses-section">
    <div class="course" v-for="course in courses" :key="course.id">
      <h1 class="course-header">{{ course.title }}</h1>
      <div class="min-spacer"></div>
      <ul v-for="item in course.description" :key="item.id">
        <li>{{ item }}</li>
      </ul>
      <div class="one-px-spacer"></div>
      <div @click="isOpen = !isOpen" class="course desc">
        <div class="course-test-section-title">
          <svg class="arrow" viewBox="0 0 100 100" width="25px">
            <polygon
              points="-6.04047,17.1511 81.8903,58.1985 -3.90024,104.196"
              transform="matrix(0.999729, 0.023281, -0.023281, 0.999729, 7.39321, -10.0425)"
              style="stroke: #0a0a23; fill: #0a0a23; stroke-width: 1px"
            ></polygon>
          </svg>
          <p>Expand course</p>
        </div>
        <span class="result"> <span id="test-result"> 0 / {{}}</span></span>
      </div>
      <div class="course test">
        <ul
          v-for="test in course.tests"
          :key="test.id"
          :class="{ open: isOpen }"
          class="test-list"
        >
          <li>
            <span>
              <svg
                aria-hidden="true"
                height="15"
                viewBox="0 0 200 200"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <title>Not Passed</title>
                  <circle
                    cx="100"
                    cy="99"
                    fill="#fff"
                    r="95"
                    stroke="#0a0a23"
                    stroke-dasharray="null"
                    stroke-width="10"
                  ></circle>
                </g>
              </svg>
            </span>
            <router-link to="/comment-your-javascript-code"
              >Comment your js code</router-link
            >{{ test }}
          </li>
        </ul>
      </div>
      <!-- /////////////////////////////// -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      courses: [
        {
          title: "Basic JavaScript",
          description: [
            `JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.`,
            `In this course, you'll learn fundamental programming concepts in JavaScript. You'll start with basic data structures like numbers and strings. Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more.`,
          ],
          adress: "basic-js",
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Understanding Uninitialized Variables",
            "Understanding Case Sensitivity in Variables",
            "Explore Differences Between the var and let Keywords",
            "Declare a Read-Only Variable with the const Keyword",
            "Add Two Numbers with JavaScript",
            "Subtract One Number from Another with JavaScript",
            "Multiply Two Numbers with JavaScript",
            "Divide One Number by Another with JavaScript",
          ],
        },
        {
          title: "ES6",
          description: [
            `ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.`,
            `Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.`,
            `ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.`,
          ],
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Divide One Number by Another with JavaScript",
          ],
        },
        {
          title: "Regular Expressions",
          description: [
            `Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.`,
            `In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.`,
          ],
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Divide One Number by Another with JavaScript",
          ],
        },
        {
          title: "Debugging",
          description: [
            `Debugging is the process of going through your code, finding any issues, and fixing them.`,
            `Issues in code generally come in three forms: syntax errors that prevent your program from running, runtime errors where your code has unexpected behavior, or logical errors where your code doesn't do what you intended.`,
            `In this course, you'll learn how to use the JavaScript console to debug programs and prevent common issues before they happen.`,
          ],
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Divide One Number by Another with JavaScript",
          ],
        },
        {
          title: "Basic Data Structures",
          description: [
            `Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.`,
            `In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.`,
          ],
        },
        {
          title: "Basic Algorithm Scripting",
          description: [
            `An algorithm is a series of step-by-step instructions that describe how to do something.`,
            `To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.`,
            `In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything from converting temperatures to handling complex 2D arrays.`,
          ],
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Divide One Number by Another with JavaScript",
          ],
        },
        {
          title: "Object Oriented Programming",
          description: [
            `OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes organize code to describe things and what they can do.`,
            `In this course, you'll learn the basic principles of OOP in JavaScript, including the this keyword, prototype chains, constructors, and inheritance.`,
          ],
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Divide One Number by Another with JavaScript",
          ],
        },
        {
          title: "Functional Programming",
          description: [
            `Functional Programming is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.`,
            `In this course, you'll learn the core concepts of Functional Programming including pure functions, how to avoid mutations, and how to write cleaner code with methods like .map() and .filter().`,
          ],
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Divide One Number by Another with JavaScript",
          ],
        },
        {
          title: "Intermediate Algorithm Scripting",
          description: [
            `Now that you know the basics of algorithmic thinking, along with OOP and Functional Programming, test your skills with the Intermediate Algorithm Scripting challenges.`,
          ],
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Divide One Number by Another with JavaScript",
          ],
        },
        {
          title: "JavaScript Algorithms and Data Structures Projects",
          description: [
            `This is it — time to put your new JavaScript skills to work. These projects are similar to the algorithm scripting challenges you've done before – just much more difficult.`,
            `Complete these 5 JavaScript projects to earn the JavaScript Algorithms and Data Structures certification.`,
          ],
          tests: [
            "Comment Your JavaScript Code",
            "Declare JavaScript Variables",
            "Storing Values with the Assignment Operator",
            "Assigning the Value of One Variable to Another",
            "Initializing Variables with the Assignment Operator",
            "Declare String Variables",
            "Divide One Number by Another with JavaScript",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.course {
  background-color: #fff;
  padding: 15px;
  position: relative;
  margin-top: 30px;
}
.course .course-header {
  font-size: 1.5rem;
}

li {
  font-size: 1.17rem;
  line-height: 1.5rem;
  color: #1b1b32;
  font-weight: 400;
  margin-top: 20px;
  white-space: pre-line;
}
.one-px-spacer {
  margin-top: 15px;
  width: 100%;
  position: absolute;
  height: 4px;
  background-color: #f5f6f7;
  left: 0;
}
.course-test-section-title {
  display: inline-block;
}
.course-test-section-title .arrow {
  width: 14px;
}
.course-test-section-title svg,
.course-test-section-title p {
  display: inline;
}
.course-test-section-title p {
  margin-left: 1rem;
}

.result {
  position: relative;
  display: contents;
}
.result #test-result {
  position: absolute;
  right: 15px;
}
.test-list {
  width: 100%;
  display: none;
}
.test-list.open {
  display: flex;
  flex-direction: column;
}
.test-list li {
  width: 100%;
  padding: 8px 0;
  font-size: 1.13rem;
  font-family: inherit;
  display: flex;
  gap: 7px;
  align-items: center;
}
.test-list a {
  text-decoration: none;
  color: #000;
}

.course.test {
  margin-top: 0;
  padding: 0;
}
.course.desc {
  cursor: pointer;
}
</style>
