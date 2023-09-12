<template>
  <div id="app">
    <Header />
    <section class="main-block">
      <div class="inner-block">
        <app-intro />
        <courses />
      </div>
    </section>
  </div>
</template>

<script>
import appIntro from "./components/appIntro.vue";
import Header from "./components/header/Header.vue";
import courses from "./components/courses.vue";
export default {
  components: {
    Header,
    appIntro,
    courses,
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
