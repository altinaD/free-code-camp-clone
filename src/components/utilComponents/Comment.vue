<template>
  <div class="comment">
    <span> <slot></slot></span>
  </div>
</template>

<style scoped>
.comment {
  background-color: #f5f2f0;
  padding: 1rem;
  width: 100%;
  margin: 15px 0;
  font-size: 1.12rem;
}
.comment span {
  color: #62707f;
  font-size: 1.07rem;
}
</style>
