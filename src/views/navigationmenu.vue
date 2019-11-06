<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu
          default-active="helloWorld"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="helloWorld">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="nav-main">
        <el-container>
          <el-header class="nav-header">
              <el-button>登陆账号</el-button>
          </el-header>
          <el-main class="main-main">
              <router-view></router-view>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>
<style lang='less' scoped>
.el-container{
    height: 100%;
    .el-aside{
        height: 100vh;
        .el-menu{
            height: 100%;
        }
    }
    .nav-main{
        padding: 0;
        .nav-header{
            padding: 0;
        }
        .main-main{
            padding: 0;
        }
    }
}
</style>