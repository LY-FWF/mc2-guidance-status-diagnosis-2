<script>
import { onMounted, reactive, onUnmounted, ref, inject } from 'vue';//组件导入
import getDate from './js/time.js'//导入时间函数
import Speed1dx5 from "./components/Speed1dx5.vue"
import Speed1dx6 from "./components/Speed1dx6.vue";
import Speed1dx7 from "./components/Speed1dx7.vue";
import Speed1dx8 from "./components/Speed1dx8.vue";
import Speed2dx5 from "./components/Speed2dx5.vue";
import Speed2dx6 from "./components/Speed2dx6.vue";
import Speed2dx7 from "./components/Speed2dx7.vue";
import Speed2dx8 from "./components/Speed2dx8.vue";
import Speed3dx5 from "./components/Speed3dx5.vue";
import Speed3dx6 from "./components/Speed3dx6.vue";
import Speed3dx7 from "./components/Speed3dx7.vue";
import Speed3dx8 from "./components/Speed3dx8.vue";
export default {
	name: 'HomeView',
	components: {
		Speed1dx5,
		Speed1dx6,
		Speed1dx7,
		Speed1dx8,
		Speed2dx5,
		Speed2dx6,
		Speed2dx7,
		Speed2dx8,
		Speed3dx5,
		Speed3dx6,
		Speed3dx7,
		Speed3dx8,
	},

	setup() {
		const worker = inject('worker')
		let flag, flag1, flag2
		const base = reactive
			({
				msg: 0,//基础数据接驳
				symple: 0,//报文标志位
				trainNumber: "",//列车号
				carriageNumber: "",//车厢号
			})

		const x_speeddx = reactive({
			dxarray11_dianzu: [0, 0, 0, 0],
			dxarray12_dianliu: [0, 0, 0, 0],
			dxarray12_jianxi: [0, 0, 0, 0],
			dxarray13_speed: [0, 0, 0, 0],
			dxarray14_dianya: [0, 0, 0, 0],
			dxarray14_acc: [0, 0, 0, 0],
			dxarray15_speed: [0, 0, 0, 0],
		}
		)
		const x_speeddx2 = reactive({
			dxarray11_dianzu: [0, 0, 0, 0],
			dxarray12_dianliu: [0, 0, 0, 0],
			dxarray12_jianxi: [0, 0, 0, 0],
			dxarray13_speed: [0, 0, 0, 0],
			dxarray14_dianya: [0, 0, 0, 0],
			dxarray14_acc: [0, 0, 0, 0],
			dxarray15_speed: [0, 0, 0, 0],
		}
		)

		const x_speeddx3 = reactive({
			dxarray11_dianzu: [0, 0, 0, 0],
			dxarray12_dianliu: [0, 0, 0, 0],
			dxarray12_jianxi: [0, 0, 0, 0],
			dxarray13_speed: [0, 0, 0, 0],
			dxarray14_dianya: [0, 0, 0, 0],
			dxarray14_acc: [0, 0, 0, 0],
			dxarray15_speed: [0, 0, 0, 0],
		}
		)

		const x_speeddx4 = reactive({
			dxarray11_dianzu: [0, 0, 0, 0],
			dxarray12_dianliu: [0, 0, 0, 0],
			dxarray12_jianxi: [0, 0, 0, 0],
			dxarray13_speed: [0, 0, 0, 0],
			dxarray14_dianya: [0, 0, 0, 0],
			dxarray14_acc: [0, 0, 0, 0],
			dxarray15_speed: [0, 0, 0, 0],
		}
		)

		const TimeData = reactive({
			nowTime: "",
			nowWeek: "",
		})

		const colorSig = (sig) => {
			if (sig) {
				return "#00ffff";
			} else {
				return '#00657F';
			};
		}

		function timeToString(timeObj) {
			var str = "";
			var year = timeObj.getFullYear();
			var month = timeObj.getMonth();
			var date = timeObj.getDate();
			var time = timeObj.toTimeString().split(" ")[0];
			str = time;
			console.log("------当前日期：" + str);
			return str;
		}
		//增加时间
		const addTime = (num) => {
			var curTime = new Date()
			console.log(curTime)
			var addSeconds = new Date(curTime.setSeconds(curTime.getSeconds() + num));
			return addSeconds
		}

		const formatDate = () => {
			var date = new Date()// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
			var hour = ('0' + date.getHours()).slice(-2)
			var minute = ('0' + date.getMinutes()).slice(-2)
			var second = ('0' + date.getSeconds()).slice(-2)
			var milsec = date.getMilliseconds()
			// 拼接
			var result = hour + ':' + minute + ':' + second
			// 返回
			return result
		}
		//获取当前时间
		const currentTime = () => {
			setInterval(() => {
				TimeData.nowTime = getDate().nowTime;
				TimeData.nowWeek = getDate().nowWeek;
				////console.log(TimeData)
			}, 1000)
		};
		onMounted(() => {
			flag = formatDate()
			flag1 = formatDate()
			flag2 = formatDate()
			currentTime()
			worker.onmessage = (event) => {
				const message = event.data;
				// 在这里处理接收到的消息
				var data_state = JSON.parse(message)//转换为双层对象
				var symple = data_state.symple // 定义标志位并赋值
				console.log(symple)
				console.log(data_state)
				switch (symple) {
					case "02":
						console.log("AQEQEQEQEQEQEQEQEQWEQEQEQEQ")
						var dianzu_mref_th1 = data_state.dianzu_mref//双层对象替换为单层对象
						console.log(dianzu_mref_th1)

						var speed_mref_th1 = data_state.speed_mref
						//console.log(x_Speedmref)
						var dianliu1_mref_th1 = data_state.dianliu1_mref
						//console.log(x_DianLiu1Mret)
						var dianliu2_mref_th1 = data_state.dianliu2_mref
						//console.log(x_DianLiu2Mret)
						var dianya_mref_th1 = data_state.dianya_mref
						//console.log(x_Dianyamref)
						var jiasudu1_mref_th1 = data_state.jiasudu1_mref
						//console.log(x_Jiasudu1mref)
						var jiasudu2_mref_th1 = data_state.jiasudu2_mref
						//console.log(x_Jiasudu2mref)
						var jianxi_mref_th1 = data_state.jianxi_mref
						//console.log(x_Jianximref)
						if (formatDate() > flag) {
							x_speeddx.dxarray11_dianzu = [formatDate(), dianzu_mref_th1.mref8, dianzu_mref_th1.mref9, dianzu_mref_th1.mref10, dianzu_mref_th1.mref11]
							x_speeddx.dxarray12_dianliu = [formatDate(), dianliu2_mref_th1.mref8, dianliu2_mref_th1.mref9, dianliu2_mref_th1.mref10, dianliu2_mref_th1.mref11]
							x_speeddx.dxarray12_jianxi = [formatDate(), jianxi_mref_th1.mref8, jianxi_mref_th1.mref9, jianxi_mref_th1.mref10, jianxi_mref_th1.mref11]
							x_speeddx.dxarray13_speed = [formatDate(), speed_mref_th1.mref8, speed_mref_th1.mref9, speed_mref_th1.mref10, speed_mref_th1.mref11]
							x_speeddx.dxarray14_dianya = [formatDate(), dianya_mref_th1.mref8, dianya_mref_th1.mref9, dianya_mref_th1.mref10, dianya_mref_th1.mref11]
							x_speeddx.dxarray14_acc = [formatDate(), jiasudu2_mref_th1.mref8, jiasudu2_mref_th1.mref9, jiasudu2_mref_th1.mref10, jiasudu2_mref_th1.mref11]
							x_speeddx.dxarray15_speed = [formatDate(), speed_mref_th1.mref8, speed_mref_th1.mref9, speed_mref_th1.mref10, speed_mref_th1.mref11]

							x_speeddx2.dxarray11_dianzu = [formatDate(), dianzu_mref_th1.mref12, dianzu_mref_th1.mref13, dianzu_mref_th1.mref14, dianzu_mref_th1.mref15]
							x_speeddx2.dxarray12_dianliu = [formatDate(), dianliu2_mref_th1.mref12, dianliu2_mref_th1.mref13, dianliu2_mref_th1.mref14, dianliu2_mref_th1.mref15]
							x_speeddx2.dxarray12_jianxi = [formatDate(), jianxi_mref_th1.mref12, jianxi_mref_th1.mref13, jianxi_mref_th1.mref14, jianxi_mref_th1.mref15]
							x_speeddx2.dxarray13_speed = [formatDate(), speed_mref_th1.mref12, speed_mref_th1.mref13, speed_mref_th1.mref14, speed_mref_th1.mref15]
							x_speeddx2.dxarray14_dianya = [formatDate(), dianya_mref_th1.mref12, dianya_mref_th1.mref13, dianya_mref_th1.mref14, dianya_mref_th1.mref15]
							x_speeddx2.dxarray14_acc = [formatDate(), jiasudu2_mref_th1.mref12, jiasudu2_mref_th1.mref13, jiasudu2_mref_th1.mref14, jiasudu2_mref_th1.mref15]
							x_speeddx2.dxarray15_speed = [formatDate(), speed_mref_th1.mref12, speed_mref_th1.mref13, speed_mref_th1.mref14, speed_mref_th1.mref15]

							x_speeddx3.dxarray11_dianzu = [formatDate(), dianzu_mref_th1.mref24, dianzu_mref_th1.mref25, dianzu_mref_th1.mref26, dianzu_mref_th1.mref27]
							x_speeddx3.dxarray12_dianliu = [formatDate(), dianliu2_mref_th1.mref24, dianliu2_mref_th1.mref25, dianliu2_mref_th1.mref26, dianliu2_mref_th1.mref27]
							x_speeddx3.dxarray12_jianxi = [formatDate(), jianxi_mref_th1.mref24, jianxi_mref_th1.mref25, jianxi_mref_th1.mref26, jianxi_mref_th1.mref27]
							x_speeddx3.dxarray13_speed = [formatDate(), speed_mref_th1.mref24, speed_mref_th1.mref25, speed_mref_th1.mref26, speed_mref_th1.mref27]
							x_speeddx3.dxarray14_dianya = [formatDate(), dianya_mref_th1.mref24, dianya_mref_th1.mref25, dianya_mref_th1.mref26, dianya_mref_th1.mref27]
							x_speeddx3.dxarray14_acc = [formatDate(), jiasudu2_mref_th1.mref24, jiasudu2_mref_th1.mref25, jiasudu2_mref_th1.mref26, jiasudu2_mref_th1.mref27]
							x_speeddx3.dxarray15_speed = [formatDate(), speed_mref_th1.mref24, speed_mref_th1.mref25, speed_mref_th1.mref26, speed_mref_th1.mref27]

							x_speeddx4.dxarray11_dianzu = [formatDate(), dianzu_mref_th1.mref28, dianzu_mref_th1.mref29, dianzu_mref_th1.mref30, dianzu_mref_th1.mref31]
							x_speeddx4.dxarray12_dianliu = [formatDate(), dianliu2_mref_th1.mref28, dianliu2_mref_th1.mref29, dianliu2_mref_th1.mref30, dianliu2_mref_th1.mref31]
							x_speeddx4.dxarray12_jianxi = [formatDate(), jianxi_mref_th1.mref28, jianxi_mref_th1.mref29, jianxi_mref_th1.mref30, jianxi_mref_th1.mref31]
							x_speeddx4.dxarray13_speed = [formatDate(), speed_mref_th1.mref28, speed_mref_th1.mref29, speed_mref_th1.mref30, speed_mref_th1.mref31]
							x_speeddx4.dxarray14_dianya = [formatDate(), dianya_mref_th1.mref28, dianya_mref_th1.mref29, dianya_mref_th1.mref30, dianya_mref_th1.mref31]
							x_speeddx4.dxarray14_acc = [formatDate(), jiasudu2_mref_th1.mref28, jiasudu2_mref_th1.mref29, jiasudu2_mref_th1.mref30, jiasudu2_mref_th1.mref31]
							x_speeddx4.dxarray15_speed = [formatDate(), speed_mref_th1.mref28, speed_mref_th1.mref29, speed_mref_th1.mref30, speed_mref_th1.mref31]
							flag = timeToString(addTime(1))
						}
						break;
				}
			}
		})
		onUnmounted(() => {
			if (getDate) {
				clearInterval(getDate) // 在Vue实例销毁前，清除时间定时器
			}
		})
		return {
			TimeData,
			x_speeddx,
			x_speeddx2,
			x_speeddx3,
			x_speeddx4,
			base,
			colorSig
		};
	}
}
</script>

<template>
	<svg class="block" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1920 1080" version="1.1"
		xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

		<defs>
			<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
				<stop stop-color="#0E74B7" stop-opacity="0.583749624" offset="0%"></stop>
				<stop stop-color="#1896E8" stop-opacity="0.147807515" offset="100%"></stop>
			</linearGradient>
			<linearGradient x1="50%" y1="36.2928152%" x2="50%" y2="100%" id="linearGradient-2">
				<stop stop-color="#09446F" offset="0%"></stop>
				<stop stop-color="#016CAB" offset="100%"></stop>
			</linearGradient>
			<linearGradient x1="28.1148014%" y1="99.9994492%" x2="28.1148624%" y2="-15.9417764%" id="linearGradient-3">
				<stop stop-color="#0D98FF" offset="0%"></stop>
				<stop stop-color="#0D98FF" stop-opacity="0" offset="100%"></stop>
			</linearGradient>
		</defs>
		<g id="高速磁浮导向状态诊断模块" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			<rect fill="#000000" x="0" y="0" width="1920" height="1080"></rect>
			<g id="编组-4备份-8">
				<g id="编组-3">
					<g id="编组-20">
						<rect id="矩形备份-2" fill="url(#linearGradient-1)" x="0" y="0" width="1920" height="59"></rect>
						<polyline id="路径备份" fill="url(#linearGradient-2)"
							points="1303.50685 0 1240.76712 78 678.739726 78 616 0"></polyline>
						<g id="编组" transform="translate(591.000000, 52.000000)" fill="#4EB3FE">
							<polygon id="矩形" points="44 0 54 0 75 26 65 26"></polygon>
							<polygon id="矩形备份" opacity="0.597190494" points="22 0 32 0 53 26 43 26"></polygon>
							<polygon id="矩形备份-3" opacity="0.310084025" points="-9.09522457e-13 0 10 0 31 26 21 26">
							</polygon>
						</g>
						<g id="编组备份"
							transform="translate(1295.500000, 65.000000) scale(-1, 1) translate(-1295.500000, -65.000000) translate(1258.000000, 52.000000)"
							fill="#4EB3FE">
							<polygon id="矩形" points="44 0 54 0 75 26 65 26"></polygon>
							<polygon id="矩形备份" opacity="0.597190494" points="22 0 32 0 53 26 43 26"></polygon>
							<polygon id="矩形备份-3" opacity="0.310084025" points="-9.09522457e-13 0 10 0 31 26 21 26">
							</polygon>
						</g>
					</g>
					<text id="高速磁浮导向状态诊断模块" font-family="SimHei" font-size="40" font-weight="400"
						letter-spacing="1.81818182" fill="#FFFFFF">
						<tspan x="709.590909" y="55">高速磁浮导向状态诊断模块</tspan>
					</text>
				</g>
				<text fill="#ffffff" font-family="SimHei" font-size="22">
					<tspan x="1648" y="36">{{ TimeData.nowTime }}</tspan>
				</text>
				<text id="车号：CF002" font-family="PingFangSC-Regular, PingFang SC" font-size="22" font-weight="normal"
					fill="#FFFFFF">
					<tspan x="202" y="39">车号：CF002</tspan>
				</text>
				<text id="车厢：MC1" font-family="PingFangSC-Regular, PingFang SC" font-size="22" font-weight="normal"
					fill="#FFFFFF">
					<tspan x="372" y="39">车厢：MC1</tspan>
				</text>
				<g id="caret-right" class="hidden" transform="translate(344.000000, 25.000000)" fill="#FFFFFF"
					fill-rule="nonzero">
					<rect id="矩形" opacity="0" x="0" y="0" width="16" height="16"></rect>
					<path
						d="M11.184375,7.7109375 L5.234375,2.5796875 C5.0125,2.3890625 4.6875,2.5609375 4.6875,2.86875 L4.6875,13.13125 C4.6875,13.4390625 5.0125,13.6109375 5.234375,13.4203125 L11.184375,8.2890625 C11.3546875,8.1421875 11.3546875,7.8578125 11.184375,7.7109375 Z"
						id="路径"></path>
				</g>
				<g id="caret-right备份" class="hidden" transform="translate(495.000000, 23.000000)" fill="#FFFFFF"
					fill-rule="nonzero">
					<rect id="矩形" opacity="0" x="0" y="0" width="16" height="16"></rect>
					<path
						d="M11.184375,7.7109375 L5.234375,2.5796875 C5.0125,2.3890625 4.6875,2.5609375 4.6875,2.86875 L4.6875,13.13125 C4.6875,13.4390625 5.0125,13.6109375 5.234375,13.4203125 L11.184375,8.2890625 C11.3546875,8.1421875 11.3546875,7.8578125 11.184375,7.7109375 Z"
						id="路径"></path>
				</g>
				<image id="组2" x="39" y="10.3932367" width="124" height="41.2135266"
					xlink:href="data:image/png;base64,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">
				</image>

				<g id="caret-right备份-2" class="hidden" transform="translate(1881.000000, 23.000000)" fill="#FFFFFF"
					fill-rule="nonzero">
					<rect id="矩形" opacity="0" x="0" y="0" width="16" height="16"></rect>
					<path
						d="M11.184375,7.7109375 L5.234375,2.5796875 C5.0125,2.3890625 4.6875,2.5609375 4.6875,2.86875 L4.6875,13.13125 C4.6875,13.4390625 5.0125,13.6109375 5.234375,13.4203125 L11.184375,8.2890625 C11.3546875,8.1421875 11.3546875,7.8578125 11.184375,7.7109375 Z"
						id="路径"></path>
				</g>
			</g>
			<g id="编组-6备份-4" transform="translate(24.000000, 356.000000)" fill="#00A1FF" fill-opacity="0.07"
				stroke="#015A90" stroke-width="2">
				<rect id="矩形" x="1" y="1" width="1870" height="698"></rect>
			</g>
			<g id="编组-5备份-3" transform="translate(24.000000, 356.000000)">
				<rect id="矩形" fill="#0D98FF" x="0" y="0" width="3" height="38"></rect>
				<rect id="矩形备份-4" fill="url(#linearGradient-3)" opacity="0.37" x="3" y="0" width="1869" height="38"></rect>
				<text id="导向控制器状态曲线" font-family="PingFangSC-Regular, PingFang SC" font-size="20" font-weight="normal"
					fill="#FFFFFF">
					<tspan x="34" y="26">导向控制器状态曲线</tspan>
				</text>
				<g id="编组" transform="translate(1825.146667, 13.000000)" fill="#4EB3FE">
					<polygon id="矩形" opacity="0.220115298" points="11.1466667 0 16.2133333 0 26.8533333 13 21.7866667 13">
					</polygon>
					<polygon id="矩形备份" points="-4.60824712e-13 0 5.06666667 0 15.7066667 13 10.64 13"></polygon>
				</g>
				<g id="上箭头"
					transform="translate(22.000000, 19.000000) rotate(-270.000000) translate(-22.000000, -19.000000) translate(16.000000, 13.000000)"
					fill="#FFFFFF" fill-rule="nonzero">
					<rect id="矩形" opacity="0" x="0" y="0" width="12" height="12"></rect>
					<path
						d="M6.7155,3.1875 L10.33425,7.929 C10.5419684,8.2011872 10.5772501,8.56766184 10.4252743,8.874478 C10.2732984,9.18129416 9.96039265,9.37530038 9.618,9.37500035 L2.381625,9.37500035 C2.03936752,9.37500035 1.72672265,9.18089984 1.57493463,8.87414166 C1.42314661,8.56738348 1.45848879,8.20107975 1.666125,7.929 L5.284875,3.1875 C5.45513546,2.9645217 5.71963814,2.83369413 6.0001875,2.83369413 C6.28073686,2.83369413 6.54523954,2.9645217 6.7155,3.1875 Z"
						id="路径"></path>
				</g>
			</g>
			<g id="编组-8备份-10" transform="translate(48.000000, 410.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="电阻/间隙" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">电阻/间隙</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#FFBF46" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-11" transform="translate(510.000000, 410.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="电阻/间隙" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">电阻/间隙</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#FFBF46" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-12" transform="translate(972.000000, 410.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="电阻/间隙" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">电阻/间隙</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#FFBF46" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-13" transform="translate(1434.000000, 410.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="电阻/间隙" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">电阻/间隙</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#FFBF46" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-20" transform="translate(48.000000, 626.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="电压/电流" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">电压/电流</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#00A1FF" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-24" transform="translate(48.000000, 842.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="速度/加速度" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">速度/加速度</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#00A1FF" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-25" transform="translate(510.000000, 842.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="速度/加速度" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">速度/加速度</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#00A1FF" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-26" transform="translate(972.000000, 842.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="速度/加速度" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">速度/加速度</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#00A1FF" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-27" transform="translate(1434.000000, 842.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="速度/加速度" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">速度/加速度</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#00A1FF" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-21" transform="translate(510.000000, 626.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="电压/电流" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">电压/电流</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#00A1FF" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-22" transform="translate(972.000000, 626.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="电压/电流" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">电压/电流</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#00A1FF" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-8备份-23" transform="translate(1434.000000, 626.000000)">
				<rect id="矩形" stroke="#00A1FF" opacity="0.500722976" x="0.5" y="0.5" width="437" height="199"></rect>
				<text id="电压/电流" class="hidden" font-family="PingFangSC-Regular, PingFang SC" font-size="16"
					font-weight="normal" fill="#FFFFFF">
					<tspan x="9" y="28.3602484">电压/电流</tspan>
				</text>
				<g id="编组-8备份-7" class="hidden" transform="translate(9.000000, 45.969403)">
					<line x1="418.507024" y1="118.065169" x2="13.2806697" y2="118.065169" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square"></line>
					<line x1="418.507024" y1="68.2924526" x2="13.2806697" y2="68.2924526" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<line x1="418.507024" y1="10.635419" x2="13.2806697" y2="10.635419" id="直线-7备份-5" stroke="#ACCFF1"
						opacity="0.35" stroke-linecap="square" stroke-dasharray="4"></line>
					<text id="0备份" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="118.271667">0</tspan>
					</text>
					<text id="00:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="13.3250883" y="137.905915">00:00</tspan>
					</text>
					<text id="01:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="87.2517079" y="137.905915">01:00</tspan>
					</text>
					<text id="02:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="158.178327" y="137.905915">02:00</tspan>
					</text>
					<text id="03:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="232.104947" y="137.905915">03:00</tspan>
					</text>
					<text id="04:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="306.031567" y="137.905915">04:00</tspan>
					</text>
					<text id="05:00" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="379.958186" y="137.905915">05:00</tspan>
					</text>
					<text id="1" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="67.2394875">1</tspan>
					</text>
					<text id="2" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#749DC0">
						<tspan x="0" y="17.4223602">2</tspan>
					</text>
					<path
						d="M13.2600334,60.9586902 C20.1631081,78.3841628 28.5454131,87.0968991 38.4069484,87.0968991 C53.1992514,87.0968991 93.1384693,30.0933584 118.285384,30.0933584 C143.432299,30.0933584 171.006165,73.4716625 195.20536,73.4716625 C219.404554,73.4716625 232.679194,36.7669436 260.291492,36.7669436 C287.903791,36.7669436 295.302952,87.0968991 311.568105,87.0968991 C327.833257,87.0968991 358.61881,46.1746884 380.318102,52.4544251 C394.784297,56.6409162 407.205923,68.1884075 417.58298,87.0968991"
						id="路径-8备份-2" stroke="#00A1FF" stroke-width="2"></path>
				</g>
			</g>
			<g id="编组-6备份-5" transform="translate(24.000000, 102.000000)" fill="#00A1FF" fill-opacity="0.07"
				stroke="#015A90" stroke-width="2">
				<rect id="矩形" x="1" y="1" width="1870" height="228"></rect>
			</g>
			<g id="编组-5备份-4" transform="translate(24.000000, 102.000000)">
				<rect id="矩形" fill="#0D98FF" x="0" y="0" width="3" height="38"></rect>
				<rect id="矩形备份-4" fill="url(#linearGradient-3)" opacity="0.37" x="3" y="0" width="1869" height="38"></rect>
				<text id="左侧电磁铁模块" font-family="PingFangSC-Regular, PingFang SC" font-size="20" font-weight="normal"
					fill="#FFFFFF">
					<tspan x="34" y="26">左侧电磁铁模块</tspan>
				</text>
				<g id="编组" transform="translate(1825.146667, 13.000000)" fill="#4EB3FE">
					<polygon id="矩形" opacity="0.220115298" points="11.1466667 0 16.2133333 0 26.8533333 13 21.7866667 13">
					</polygon>
					<polygon id="矩形备份" points="-4.60824712e-13 0 5.06666667 0 15.7066667 13 10.64 13"></polygon>
				</g>
				<g id="上箭头"
					transform="translate(22.000000, 20.000000) rotate(-270.000000) translate(-22.000000, -20.000000) translate(16.000000, 14.000000)"
					fill="#FFFFFF" fill-rule="nonzero">
					<rect id="矩形" opacity="0" x="0" y="0" width="12" height="12"></rect>
					<path
						d="M6.7155,3.1875 L10.33425,7.929 C10.5419684,8.2011872 10.5772501,8.56766184 10.4252743,8.874478 C10.2732984,9.18129416 9.96039265,9.37530038 9.618,9.37500035 L2.381625,9.37500035 C2.03936752,9.37500035 1.72672265,9.18089984 1.57493463,8.87414166 C1.42314661,8.56738348 1.45848879,8.20107975 1.666125,7.929 L5.284875,3.1875 C5.45513546,2.9645217 5.71963814,2.83369413 6.0001875,2.83369413 C6.28073686,2.83369413 6.54523954,2.9645217 6.7155,3.1875 Z"
						id="路径"></path>
				</g>
			</g>
			<g id="编组-6" transform="translate(48.000000, 170.000000)">
				<rect id="矩形" fill-opacity="0.154217" fill="#0DD6FF" x="32" y="17.0984456" width="1816" height="97.119171">
				</rect>
				<g id="编组-4" transform="translate(32.000000, 0.000000)">
					<g id="编组-5" fill="#077088">
						<rect id="矩形" x="0" y="0" width="133" height="35.3385827"></rect>
					</g>
					<g id="编组-5备份-5" transform="translate(0.000000, 96.661417)" fill="#077088">
						<rect id="矩形" x="0" y="0" width="133" height="35.3385827"></rect>
					</g>
					<g id="编组-5备份" transform="translate(285.000000, 0.000000)">
						<rect id="矩形" fill="#077088" x="0" y="0" width="266" height="35.3385827"></rect>
						<line x1="133" y1="0" x2="133" y2="35.3385827" id="直线-4" stroke-opacity="0.497824929"
							stroke="#FFFFFF" stroke-width="2"></line>
					</g>
					<g id="编组-5备份-2" transform="translate(747.000000, 0.000000)">
						<rect id="矩形" fill="#077088" x="0" y="0" width="266" height="35.3385827"></rect>
						<line x1="133" y1="0" x2="133" y2="35.3385827" id="直线-4" stroke-opacity="0.503863035"
							stroke="#FFFFFF" stroke-width="2"></line>
					</g>
					<g id="编组-5备份-10" transform="translate(1209.000000, 0.000000)">
						<rect id="矩形" fill="#077088" x="0" y="0" width="266" height="35.3385827"></rect>
						<line x1="133" y1="0" x2="133" y2="35.3385827" id="直线-4" stroke-opacity="0.5" stroke="#FFFFFF"
							stroke-width="2"></line>
					</g>
					<g id="编组-5备份-11" transform="translate(1683.000000, 0.000000)" fill="#077088">
						<rect id="矩形" x="0" y="0" width="133" height="35.3385827"></rect>
					</g>
					<g id="编组-5备份-12" transform="translate(1683.000000, 96.661417)" fill="#077088">
						<rect id="矩形" x="0" y="0" width="133" height="35.3385827"></rect>
					</g>
					<g id="编组-5备份-7" transform="translate(285.000000, 96.661417)">
						<rect id="矩形" fill="#077088" x="0" y="0" width="266" height="35.3385827"></rect>
						<line x1="133" y1="0" x2="133" y2="35.3385827" id="直线-4" stroke-opacity="0.49801529"
							stroke="#FFFFFF" stroke-width="2"></line>
					</g>
					<g id="编组-5备份-8" transform="translate(747.000000, 96.661417)">
						<rect id="矩形" fill="#077088" x="0" y="0" width="266" height="35.3385827"></rect>
						<line x1="133" y1="0" x2="133" y2="35.3385827" id="直线-4" stroke-opacity="0.5" stroke="#FFFFFF"
							stroke-width="2"></line>
					</g>
					<g id="编组-5备份-9" transform="translate(1209.000000, 96.661417)">
						<rect id="矩形" fill="#077088" x="0" y="0" width="266" height="35.3385827"></rect>
						<line x1="133" y1="0" x2="133" y2="35.3385827" id="直线-4" stroke-opacity="0.5" stroke="#FFFFFF"
							stroke-width="2"></line>
					</g>
					<text id="T0R" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="52" y="51.5142857">T0R</tspan>
					</text>
					<text id="T1R" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="343" y="51.5142857">T1R</tspan>
					</text>
					<text id="T2R" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="470" y="51.5142857">T2R</tspan>
					</text>
					<text id="T3R" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="809" y="51.5142857">T3R</tspan>
					</text>
					<text id="T4R" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="936" y="51.5142857">T4R</tspan>
					</text>
					<text id="T5R" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="1261" y="51.5142857">T5R</tspan>
					</text>
					<text id="T6R" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="1401" y="51.5142857">T6R</tspan>
					</text>
					<text id="T7R" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="1741" y="51.5142857">T7R</tspan>
					</text>
					<text id="T0L" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="52" y="90.4857143">T0L</tspan>
					</text>
					<text id="T1L" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="343" y="90.4857143">T1L</tspan>
					</text>
					<text id="T2L" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="470" y="90.4857143">T2L</tspan>
					</text>
					<text id="T3L" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="809" y="90.4857143">T3L</tspan>
					</text>
					<text id="T4L" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="936" y="90.4857143">T4L</tspan>
					</text>
					<text id="T5L" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="1261" y="90.4857143">T5L</tspan>
					</text>
					<text id="T7L" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="1401" y="90.4857143">T7L</tspan>
					</text>
					<text id="T7L" font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal"
						fill="#FFFFFF">
						<tspan x="1741" y="90.4857143">T7L</tspan>
					</text>
				</g>
				<text id="一-位-端" font-family="PingFangSC-Regular, PingFang SC" font-size="16" font-weight="normal"
					fill="#FFFFFF">
					<tspan x="0" y="38.5025907">一</tspan>
					<tspan x="0" y="65.5025907">位</tspan>
					<tspan x="0" y="92.5025907">端</tspan>
				</text>
			</g>
		</g>
		<foreignObject width="100%" height="100%">
			<div class="SpeedStyle0">
				<Speed1dx5 :dianzu="x_speeddx.dxarray11_dianzu" :jianxi="x_speeddx.dxarray12_jianxi" />
			</div>
			<div class="SpeedStyle1">
				<Speed1dx6 :dianzu="x_speeddx2.dxarray11_dianzu" :jianxi="x_speeddx2.dxarray12_jianxi" />
			</div>
			<div class="SpeedStyle2">
				<Speed1dx7 :dianzu="x_speeddx3.dxarray11_dianzu" :jianxi="x_speeddx3.dxarray12_jianxi" />
			</div>
			<div class="SpeedStyle3">
				<Speed1dx8 :dianzu="x_speeddx4.dxarray11_dianzu" :jianxi="x_speeddx4.dxarray12_jianxi" />
			</div>
			<div class="SpeedStyle11">
				<Speed2dx5 :dianya="x_speeddx.dxarray14_dianya" :dianliu="x_speeddx.dxarray12_dianliu" />
			</div>
			<div class="SpeedStyle12">
				<Speed2dx6 :dianya="x_speeddx2.dxarray14_dianya" :dianliu="x_speeddx2.dxarray12_dianliu" />
			</div>
			<div class="SpeedStyle13">
				<Speed2dx7 :dianya="x_speeddx3.dxarray14_dianya" :dianliu="x_speeddx3.dxarray12_dianliu" />
			</div>
			<div class="SpeedStyle14">
				<Speed2dx8 :dianya="x_speeddx4.dxarray14_dianya" :dianliu="x_speeddx4.dxarray12_dianliu" />
			</div>
			<div class="SpeedStyle21">
				<Speed3dx5 :speed="x_speeddx.dxarray13_speed" :acc="x_speeddx.dxarray14_acc" />
			</div>
			<div class="SpeedStyle22">
				<Speed3dx6 :speed="x_speeddx2.dxarray13_speed" :acc="x_speeddx2.dxarray14_acc" />
			</div>
			<div class="SpeedStyle23">
				<Speed3dx7 :speed="x_speeddx3.dxarray13_speed" :acc="x_speeddx3.dxarray14_acc" />
			</div>
			<div class="SpeedStyle24">
				<Speed3dx8 :speed="x_speeddx4.dxarray13_speed" :acc="x_speeddx4.dxarray14_acc" />
			</div>
		</foreignObject>
	</svg>
</template>

<style scoped>
.SpeedStyle0 {
	position: absolute;
	top: 416px;
	left: 50px;
}

.SpeedStyle1 {
	position: absolute;
	top: 416px;
	left: 510px;
}

.SpeedStyle2 {
	position: absolute;
	top: 416px;
	left: 972px;
}

.SpeedStyle3 {
	position: absolute;
	top: 416px;
	left: 1434px;
}

.SpeedStyle11 {
	position: absolute;
	top: 632px;
	left: 50px;
}

.SpeedStyle12 {
	position: absolute;
	top: 632px;
	left: 510px;
}

.SpeedStyle13 {
	position: absolute;
	top: 632px;
	left: 972px;
}

.SpeedStyle14 {
	position: absolute;
	top: 632px;
	left: 1434px;
}

.SpeedStyle21 {
	position: absolute;
	top: 848px;
	left: 50px;
}

.SpeedStyle22 {
	position: absolute;
	top: 848px;
	left: 510px;
}

.SpeedStyle23 {
	position: absolute;
	top: 848px;
	left: 972px;
}

.SpeedStyle24 {
	position: absolute;
	top: 848px;
	left: 1434px;
}</style>
