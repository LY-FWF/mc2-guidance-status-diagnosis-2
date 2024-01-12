<template>
  <div>
    <!-- 导向电磁铁间隙/速度 -->
    <!-- 图表容器，需要一个固定的宽高展示图表，样式在最底部 -->
    <div class="speed1dx8"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"; //引入本地的echarts源文件，以实际路径为准
import { reactive, toRefs, onMounted, watch,onUnmounted} from "vue";
export default {
  name: "Speed1",
  props:["dianzu","jianxi"],
   setup(props,content) {
    const {dianzu,jianxi} = toRefs(props);
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
        data:[dianzu.value]
    })
    const datasource1 = reactive({
        data:[jianxi.value]
    })
    const state = reactive({
      options: {
        //配置图表的参数

        //backgroundColor: "rgb(2,22,45,0.1)", //背景色
        // title: {
        //   //标题配置
        //   text: "速度曲线",
        //   left: "4%",
        //   top: "3%",
        //   textStyle: {
        //     color: "#9FA2A7",
        //   },
        // },
        title:{
          show:false,
          text:"导向电磁铁电阻/间隙",
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
            data:["电阻20","电阻21","电阻22","电阻23"]
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
            width:150,
            pageIconSize:14,
            pageTextStyle:{
              fontSize:12,
            },
            pageIconColor:'#ffffff',
            data:["间隙20","间隙21","间隙22","间隙23"]
            //data:["MRET13速度","MRET14速度"],
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
            type: 'slider',
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
            // min: 0, //最小值
            // max: 600,
            // splitNumber: 20, //最大值// 不留白，从原点开始
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
                color: ["rgba(2, 108, 149, 0.09)"], //这里是颜色
              },
            },
            axisTick:{
               alignWithLabel:true,
            },
            axisLine:{
                show:false,
                onZero:true,//是否对应0位置
                lineStyle: {
                  color: ["rgba(2, 108, 149, 0.01)"], //这里是颜色
              },
            },
            // axisLabel: {
            //   //坐标轴的显示，
            //   interval:0,//设置后类目轴无间隔设置
            //   formatter: "{value}s",
            // },

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
            name:"电阻(Ω)",
            namelocation:"end",
            nameGap:10,
            nameTextStyle:{
              fontSize:16,
              padding:[5,30,23,20]
            },
            min:0,
            max:7600,
            splitLine: {
              //刻度线的配置 可配置颜色和样式（实线和虚线） 默认是实线
              lineStyle: {
                color: ["rgba(2, 108, 149, 0.19)"], //这里是颜色
                type:"solid",
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
          },{
            type: "value",
            position: "right", //y轴位置，左侧
            offset: -5, //向左偏移10px
            // min: 0, //最小值
            // max: 30, //最大值
            name:"间隙(mm)",
            namelocation:"end",
            nameGap:10,
            min:0,
            max:21,
            nameTextStyle:{
              fontSize:16,
              padding:[5,30,23,-3]
            },
            splitLine: {
              //刻度线的配置 可配置颜色和样式（实线和虚线） 默认是实线
              lineStyle: {
                color: ["rgba(2, 108, 149, 0.19)"], //这里是颜色
                type:"solid",
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
        ],

        series: [
          //系列，数据映射
          {
            name: "电阻20",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            symbol:"rect",
            lineStyle:{
              width:1.5
            },
            datasetIndex:0,
            yAxisIndex:0,
            //smooth: true, //折线图是否平滑
          },{
            name: "电阻21",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            lineStyle:{
              width:1.5
            },
            symbol:"rect",
            datasetIndex:0,yAxisIndex:0,
            //smooth: true, //折线图是否平滑
           },
           {
            name: "电阻22",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            symbol:"rect",
            lineStyle:{
              width:1.5
            },
            datasetIndex:0,
            yAxisIndex:0,
            //smooth: true, //折线图是否平滑
          },{
            name: "电阻23",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            lineStyle:{
              width:1.5
            },
            symbol:"rect",
            datasetIndex:0,yAxisIndex:0,
            //smooth: true, //折线图是否平滑
           },{
            name: "间隙20",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            symbol:"rect",
            lineStyle:{
              width:1.5
            },
            datasetIndex:1,
            yAxisIndex:1,
            //smooth: true, //折线图是否平滑
          },{
            name: "间隙21",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            lineStyle:{
              width:1.5
            },
            symbol:"rect",
            datasetIndex:1,yAxisIndex:1,
            //smooth: true, //折线图是否平滑
           },
           {
            name: "间隙22",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            symbol:"rect",
            lineStyle:{
              width:1.5
            },
            datasetIndex:1,
            yAxisIndex:1,
            //smooth: true, //折线图是否平滑
          },{
            name: "间隙23",
            type: "line", //图表类型，折线图
            label:{
              show:false,
            },
            lineStyle:{
              width:1.5
            },
            symbol:"rect",
            datasetIndex:1,yAxisIndex:1,
            //smooth: true, //折线图是否平滑
           },
        ],
      },
    });
    let myChart = null;
    const Handle_data =(newv)=>{
      datasource.data.push([formatDate(),newv.Mret20_dianzu,newv.Mret21_dianzu,newv.Mret22_dianzu,newv.Mret23_dianzu,])
      datasource1.data.push([formatDate(),newv1.Mret20_jianxi,newv1.Mret21_jianxi,newv1.Mret22_jianxi,newv1.Mret23_jianxi,])
      // console.log("CCCCCCCCCC")
      console.log(datasource.data)
      //state.options.dataZoom[0].start =100-(16/state.options.dataset.source.length)*100
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
                    console.log("清除定时器")
                }
                //不然就创建新的定时器
                timer11 = setTimeout(()=>{
                    fn()
                }, 1000)
   }
    watch([dianzu,jianxi],()=>{
            if(datasource.data.length<500){
                datasource.data.push([dianzu.value[0],dianzu.value[1],dianzu.value[2],dianzu.value[3]])
            }else{
                datasource.data.shift()
                datasource.data.push([dianzu.value[0],dianzu.value[1],dianzu.value[2],dianzu.value[3]])
            }
            if(datasource1.data.length<500){
                datasource1.data.push([jianxi.value[0],jianxi.value[1],jianxi.value[2],jianxi.value[3]])
            }else{
                datasource1.data.shift()
                datasource1.data.push([jianxi.value[0],jianxi.value[1],jianxi.value[2],jianxi.value[3]])
            }
            Bounce(changeState)
    },{deep:true})
    // setInterval(() => {
    //   Handle_data(dianzu.value.Mret20_dianzu,speed.value.Mret12_speed)
    // },1000)
    onMounted(() => {
        myChart = echarts.init(document.querySelector(".speed1dx8"));
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
.speed1dx8 {
  width: 430px;
  height: 194px;
  margin: 1px auto;
}
</style>
