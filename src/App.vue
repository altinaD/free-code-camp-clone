<template>
  <Header />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header/Header.vue";
export default {
  name: "App",
  components: {
    Header,
    HelloWorld,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
