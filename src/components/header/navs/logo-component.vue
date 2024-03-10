<template>
  <li class="logo">
    <router-link to="/">
      <Logo />
    </router-link>
  </li>
</template>

<script setup>
import Logo from "../svgs/logo.vue";
</script>

<style scoped>
@media (max-width: 920px) {
  .logo {
    width: 50%;
  }
}

@media (max-width: 400px) {
  .logo {
    width: 90%;
  }
}
</style>
