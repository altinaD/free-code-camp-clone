<template>
  <li>
    <button>
      <Path />
    </button>
  </li>
</template>

<script setup>
import { defineAsyncComponent, defineProps } from "vue";
const props = defineProps({
  pathName: {
    type: String,
    required: true,
  },
});
const Path = defineAsyncComponent(function () {
  return import(`../svgs/${props.pathName}.vue`);
});
</script>
