<template>
  <div id="editor" ref="editor"></div>
</template>

<script setup>
import loader from "@monaco-editor/loader";
import { onMounted } from "vue";

onMounted(() => {
  loader.init().then((monaco) => {
    var editor = monaco.editor.create(document.getElementById("editor"), {
      language: "javascript",
      automaticLayout: true,
      lineNumbers: "off",
      roundedSelection: false,
      scrollBeyondLastLine: false,
    });
    setTimeout(function () {
      editor.updateOptions({
        lineNumbers: "on",
      });
    }, 2000);
  });
});
</script>

<style scoped>
#editor {
  width: 100%;
  height: 100%;
}
</style>
