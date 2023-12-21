<template>
  <div class="courses-section">
    <div class="course" v-for="(course, index) in courses" :key="index">
      <h1 class="course-header" :id="courseTitle(course.title)">
        {{ course.title }}
      </h1>
      <div class="min-spacer"></div>
      <ul class="course-description">
        <li v-for="description in course.descriptions" :key="description.id">
          {{ description }}
        </li>
      </ul>
      <div class="one-px-spacer"></div>
      <div
        @click="states[index] = !states[index]"
        class="course desc"
        :key="course.id"
      >
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
          <span class="result-icon"
            ><svg
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
              </g></svg
          ></span>
          <span id="test-result">
            0 /
            {{
              Number(this.courses[this.courses.indexOf(course)].tests.length)
            }}</span
          ></span
        >
      </div>
      <ul
        class="course test"
        ref="test"
        v-show="states[index]"
        :key="course.id"
      >
        <li class="test-list" v-for="test in course.tests" :key="test.id">
          <span @click="navTo(test, course)">
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
      openState: ref(null),
      // state: ref(false),
      states: ref([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]),
    };
  },
  methods: {
    navTo(test, course) {
      const section = this.createPathName(course.title);
      const path = this.createPathName(test);
      this.$router.push(`/${section}/${path}`);
    },
    createPathName(str) {
      str = str.toLowerCase();
      str = str.replace(/ /g, "-");
      return str;
    },
    // //////////// for course toggle
    toggleOpen(id) {
      this.states[id] = !this.states[id];
    },
    courseTitle(title) {
      return this.createPathName(title);
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

@media (max-width: 620px) {
  .course .course-header {
    font-size: 1.2rem;
  }
}
li {
  font-size: 1.17rem;
  line-height: 1.5rem;
  color: #1b1b32;
  font-weight: 400;
  padding: 5px 0;
  white-space: pre-line;
}
@media (max-width: 620px) {
  li {
    font-size: 1rem;
  }
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
  right: 0;
  width: 10%;
}
.result-icon {
  position: absolute;
  right: calc(10% + 10px);
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
  display: block;
  /* display: none; */
}

/* .course.test.open {
  display: block;
} */
.course.desc {
  cursor: pointer;
}
.course-description {
  font-size: 1.17rem;
  line-height: 1.5;
}
.course-description li {
  padding-bottom: 1rem;
}
</style>
