

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
      active-text-color="#ffd04b" > 
   <sidebar-item :routes="nodes"></sidebar-item>
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
import sidebarItem from "./sidebar";
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      isCollapse: false,
 	nodes: this.$router.options.routes
    };
  },
  components: { sidebarItem },
  	created() {
		//这里没有直接使用this.$router.options.routes，是因为addRoute的路由规则，在这里this.$router.options.routes获取不到
		//有兴趣的可以看一下源码，是为什么获取不到，但是却又有规则了 
		//另外在开发的时候，可能由于是热部署，也会不断重复的给nodes添加元素，造成导航条有重复的，简单解决，可以设置一个开关
		let isLoadNodes = sessionStorage.getItem('isLoadNodes')
		if (!isLoadNodes) {
			let data = JSON.parse(window.sessionStorage.getItem('user'))
			this.nodes.push(...data)
			console.log(this.nodes)
			sessionStorage.setItem('isLoadNodes', 'true')
    }
     
	},
  mounted() {
    const that = this;
    // this.nodes.push(...data)

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
