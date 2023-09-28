<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
    <div class="modal-card">{{ course.tests }}</div>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eius
      deserunt numquam, corporis consectetur at aut odio sint eos modi beatae
      minima reiciendis quisquam a nulla placeat explicabo rerum velit.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    course: Object,
  },
  async setup(props, { emit }) {
    return {
      emit,
    };
  },
};
</script>

<style scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background: red;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
}
</style>
