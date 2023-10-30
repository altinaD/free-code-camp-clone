<template>
  <div ref="resizableElement">
    <slot></slot>
    <!-- <div @mouseup="remove" @mousedown="resizeDiv" class="resizable"></div> -->
  </div>
</template>
<!-- 
<script>
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
      let size = this.width + (pageX - this.pageX);
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
  right: 0;
  position: absolute;
  background: red;
  top: 50%;
  transform: translateY(-50%);
}
</style> -->
