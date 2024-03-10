<template>
  <div class="footer-description">
    <p v-for="desc in descripts" :key="desc.id">{{ desc }}</p>
    <p>You can <a>make a tax-deductible donation here</a></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const descripts = ref([
  "freeCodeCamp is a donor-supported tax-exempt 501(c)(3) charitable organization (United States Federal Tax Identification Number: 82-0779546).",
  "Our mission: to help people learn to code for free. We accomplish this by creating thousands of videos, articles, and interactive coding lessons - all freely available to the public.",
  "Donations to freeCodeCamp go toward our education initiatives, and help pay for servers, services, and staff.",
]);
</script>

<style scoped>
.footer-description {
  width: 50%;
  padding: 15px;
  align-self: flex-end;
}

@media (max-width: 1024px) {
  .footer-description {
    width: 100%;
  }
}
p {
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 1.45rem;
}
p:last-of-type {
  font-weight: bold;
}
p:last-of-type a {
  cursor: pointer;
  border-bottom: 1px solid #000;
}
p:last-of-type:hover a {
  border-bottom: 1px solid transparent;
}
</style>
