<template>
  <div class="guides">
    <h2 class="guide-title">Trending Guides</h2>
    <ul class="container">
      <li v-for="guide in guides" :key="guide.id">
        <a>{{ guide }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const guides = ref([
  "What is Programming?",
  "Open-Closed Principle",
  "Compare Strings in JS",
  "Python str() Function",
  "Append to Python Dict",
  "time.sleep() in Python",
  "Python Requirements.txt",
  "What is a String in JS?",
  "What's Ethical Hacking?",
  "Get Current URL with JS",
  "What is a ROM?",
  "CSS Bold Text",
  "Git Reset Hard",
  "Python Env Vars",
  "Python Set vs List",
  "JavaScript Require",
  "Python Delete File",
  "Python Sorted List",
  "Force Pull in GitHub",
  "Check Python Version",
  "Unhide Row/Column Excel",
  "Create Python Dictionary",
  "DNS Server Not Responding",
  "Set a Static IP in Ubuntu",
  "Delete Key from Dict Python",
  "Indices of a List in Python",
  "XML Formatting in Notepad++",
  "What's a Git Remote Branch?",
  "Insert into JavaScript Array",
  "Filter an Array in JavaScript",
]);
</script>

<style scoped>
.guides {
  width: 50%;
  margin-bottom: 3rem;
}
@media (max-width: 1024px) {
  .guides {
    width: 100%;
  }
}
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11em, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 0.5rem;
  white-space: pre;
}
@media (max-width: 1440px) {
  .container {
    grid-template-columns: repeat(auto-fit, minmax(13em, 1fr));
  }
}
.container li a {
  cursor: pointer;
  border-bottom: 1px solid transparent;
}
.container li a:hover {
  border-bottom: 1px solid #000;
}
</style>
