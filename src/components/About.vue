<template>
  <div>
    <el-button @click="getdata()">请求数据试试看</el-button>
    <p>{{message}}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Mydataquery extends Vue {
  message: string = "我就做个测试试试看";
  getdata() {
      console.log(this);
      
    let url: string = "/get123";
    this.$axios.get(url).then((res:any) => {
      console.log(res);
    });
  }
}
</script>
<style lang='less' scoped>
</style>