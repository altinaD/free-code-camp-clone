<template>
  <Header />
  <nav class="test-nav">
    <ol>
      <router-link class="left" to="/"
        >JavaScript Algorithms and Data Structures</router-link
      >
      <router-link class="right" to="/">Basic JavaScript</router-link>
    </ol>
  </nav>
</template>

<script>
import Header from "../header/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
$navHeight: 27px;
nav {
  height: $navHeight;
}
ol {
  position: relative;
  display: flex;
  border: 1px solid #d0d0d5;
  margin: 15px;
  align-items: center;
}
.left {
  width: 55%;
  background-color: #d0d0d5;
  position: relative;
}
.left:hover {
  text-decoration: underline;
}
.left::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-top: $navHeight/2 solid transparent;
  border-bottom: $navHeight/2 solid transparent;
  border-left: ($navHeight/2 + 1) solid #d0d0d5;
  right: -$navHeight/2;
  top: 0;
}
.right {
  width: 45%;
}
.left,
.right {
  text-align: center;
  padding: 3px;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
