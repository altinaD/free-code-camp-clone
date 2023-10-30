<template>
  <div ref="resizableElement" class="right-screen">
    <slot></slot>
    <!-- <QuillEditor theme="snow" /> -->
    <div @mouseup="remove" @mousedown="resizeDiv" class="resizable"></div>
  </div>
</template>

<script>
// import { QuillEditor } from "@vueup/vue-quill";
// import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref } from "vue";
export default {
  data() {
    return {
      resWidth: ref(null),
      width: 0,
      pageX: 0,
      resizableElement: null,
    };
  },
  components: {
    // QuillEditor,
  },
  methods: {
    resizeDiv(event) {
      this.resizableElement = this.$refs.resizableElement;
      this.pageX = event.pageX;
      this.width = this.resizableElement.getBoundingClientRect().width;
      this.moveAt(event.pageX);
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.remove);
    },
    moveAt(pageX) {
      let size = this.width - (pageX - this.pageX);
      this.resizableElement.style.width = size + "px";
      this.$emit("resizeWidth", size);
    },
    onMouseMove(event) {
      this.moveAt(event.pageX);
    },
    remove() {
      document.removeEventListener("mousemove", this.onMouseMove);
      this.resWidth = null;
    },
  },
};
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
}
</style>
