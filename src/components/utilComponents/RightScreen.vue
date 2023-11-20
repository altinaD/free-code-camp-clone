<template>
  <div ref="resizableElement" class="right-screen">
    <div @mouseup="remove" @mousedown="resizeDiv" class="resizable"></div>
    <div class="editor-container" ref="editorConteiner">
      <div id="editor" ref="editor"></div>
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
      </p>
    </div>
  </div>
</template>

<script>
import loader from "@monaco-editor/loader";
// import editor from "monaco-editor";
import { ref } from "vue";
export default {
  name: "Editor",
  async mounted() {
    loader.init().then((monaco) => {
      const editorOptions = {
        language: "javascript",
        minimap: { enabled: false },
      };
      monaco.editor.create(document.getElementById("editor"), editorOptions);
    });
  },
  data() {
    return {
      resWidth: ref(null),
      width: 0,
      pageX: 0,
      resizableElement: null,
      content: ref(),
      //////////////
      resultResizableElement: null,
      pageY: 0,
      height: 0,
    };
  },
  components: {},
  methods: {
    resizeDiv(event) {
      this.resizableElement = this.$refs.resizableElement;
      this.pageX = event.pageX;
      this.width = this.resizableElement.getBoundingClientRect().width;
      this.moveAtX(event.pageX);
      document.addEventListener("mousemove", this.onMouseMoveX);
      document.addEventListener("mouseup", this.remove);
    },
    resultResizeDiv(event) {
      this.resultResizableElement = this.$refs.resultResizableElement;
      this.pageY = event.pageY;
      this.height = this.resultResizableElement.getBoundingClientRect().height;
      this.moveAtY(event.pageY);
      document.addEventListener("mousemove", this.onMouseMoveY);
      document.addEventListener("mouseup", this.remove);
    },
    moveAtY(pageY) {
      let size = this.height - (pageY - this.pageY);
      this.resultResizableElement.style.height = size + "px";
      let editor = this.$refs.editorConteiner;
      editor.style.height = window.innerHeight - size + "px";
    },
    moveAtX(pageX) {
      let size = this.width - (pageX - this.pageX);
      this.resizableElement.style.width = size + "px";
      this.$emit("resizeWidth", size);
    },
    onMouseMoveX(event) {
      this.moveAtX(event.pageX);
    },
    onMouseMoveY(event) {
      this.moveAtY(event.pageY);
    },
    remove() {
      document.removeEventListener("mousemove", this.onMouseMoveX);
      // this.resWidth = null;
      document.removeEventListener("mousemove", this.onMouseMoveY);
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
#editor {
  width: 100%;
  height: 100%;
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
