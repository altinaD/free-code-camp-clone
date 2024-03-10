<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  width: 100%;
  background-color: #d0d0d5;
  border: 2px solid #1b1b32;
  color: #1b1b32;
  margin-bottom: 10px;
  padding: 6px 12px;
  font-size: 1.1rem;
}
button:hover {
  background-color: #1b1b32;
  color: #fff;
}
</style>
