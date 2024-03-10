<template>
  <div>
    <main-header />
    <nav class="test-nav">
      <ol>
        <router-link class="left" to="/"
          >JavaScript Algorithms and Data Structures</router-link
        >
        <router-link class="right" to="/">{{ title }}</router-link>
      </ol>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import mainHeader from "../header/main-header.vue";

const currentPath = ref(window.location.hash);

let title = ref(""),
  gPath = ref("");

onMounted(() => {
  let path = currentPath.value;
  let ndx = path.lastIndexOf("/");
  let res = String(path.slice(ndx + 1));
  gPath.value = "/#" + res;
  res = res.split("-");
  for (let x = 0; x < res.length; x++) {
    res[x] = res[x].charAt(0).toUpperCase() + res[x].slice(1);
  }
  res = res.join(" ");
  title.value = res;
});
</script>

<style lang="scss" scoped>
nav {
  height: 27px;
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
.left:hover,
.right:hover {
  text-decoration: underline;
}
.left::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-top: calc(27 / 2) solid transparent;
  border-bottom: calc(27 / 2) solid transparent;
  border-left: calc(27 / 2 + 1) solid #d0d0d5;
  right: calc(27 / 2);
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
  white-space: nowrap;
  font-size: 95%;
  overflow: hidden;
  text-decoration: none;
  color: #000;
}
</style>
