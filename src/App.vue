<template>
  <div id="app">
    <Header />
    <section class="main-block">
      <div class="inner-block">
        <app-intro />
        <div class="max-spacer"></div>
        <course-intro
          v-for="course in courses"
          :key="course.id"
          :title="course.title"
        />
        <div v-for="desc in description" :key="desc.id">
          <p :desc="desc"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import appIntro from "./components/appIntro.vue";
import Header from "./components/header/Header.vue";
import courseIntro from "./components/course-intro.vue";
export default {
  components: {
    Header,
    appIntro,
    courseIntro,
  },
  data() {
    return {
      courses: [
        {
          title: "Basic JavaScript",
          description: [
            `JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.`,
            `In this course, you'll learn fundamental programming concepts in JavaScript. You'll start with basic data structures like numbers and strings. Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more.`,
          ],
        },
        {
          title: "ES6",
          description: `ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.
          Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.
          ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.`,
        },
        {
          title: "Regular Expressions",
          description: `Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.
          In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.`,
        },
        {
          title: "Debugging",
          description: `Debugging is the process of going through your code, finding any issues, and fixing them.
          Issues in code generally come in three forms: syntax errors that prevent your program from running, runtime errors where your code has unexpected behavior, or logical errors where your code doesn't do what you intended.
          In this course, you'll learn how to use the JavaScript console to debug programs and prevent common issues before they happen.`,
        },
        {
          title: "Basic Data Structures",
          description: `Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.
          In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.`,
        },
        {
          title: "Basic Algorithm Scripting",
          description: `An algorithm is a series of step-by-step instructions that describe how to do something.
          To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.
          In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything from converting temperatures to handling complex 2D arrays.`,
        },
        {
          title: "Object Oriented Programming",
          description: `OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes organize code to describe things and what they can do.
          In this course, you'll learn the basic principles of OOP in JavaScript, including the this keyword, prototype chains, constructors, and inheritance.`,
        },
        {
          title: "Functional Programming",
          description: `Functional Programming is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.
          In this course, you'll learn the core concepts of Functional Programming including pure functions, how to avoid mutations, and how to write cleaner code with methods like .map() and .filter().`,
        },
        {
          title: "Intermediate Algorithm Scripting",
          description: `Now that you know the basics of algorithmic thinking, along with OOP and Functional Programming, test your skills with the Intermediate Algorithm Scripting challenges.`,
        },
        {
          title: "JavaScript Algorithms and Data Structures Projects",
          description: `This is it — time to put your new JavaScript skills to work. These projects are similar to the algorithm scripting challenges you've done before – just much more difficult.
          Complete these 5 JavaScript projects to earn the JavaScript Algorithms and Data Structures certification.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
$main-color: #0a0a23;
$selection-color: rgba(0, 46, 173, 0.3);
$secondary-color: #1b1b32;
$secondary-bg-color: #f5f6f7;
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
p,
a,
li,
h1,
h2,
h3,
h4 {
  font-family: "Lato", sans-serif;
}
li {
  list-style: none;
}
img,
svg {
  display: block;
}
#app {
  background-color: $secondary-bg-color;
  font-family: "Lato", sans-serif;
}
::selection {
  background-color: $selection-color;
}
.main-block {
  max-width: 80%;
  margin: 0 auto;
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 768px) {
    width: 750px;
    max-width: 100%;
    padding: 0 15px;
  }
}

.inner-block {
  width: 70%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
}
.max-spacer {
  padding: 30px 0;
}

.min-spacer {
  padding: 15px 0;
}
</style>
