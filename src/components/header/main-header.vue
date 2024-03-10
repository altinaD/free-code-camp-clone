<template>
  <header>
    <ul>
      <search-component />
      <nav-component pathName="logo"> </nav-component>
    </ul>
    <ul class="right-menu">
      <nav-component pathName="globe"> </nav-component>
      <li id="menu" @click.stop="isOpen = !isOpen">
        <button class="menu">Menu</button>
        <button class="burger">
          <burger />
        </button>
      </li>
      <nav-component class="no-efsfect" pathName="avatar"> </nav-component>
    </ul>
    <toggle-menu :isOpen="isOpen" />
  </header>
</template>

<script setup>
import Burger from "./svgs/burger.vue";
import SearchComponent from "./navs/search-component.vue";
import NavComponent from "./navs/nav-component.vue";
import ToggleMenu from "./navs/toggle-menu.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);

onMounted(() => {
  window.addEventListener("click", () => {
    isOpen.value = false;
  });
});
onUnmounted(() => {
  window.removeEventListener("click", () => {
    isOpen.value = false;
  });
});
</script>

<style>
header {
  background-color: #0a0a23;
  width: 100%;
  padding: 7px 15px;
  vertical-align: middle;
  display: flex;
  justify-content: space-between;
  height: 43px;
  position: relative;
}

@media (min-width: 1441px) {
  header {
    height: 60px;
  }
}

@media (max-width: 1440px) {
  header {
    height: 43px;
  }
}

header ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100%;
  width: 50%;
}
header button {
  border: none;
  background: none;
  margin: 0px 3%;
}

header button img,
header button svg {
  width: 100%;
  height: auto;
}

header button,
header li {
  cursor: pointer;
}
header .right-menu {
  width: 15%;
  position: relative;
  align-items: stretch;
  justify-content: flex-end;
  gap: 1rem;
}
header .right-menu #menu {
  z-index: 10;
}

@media (min-width: 1400px) {
  header .right-menu {
    gap: 0;
    width: 20%;
  }
}

@media (max-width: 768px) {
  header .right-menu {
    width: 25%;
  }
}

@media (max-width: 600px) {
  header .right-menu {
    gap: 0;
    justify-content: space-between;
  }
}

@media (max-width: 400px) {
  header .right-menu {
    width: 30%;
  }
}

header .right-menu li {
  width: 25%;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

@media (max-width: 600px) {
  header .right-menu li {
    width: 30%;
  }
}

header .right-menu button {
  color: #fff;
  height: 100%;
  font-size: 1rem;
  border: 1px solid #fff;
  padding: 0% 10%;
}

header .right-menu button:hover {
  background-color: #fff;
  color: #000;
}
header .right-menu .no-effect button:hover {
  background: #0a0a23;
}

header .right-menu header .right-menu button img,
header .right-menu button svg {
  width: auto;
  height: 100%;
  margin: 0 auto;
}

header .right-menu button path {
  stroke: #fff;
}

header .right-menu .burger {
  display: none;
}

@media (max-width: 600px) {
  header .right-menu .burger {
    width: 100%;
    margin: 0%;
    padding: 0;
    display: block;
  }
}

header .right-menu .burger svg {
  width: 1rem;
  height: auto;
  text-align: center;
  vertical-align: middle;
}

header .right-menu li:first-child button {
  padding: 4%;
}

header .right-menu li:first-child,
header .right-menu li:last-child {
  width: 20%;
  position: relative;
}

@media (max-width: 600px) {
  header .right-menu li:first-child,
  header .right-menu li:last-child {
    width: 30%;
  }
}

.right-menu li:last-child {
  border: none;
  height: auto;
}

.right-menu li:last-child button {
  width: 100%;
  height: 100%;
  margin: 0;
  border: none;
  padding: 0;
}

.right-menu li:last-child button svg {
  height: 100%;
  width: auto;
}

@media (max-width: 600px) {
  .menu {
    display: none;
  }
}
</style>
