<template>
<div>
  
 <div id="main"  ref="main" style="width: 600px;height:400px;"></div>
</div>

</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
    
  name: "HelloWorld",
  data() {
    return {
      msg: "欢迎使用后端模板",
    };
  },
mounted() {
  this.initCharts();

},
methods: {
 initCharts() {
    this.chart = echarts.init(this.$refs.main);

    this.setOptions();
  },
  setOptions() {
    this.chart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
  }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main{
    margin-left:20%
}
</style>
