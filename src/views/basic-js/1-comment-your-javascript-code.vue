<template>
  <div class="test">
    <Header />
    <h1>Comment your code</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, modi!
    </p>
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.test {
  background-color: #ccc;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
  z-index: 1000;
  overflow-x: hidden;
}
</style>
