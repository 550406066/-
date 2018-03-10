

<template>
    <div>

  <el-menu
  :router=true
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-row>
  <el-col :span="2">
  <el-menu-item  index="">logo </el-menu-item>
  </el-col> 
  <el-col :offset="16" :span="2">
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="/">退出登录</el-menu-item>
    <el-menu-item index="info">个人信息</el-menu-item>

  </el-submenu>
  </el-col>
  </el-row>
</el-menu>


    </div>
</template>

<script>

export default {
    data () {
        return {
        activeIndex: '1',

        };
    },
    methods: {
  handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style>

</style>
