<template>
  <div ref="resizableElement" class="right-screen">
    <div @mouseup="remove" @mousedown="resizeDiv" class="resizable"></div>
    <div class="editor-container" ref="editorConteiner">
      <monaco-editor />
    </div>
    <div class="result-container" ref="resultResizableElement">
      <div
        @mouseup="remove"
        @mousedown="resultResizeDiv"
        class="resizableY"
      ></div>
      <p>
        /** <br />
        <br />
        * Your test output will go here <br />
        <br />
        */
        {{ val }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import MonacoEditor from "./monaco-editor.vue";

const emit = defineEmits(["resizeWidth"]);

let width = ref(0),
  pageX = ref(0),
  resizableElement = ref(null),
  resultResizableElement = ref(null),
  pageY = ref(0),
  height = ref(0),
  val = ref(),
  editorConteiner = ref();

function resizeDiv(event) {
  pageX.value = event.pageX;
  width.value = resizableElement.value.getBoundingClientRect().width;
  moveAtX(event.pageX);
  document.addEventListener("mousemove", onMouseMoveX);
  document.addEventListener("mouseup", remove);
}
function resultResizeDiv(event) {
  pageY.value = event.pageY;
  height.value = resultResizableElement.value.getBoundingClientRect().height;
  moveAtY(event.pageY);
  document.addEventListener("mousemove", onMouseMoveY);
  document.addEventListener("mouseup", remove);
}
function moveAtY(ePageY) {
  let size = height.value - (ePageY - pageY.value);
  resultResizableElement.value.style.height = size + "px";
  let editor = editorConteiner.value;
  editor.style.height = window.innerHeight - size + "px";
}
const moveAtX = (ePageX) => {
  let size = width.value - (ePageX - pageX.value);
  resizableElement.value.style.width = size + "px";
  emit("resizeWidth", size);
};
function onMouseMoveX(event) {
  moveAtX(event.pageX);
}
function onMouseMoveY(event) {
  moveAtY(event.pageY);
}
function remove() {
  document.removeEventListener("mousemove", onMouseMoveX);
  document.removeEventListener("mousemove", onMouseMoveY);
}
</script>

<style scoped>
.resizable {
  cursor: col-resize;
  width: 5px;
  height: 100%;
  left: 0px;
  position: absolute;
  background: #d0d0d5;
  top: 0;
  z-index: 25;
}
.resizableY {
  cursor: row-resize;
  width: 100%;
  height: 5px;
  left: 0;
  position: absolute;
  background: #d0d0d5;
}

textarea {
  width: 100%;
  outline: none;
  border: none;
  height: 60vh;
  padding: 0 5px;
  font-size: 1rem;
}
textarea .num {
  width: 30px;
  padding-right: 5px;
}
.editor-container {
  height: 65%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}
.monaco-editor {
  width: 100%;
  padding: 0;
  margin: 0;
}
.result-container {
  height: 35%;
  bottom: 0;
  width: 100%;
  margin: 15px;
}
.result-container p {
  padding-top: 10px;
}
</style>
