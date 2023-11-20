<template>
  <div class="courses-section">
    <div class="course" v-for="course in courses" :key="course.id">
      <h1 class="course-header">{{ course.title }}</h1>
      <div class="min-spacer"></div>
      <p class="course-description">{{ course.description }}</p>
      <div class="one-px-spacer"></div>
      <div @click="toggleOpen(course)" class="course desc">
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
            {{
              Number(this.courses[this.courses.indexOf(course)].tests.length)
            }}</span
          ></span
        >
      </div>
      <ul class="course test">
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
              {{ test }}
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
      const path = this.createPathName(test);
      this.$router.push(`/${path}`);
    },
    createPathName(str) {
      str = str.toLowerCase();
      str = str.replace(/ /g, "-");
      return str;
    },
    len(tsts) {
      console.log(Number(tsts.length));
      return Number(tsts.length);
    },
  },
};
</script>
