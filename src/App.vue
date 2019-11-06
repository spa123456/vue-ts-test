<template>
  <div id="app">
    <navigationmenu></navigationmenu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import navigationmenu from "./views/navigationmenu.vue";

@Component({
  components: {
    navigationmenu
  }
})
export default class App extends Vue {}

</script>

<style lang="less">
body,html{
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
