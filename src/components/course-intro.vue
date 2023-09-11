<template>
  <div class="course-intro">
    <div class="course">
      <h1 class="course-header">{{ title }}</h1>
      <div class="min-spacer"></div>
      <p>
        {{ desc }}
      </p>
      <!-- <div class="min-spacer"></div>
      <p>
        In this course, you'll learn fundamental programming concepts in
        JavaScript. You'll start with basic data structures like numbers and
        strings. Then you'll learn to work with arrays, objects, functions,
        loops, if/else statements, and more.
      </p> -->
    </div>
    <div class="one-px-spacer"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
  },
};
</script>

<style scoped>
.course {
  background-color: #fff;
  padding: 15px;
  position: relative;
}
.course .course-header {
  font-size: 1.5rem;
}

.one-px-spacer {
  padding: 1px 0;
}
p {
  font-size: 1.17rem;
  line-height: 1.5rem;
  color: #1b1b32;
  font-weight: 400;
  white-space: pre-line;
}
</style>
