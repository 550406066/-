

<template>
  <!-- <div  >
    <template v-for="(node,index) in routes" v-if="!node.hidden" >
      <el-submenu :key="node.path"  :index="index+''" v-if="!node.leaf" >
        <template slot="title">
          <i :class="node.iconCls"></i>{{node.name}}</template>
        <menu-tree :routes="node.children"></menu-tree>
      </el-submenu>

      <el-menu-item v-if="node.leaf" :index="node.path"  :key="node.name"  :route="{path:node.path}">
        <i :class="node.iconCls"></i>{{node.name}}</el-menu-item>
    </template>
  </div> -->

    <div>
    <template v-for="(node,index) in routes" v-if="!node.hidden" >
      <el-submenu :index="index+''" v-if="!node.leaf"   :key="node.path">
        <template slot="title">
          <i :class="node.iconCls"></i>{{node.name}}</template>
        <menu-tree :routes="node.children"></menu-tree>
      </el-submenu >
      <!-- 这里是用:route="{name:node.name}，如果不使用name跳转的话，可以在数据源那里把path写成全路径即可 -->
      <el-menu-item v-if="node.leaf" :index="node.path" :route="{name:node.name}"  :key="node.path">
        <i :class="node.iconCls"></i>{{node.name}}</el-menu-item>
    </template>
  </div>
</template>






<script >
export default {
  name: 'MenuTree',
  data() {
    return {
    }
  },
  props: {
    routes: {
      required: true
    }
  },
    mounted() {

  }
}
</script>
