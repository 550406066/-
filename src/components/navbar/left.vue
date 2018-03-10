

<template>
    <div >

     <el-col :span="18">
    <el-menu
   :default-active="activeMenuIndex"
      :router="true"
      class="el-menu-vertical-demo  hidden-sm-and-down fullbg"
      :collapse="isCollapse"      
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"> 
      <el-menu-item index="canvas">
        <i class="el-icon-menu"></i>
        <span slot="title">canvas</span>
      </el-menu-item>
      <el-menu-item index="table">
        <i class="el-icon-menu"></i>
        <span slot="title">表格</span>
      </el-menu-item>
      <el-menu-item index="texterea" >
        <i class="el-icon-document"></i>
        <span slot="title">富文本</span>
      </el-menu-item>
      <el-menu-item index="form">
        <i class="el-icon-setting"></i>
        <span slot="title">表单</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      isCollapse: false
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },

  computed: {
    activeMenuIndex() {
      return this.$route.name;
    }
  },

  watch: {
    screenWidth(val) {
      if (this.screenWidth < 800) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    }
  }
};
</script>

<style>
.fullbg {
  height: calc(100vh - 69px);
}
</style>
