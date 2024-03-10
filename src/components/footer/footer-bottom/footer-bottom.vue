<template>
  <h2>Our Charity</h2>
  <ul class="nonprofit">
    <li v-for="link in links" :key="link.id">{{ link }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const links = ref([
  "About",
  "Alumni Network",
  "Open Source",
  "Shop",
  "Support",
  "Sponsors",
  "Academic Honesty",
  "Code of Conduct",
  "Privacy Policy",
  "Terms of Service",
  "Copyright Policy",
]);
</script>

<style scoped>
@media (min-width: 1200px) {
  h2 {
    visibility: hidden;
  }
}
.nonprofit {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media (min-width: 1200px) {
  .nonprofit {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
}

.nonprofit li {
  margin: 0 10px;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: 1px solid transparent;
}
@media (min-width: 800px) {
  .nonprofit li {
    margin: 0 5px;
  }
}
.nonprofit li:hover {
  border-bottom: 1px solid #000;
}
</style>
