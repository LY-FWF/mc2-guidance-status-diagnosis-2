<template>
  <div>
    <!-- 导向电磁铁间隙/速度 -->
    <!-- 图表容器，需要一个固定的宽高展示图表，样式在最底部 -->
    <div class="speed3dx5"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"; //引入本地的echarts源文件，以实际路径为准
import { reactive, toRefs, onMounted, watch,onUnmounted} from "vue";
export default {
  name: "Speed1",
  props:["speed","acc"],
   setup(props,content) {
    const {speed,acc} = toRefs(props);
    //const colors = reactive(["#19B6A8", "#EFCF02"]);
    const formatDate = () => {
        var date = new Date()// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
        // var year = date.getFullYear()
        // var month = ('0' + (date.getMonth() + 1)).slice(-2)
        // var sdate = ('0' + date.getDate()).slice(-2)
        var hour = ('0' + date.getHours()).slice(-2)
        var minute = ('0' + date.getMinutes()).slice(-2)
        var second = ('0' + date.getSeconds()).slice(-2)
        var milsec = date.getMilliseconds()
        // 拼接
        var result = hour + ':' + minute + ':' + second
        // 返回
        return result
      }
    const datasource = reactive({
        data:[speed.value]

    })
    const datasource1 = reactive({
    data:[acc.value]
    })
    const state = reactive({
      options: {
        //配置图表的参数
        backgroundColor: "rgb(2,22,45,0.1)", //背景色
        title:{
          show:false,
          text:"导向电磁铁速度/加速度",
          textStyle:{
            color:"#3ddeff",
            fontSize:15,
            fontFamily:"Microsoft YaHei",
          },
          top:-3,
          left:150,
        },
        dataset: [{
          //数据集，来源上面的数组
          source: datasource.data,
        },{
          //数据集，来源上面的数组
          source: datasource1.data,
        }],

        tooltip: {
          //提示框
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        legend:[{
            type:"scroll",
            textStyle:{
              color:"#ffffff",
              fontSize:16,
            },
            left:'12%',
            top:20,
            orient:"horizontal",
            pageButtonPosition:'end',
            width:150,
            pageIconSize:14,
            pageTextStyle:{
              fontSize:12,
            },
            pageIconColor:'#ffffff',
            data:["速度0","速度1","速度2","速度3"]
          },{
            type:"scroll",
            textStyle:{
              color:"#ffffff",
              fontSize:16,
            },
            // left:"35%",
            left:'50%',
            top:20,
            orient:"horizontal",
            pageButtonPosition:'end',
            width:154,
            pageIconSize:14,
            pageTextStyle:{
              fontSize:12,
            },
            pageIconColor:'#ffffff',
            data:["加速度0","加速度1","加速度2","加速度3",]
            //data:["MRET1速度","MRET2速度"],
          }],
          grid:{
              left:0,
              right:0,
              bottom:15,
              top:50,
              containLabel:true,
            },
        dataZoom:[
          {
            type: 'inside',
            // show: false,
            start:0,//默认为0
            end: 100,//默认为100
            filterMode: 'empty',
            bottom:15,
            height:20,
          }],
        xAxis: [
          //x轴配置
          {
            type: "category",
            boundaryGap: true,//是否留白
            name:"时间",
            nameLocation:"end",
            nameGap:0,
            nameTextStyle:{
              padding:[5,0,0,460]
            },
            interval:"auto",
            splitLine: {
              //刻度线的配置 可配置颜色和样式（实线和虚线） 默认是实线
              lineStyle: {
                color: ["rgba(2, 108, 149, 0.19)"], //这里是颜色
              },
            },
            axisTick:{
               alignWithLabel:true,
            },
            axisLine:{
                show:true,
                onZero:true,//是否对应0位置
                lineStyle: {
                  color: ["#7af3fe"], //这里是颜色
              },
            },
          },
        ],
        yAxis: [
          //y轴配置
          {
            type: "value",
            position: "left", //y轴位置，左侧
            offset: -5, //向左偏移10px
            // min: 0, //最小值
            // max: 30, //最大值
            name:"速度(km/h)",
            namelocation:"end",
            nameGap:10,
            nameTextStyle:{
              fontSize:16,
              padding:[0,0,22,45]
            },
            splitLine: {
              //刻度线的配置 可配置颜色和样式（实线和虚线） 默认是实线
              lineStyle: {
                color: ["rgba(2, 108, 149, 0.19)"], //这里是颜色
                type:"dashed",
              },
            },
            splitNumber:4, //分成几个区域，调整刻度线之间的间隔
            axisLine: {
              show: false, //不显示左边的轴线，true是展示
              symbolOffset:0,
              lineStyle: {
                color: "#7af3fe",
                width:2,
              },
            },
            axisLabel: {
              //配置坐标轴的显示，数字加单位km/h
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name:"加速度(g)",
            namelocation:"end",
            nameTextStyle:{
              fontSize:16,
              padding:[0,0,18,-15]
            },
            min:-14,
            max:14,
            splitNumber:5,
            position: "right", //y轴位置，左侧
            offset: -5, //向左偏移10px
            axisLine: {
              show: false, //不显示左边的轴线，true是展示
              symbolOffset:0,
              lineStyle: {
                color: "#7af3fe",
                width:2,
              },
            },
            splitLine: {
              //刻度线的配置 可配置颜色和样式（实线和虚线） 默认是实线
              show:false,
              lineStyle: {
                color: ["rgba(2, 108, 149, 0.19)"], //这里是颜色
                type:"solid",
              },
            },
            // inverse: true
          }
        ],

        series: [
          //系列，数据映射
          {
            name: "速度0",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            symbol:"rect",
            datasetIndex:0,
            yAxisIndex:0,
            lineStyle:{
              width:1.5
            },
            //smooth: true, //折线图是否平滑
          },{
            name: "速度1",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            symbol:"rect",
            lineStyle:{
              width:1.5
            },
            datasetIndex:0,yAxisIndex:0,
            //smooth: true, //折线图是否平滑
          },
          {
            name: "速度2",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            symbol:"rect",
            datasetIndex:0,
            yAxisIndex:0,
            lineStyle:{
              width:1.5
            },
            //smooth: true, //折线图是否平滑
          },{
            name: "速度3",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            symbol:"rect",
            lineStyle:{
              width:1.5
            },
            datasetIndex:0,yAxisIndex:0,
            //smooth: true, //折线图是否平滑
          },
          {
            name: "加速度0",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            lineStyle:{
              width:1.5
            },
            symbol:"rect",datasetIndex:1,yAxisIndex:1,
            //smooth: true, //折线图是否平滑
          },{
            name: "加速度1",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            lineStyle:{
              width:1.5
            },
            symbol:"rect",datasetIndex:1,yAxisIndex:1,
            //smooth: true, //折线图是否平滑
          },{
            name: "加速度2",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            lineStyle:{
              width:1.5
            },
            symbol:"rect",datasetIndex:1,yAxisIndex:1,
            //smooth: true, //折线图是否平滑
          },{
            name: "加速度3",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            lineStyle:{
              width:1.5
            },
            symbol:"rect",datasetIndex:1,yAxisIndex:1,
            //smooth: true, //折线图是否平滑
          },
        ],
      },
    });
      let myChart = null;
    // const Handle_data =(newv,newv1)=>{
    //   datasource.data.push([formatDate(),newv.Mret0_dianzu,newv.Mret1_dianzu,])
    //   datasource1.data.push([formatDate(),newv1.Mret0_speed,newv1.Mret0_speed,])
    //   console.log(datasource.data)
    //   console.log(datasource.data)
    //   state.options.dataZoom[0].start =100-(16/state.options.dataset[1].source.length)*100
    // }
    const Handle_data =(newv,newv1)=>{
      datasource.data.push([formatDate(),],newv.Mret0_speed,newv.Mret1_speed,newv.Mret2_speed,newv.Mret3_speed,)
      datasource1.data.push([formatDate(),newv1.Mret0_acc,newv1.Mret1_acc,newv1.Mret2_acc,newv1.Mret3_acc,])
      //state.options.dataZoom[0].start =100-(16/state.options.dataset[1].source.length)*100
    }
    function changeState(){
      if(myChart){
        myChart.setOption(state.options);
      }
      }
      let timer11 = null//watch绑定Bounce(changeState),每次触发执行赋值过程和回调函数
      function Bounce(fn){
                //如果定时器存在就清除掉
                if (timer11) {
                    clearTimeout(timer11)
                    timer11 = null
                }
                //不然就创建新的定时器
                timer11 = setTimeout(()=>{
                    fn()
                }, 1000)
   }
   watch([speed,acc],()=>{
            if(datasource.data.length<100){
                datasource.data.push([speed.value[0],speed.value[1],speed.value[2],speed.value[3]])
            }else{
                datasource.data.shift()
                datasource.data.push([speed.value[0],speed.value[1],speed.value[2],speed.value[3]])
            }
            if(datasource1.data.length<100){
                datasource1.data.push([acc.value[0],acc.value[1],acc.value[2],acc.value[3]])
            }else{
                datasource1.data.shift()
                datasource1.data.push([acc.value[0],acc.value[1],acc.value[2],acc.value[3]])
            }
            Bounce(changeState)
    },{deep:true})
    // setInterval(() => {
    //   Handle_data(dianzu.value.Mret0_dianzu,speed.value.Mret0_speed)
    // },1000)
    onMounted(() => {

        myChart = echarts.init(document.querySelector(".speed3dx5"));
      // 绘制图表
      myChart.setOption(state.options);
    });
    onUnmounted(()=>{
                if (!myChart) {
                return
            }
            // window.removeEventListener('resize', this.__resizeHandler)
            myChart.dispose()
            myChart = null
        });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.speed3dx5 {
  width: 430px;
  height: 194px;
  margin: 1px auto;
}
</style>
