

<template>
    <div>
        <top></top> 
     <el-col :span="4">
<left></left>
    </el-col>
        <router-view/>
  
    </div>
</template>

<script>
import top from './navbar/top.vue'
import left from './navbar/left.vue'
export default {
    data () {
        return {

        };
    },
       components: {
      left,top
    },

    methods: {
  handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style>

</style>
