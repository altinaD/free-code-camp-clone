<template>
  <li class="search">
    <nav>
      <button>
        <SearchIcon />
      </button>
      <input type="text" placeholder="Search 9,000+ tutorials" />
    </nav>
  </li>
</template>

<script setup>
import SearchIcon from "../svgs/search-icon.vue";
</script>

<style scoped>
li input {
  font-size: 1rem;
  border: none;
  background-color: inherit;
  font-family: "Lato", sans-serif;
  width: 90%;
  color: #ffffffcc;
}

li input:focus {
  outline: none;
}

li nav {
  position: relative;
  background-color: #3b3b4f;
  padding: 4px;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  display: flex;
}

.search {
  width: 70%;
}
@media (max-width: 920px) {
  .search {
    display: none;
  }
}
::placeholder {
  color: #ffffffcc;
}
</style>
