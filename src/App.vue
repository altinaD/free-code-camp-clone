<template>
  <div id="app" :class="{ overflow: overflowApp }">
    <Header />
    <section class="main-block">
      <div class="inner-block">
        <app-intro />
        <Suspense>
          <template #default>
            <courses @overflowApp="overflowApp = !overflowApp" />
          </template>
        </Suspense>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import courses from "./components/courses.vue";
import appIntro from "./components/appIntro.vue";
import Header from "./components/header/Header.vue";
export default {
  components: {
    Header,
    appIntro,
    courses,
  },
  data() {
    return {
      overflowApp: false,
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
p {
  line-height: 1.3;
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
#app.overflow {
  height: 100vh;
  overflow: hidden;
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
.test-case {
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #f5f6f7;
  max-height: 100%;
  // overflow-y: scroll;
}
hr {
  border-top: 1px solid #d0d0d5;
  margin-bottom: 15px;
}

.left-screen {
  width: 50%;
  margin: 15px;
  border-right: 2px solid #d0d0d5;
  padding-right: 15px;
  overflow-y: scroll;
  border-right: 1px solid #62707f;
  height: 100%;
  position: relative;
}
.left-screen,
.right-screen {
  height: calc(100vh - 100px);
}
.right-screen {
  width: calc(50% - 15px);
  position: fixed;
  right: 0;
  top: 97px;
  padding: 0 35px;
  min-height: 100vh;
}

.left-screen h1,
.left-screen p {
  line-height: 1.5;
  margin: 0 0 1.2rem;
}
.left-screen h1 {
  font-weight: 700;
  font-size: 1.3rem;
  text-align: center;
  padding: 15px;
}
.left-screen p {
  font-weight: 100;
  font-size: 1.05rem;
}
.screen-divide {
  width: 100%;
  position: fixed;
  background: inherit;
  z-index: 15;
  height: 100vh;
}
</style>
