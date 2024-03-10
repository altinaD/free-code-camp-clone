<template>
  <div :class="{ toggle: isOpen }" class="toggle-menu">
    <ul @click.stop>
      <li v-for="link in links" :key="link.id" :class="{ line: link.line }">
        <a>{{ link.linkName }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const links = ref([
  { line: false, linkName: "Donate" },
  { line: false, linkName: "Curriculum" },
  { line: false, linkName: "Profile" },
  { line: true, linkName: "Settings" },
  { line: false, linkName: "Forum" },
  { line: false, linkName: "News" },
  { line: false, linkName: "Radio" },
  { line: true, linkName: "Contribute" },
  { line: true, linkName: "Night Mode" },
  { line: false, linkName: "Sign out" },
]);
</script>

<style scoped>
.toggle-menu {
  position: absolute;
  display: none;
  top: 0;
  right: 0;
  min-height: 15rem;
  width: 15rem;
  background-color: #0a0a23;
  margin-top: 43px;
  color: #fff;
}

@media (min-width: 1441px) {
  .toggle-menu {
    margin-top: 60px;
  }
}

@media (max-width: 1440px) {
  .toggle-menu {
    margin-top: 43px;
  }
}
.toggle-menu.toggle {
  display: block;
}

.toggle-menu ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.toggle-menu li {
  width: 100%;
  padding: 10px 0;
}
.toggle-menu .line {
  border-bottom: 1px solid #d0d0d5;
}

.toggle-menu li:hover {
  background-color: #d0d0d5;
  color: #0a0a23;
}

.toggle-menu li a {
  padding: 15px;
  font-size: 1.14rem;
  color: inherit;
}
</style>
