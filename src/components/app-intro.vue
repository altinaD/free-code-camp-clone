<template>
  <div>
    <div class="max-spacer"></div>
    <h1 class="big-header">
      JavaScript Algorithms and <br />
      Data Structures
    </h1>
    <div class="min-spacer"></div>
    <header-icon />
    <div class="max-spacer"></div>
    <p>
      While HTML and CSS control the content and styling of a page, JavaScript
      is used to make it interactive. In the JavaScript Algorithm and Data
      Structures Certification, you'll learn the fundamentals of JavaScript
      including variables, arrays, objects, loops, and functions.
    </p>
    <div class="min-spacer"></div>
    <p>
      Once you have the fundamentals down, you'll apply that knowledge by
      creating algorithms to manipulate strings, factorialize numbers, and even
      calculate the orbit of the International Space Station.
    </p>
    <div class="min-spacer"></div>
    <p>
      Along the way, you'll also learn two important programming styles or
      paradigms: Object Oriented Programming (OOP) and Functional Programming
      (FP).
    </p>
    <div class="min-spacer"></div>
    <div class="alert">
      <p>
        Note: Some browser extensions, such as ad-blockers and script-blockers
        can interfere with the tests. If you face issues, we recommend disabling
        extensions that modify or block the content of pages while taking the
        course.
      </p>
    </div>
    <div class="max-spacer"></div>
    <h1 class="section-header">Courses</h1>
  </div>
</template>

<script setup>
import headerIcon from "./util-components/svg-components/header-icon.vue";
</script>

<style lang="scss" scoped>
$main-color: #0a0a23;
$selection-color: rgba(0, 46, 173, 0.3);
$secondary-color: #1b1b32;
$secondary-bg-color: #f5f6f7;

h1,
p {
  font-family: "Lato", sans-serif;
}

.max-spacer {
  padding: 30px 0;
}

.min-spacer {
  padding: 15px 0;
}

.big-header {
  font-size: 2.5rem;
  text-align: center;
}

.header-icon {
  width: 80px;
  height: 80px;
  margin: auto;
  fill: $main-color;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 1000px) {
    width: 120px;
    height: 120px;
  }
}

p {
  font-size: 1.17rem;
  line-height: 1.5rem;
  color: $secondary-color;
  font-weight: 400;
}

.alert {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #31708f;
  padding: 15px;
  border: 1px solid transparent;
  p {
    color: inherit;
    font-size: 1rem;
  }
}

.section-header {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}
</style>
