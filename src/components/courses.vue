<template>
  <div class="courses-section">
    <div class="course" v-for="course in courses" :key="course.id">
      <h1 class="course-header">{{ course.title }}</h1>
      <div class="min-spacer"></div>
      <p class="course-description">{{ course.description }}</p>
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
        <span class="result">
          <span id="test-result">
            0 /
            {{ course.tests.prototype.length }}</span
          ></span
        >
      </div>
      <ul class="course test" :class="{ open: isOpen }">
        <li class="test-list" v-for="test in course.tests" :key="test.id">
          <span @click="navTo(test)">
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
            <span>
              {{ test.value }}
            </span>
          </span>
        </li>
      </ul>
      <!-- /////////////////////////////// -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  async setup() {
    let { data: courses } = await axios.get("http://localhost:3000/courses");
    return {
      isOpen: ref(false),
      courses,
      showTest: ref(null),
      isOverflow: ref(false),
    };
  },
  methods: {
    navTo(test) {
      const path = this.createPathName(test.value);
      this.$router.push(`/${path}`);
      // this.$emit("overflowApp");
    },
    createPathName(str) {
      str = str.toLowerCase();
      str = str.replace(/ /g, "-");
      return str;
    },
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
  padding: 5px 0;
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
.course.test {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.test-list > span {
  width: 100%;
  padding: 8px 0;
  font-size: 1.13rem;
  font-family: inherit;
  display: flex;
  gap: 7px;
  align-items: center;
  cursor: pointer;
}
.test-list:hover {
  background-color: #dfdfe2;
}
.test-list li span {
  color: #000;
}
.test-list a {
  text-decoration: none;
  color: #000;
}

.course.test {
  margin-top: 0;
  padding: 0;
  display: none;
}
.test.open {
  display: block;
  /* flex-direction: column; */
}
.course.desc {
  cursor: pointer;
}
.course-description {
  font-size: 1.17rem;
  line-height: 1.5;
}
</style>
