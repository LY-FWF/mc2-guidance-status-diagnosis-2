<script>
import { onMounted, reactive, onUnmounted, ref, inject, computed } from 'vue';//组件导入
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
			// console.log("------当前日期：" + str);
			return str;
		}
		//增加时间
		const addTime = (num) => {
			var curTime = new Date()
			// console.log(curTime)
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
		// onMounted(() => {
		// 	flag = formatDate()
		// 	flag1 = formatDate()
		// 	flag2 = formatDate()
		// 	currentTime()
		// 	worker.onmessage = (event) => {
		// 		const message = event.data;
		// 		// 在这里处理接收到的消息
		// 		var data_state = JSON.parse(message)//转换为双层对象
		// 		var symple = data_state.symple // 定义标志位并赋值
		// 		// console.log(symple)
		// 		// console.log(data_state)
		// 		switch (symple) {
		// 			case "02":
		// 				var dianzu_mref_th1 = data_state.dianzu_mref//双层对象替换为单层对象
		// 				// console.log(dianzu_mref_th1)

		// 				var speed_mref_th1 = data_state.speed_mref
		// 				//console.log(x_Speedmref)
		// 				var dianliu1_mref_th1 = data_state.dianliu1_mref
		// 				//console.log(x_DianLiu1Mret)
		// 				var dianliu2_mref_th1 = data_state.dianliu2_mref
		// 				//console.log(x_DianLiu2Mret)
		// 				var dianya_mref_th1 = data_state.dianya_mref
		// 				//console.log(x_Dianyamref)
		// 				var jiasudu1_mref_th1 = data_state.jiasudu1_mref
		// 				//console.log(x_Jiasudu1mref)
		// 				var jiasudu2_mref_th1 = data_state.jiasudu2_mref
		// 				//console.log(x_Jiasudu2mref)
		// 				var jianxi_mref_th1 = data_state.jianxi_mref
		// 				//console.log(x_Jianximref)
		// 				if (formatDate() > flag) {
		// 					x_speeddx.dxarray11_dianzu = [formatDate(), dianzu_mref_th1.mref8, dianzu_mref_th1.mref9, dianzu_mref_th1.mref10, dianzu_mref_th1.mref11]
		// 					x_speeddx.dxarray12_dianliu = [formatDate(), dianliu2_mref_th1.mref8, dianliu2_mref_th1.mref9, dianliu2_mref_th1.mref10, dianliu2_mref_th1.mref11]
		// 					x_speeddx.dxarray12_jianxi = [formatDate(), jianxi_mref_th1.mref8, jianxi_mref_th1.mref9, jianxi_mref_th1.mref10, jianxi_mref_th1.mref11]
		// 					x_speeddx.dxarray13_speed = [formatDate(), speed_mref_th1.mref8, speed_mref_th1.mref9, speed_mref_th1.mref10, speed_mref_th1.mref11]
		// 					x_speeddx.dxarray14_dianya = [formatDate(), dianya_mref_th1.mref8, dianya_mref_th1.mref9, dianya_mref_th1.mref10, dianya_mref_th1.mref11]
		// 					x_speeddx.dxarray14_acc = [formatDate(), jiasudu2_mref_th1.mref8, jiasudu2_mref_th1.mref9, jiasudu2_mref_th1.mref10, jiasudu2_mref_th1.mref11]
		// 					x_speeddx.dxarray15_speed = [formatDate(), speed_mref_th1.mref8, speed_mref_th1.mref9, speed_mref_th1.mref10, speed_mref_th1.mref11]

		// 					x_speeddx2.dxarray11_dianzu = [formatDate(), dianzu_mref_th1.mref12, dianzu_mref_th1.mref13, dianzu_mref_th1.mref14, dianzu_mref_th1.mref15]
		// 					x_speeddx2.dxarray12_dianliu = [formatDate(), dianliu2_mref_th1.mref12, dianliu2_mref_th1.mref13, dianliu2_mref_th1.mref14, dianliu2_mref_th1.mref15]
		// 					x_speeddx2.dxarray12_jianxi = [formatDate(), jianxi_mref_th1.mref12, jianxi_mref_th1.mref13, jianxi_mref_th1.mref14, jianxi_mref_th1.mref15]
		// 					x_speeddx2.dxarray13_speed = [formatDate(), speed_mref_th1.mref12, speed_mref_th1.mref13, speed_mref_th1.mref14, speed_mref_th1.mref15]
		// 					x_speeddx2.dxarray14_dianya = [formatDate(), dianya_mref_th1.mref12, dianya_mref_th1.mref13, dianya_mref_th1.mref14, dianya_mref_th1.mref15]
		// 					x_speeddx2.dxarray14_acc = [formatDate(), jiasudu2_mref_th1.mref12, jiasudu2_mref_th1.mref13, jiasudu2_mref_th1.mref14, jiasudu2_mref_th1.mref15]
		// 					x_speeddx2.dxarray15_speed = [formatDate(), speed_mref_th1.mref12, speed_mref_th1.mref13, speed_mref_th1.mref14, speed_mref_th1.mref15]

		// 					x_speeddx3.dxarray11_dianzu = [formatDate(), dianzu_mref_th1.mref24, dianzu_mref_th1.mref25, dianzu_mref_th1.mref26, dianzu_mref_th1.mref27]
		// 					x_speeddx3.dxarray12_dianliu = [formatDate(), dianliu2_mref_th1.mref24, dianliu2_mref_th1.mref25, dianliu2_mref_th1.mref26, dianliu2_mref_th1.mref27]
		// 					x_speeddx3.dxarray12_jianxi = [formatDate(), jianxi_mref_th1.mref24, jianxi_mref_th1.mref25, jianxi_mref_th1.mref26, jianxi_mref_th1.mref27]
		// 					x_speeddx3.dxarray13_speed = [formatDate(), speed_mref_th1.mref24, speed_mref_th1.mref25, speed_mref_th1.mref26, speed_mref_th1.mref27]
		// 					x_speeddx3.dxarray14_dianya = [formatDate(), dianya_mref_th1.mref24, dianya_mref_th1.mref25, dianya_mref_th1.mref26, dianya_mref_th1.mref27]
		// 					x_speeddx3.dxarray14_acc = [formatDate(), jiasudu2_mref_th1.mref24, jiasudu2_mref_th1.mref25, jiasudu2_mref_th1.mref26, jiasudu2_mref_th1.mref27]
		// 					x_speeddx3.dxarray15_speed = [formatDate(), speed_mref_th1.mref24, speed_mref_th1.mref25, speed_mref_th1.mref26, speed_mref_th1.mref27]

		// 					x_speeddx4.dxarray11_dianzu = [formatDate(), dianzu_mref_th1.mref28, dianzu_mref_th1.mref29, dianzu_mref_th1.mref30, dianzu_mref_th1.mref31]
		// 					x_speeddx4.dxarray12_dianliu = [formatDate(), dianliu2_mref_th1.mref28, dianliu2_mref_th1.mref29, dianliu2_mref_th1.mref30, dianliu2_mref_th1.mref31]
		// 					x_speeddx4.dxarray12_jianxi = [formatDate(), jianxi_mref_th1.mref28, jianxi_mref_th1.mref29, jianxi_mref_th1.mref30, jianxi_mref_th1.mref31]
		// 					x_speeddx4.dxarray13_speed = [formatDate(), speed_mref_th1.mref28, speed_mref_th1.mref29, speed_mref_th1.mref30, speed_mref_th1.mref31]
		// 					x_speeddx4.dxarray14_dianya = [formatDate(), dianya_mref_th1.mref28, dianya_mref_th1.mref29, dianya_mref_th1.mref30, dianya_mref_th1.mref31]
		// 					x_speeddx4.dxarray14_acc = [formatDate(), jiasudu2_mref_th1.mref28, jiasudu2_mref_th1.mref29, jiasudu2_mref_th1.mref30, jiasudu2_mref_th1.mref31]
		// 					x_speeddx4.dxarray15_speed = [formatDate(), speed_mref_th1.mref28, speed_mref_th1.mref29, speed_mref_th1.mref30, speed_mref_th1.mref31]
		// 					flag = timeToString(addTime(1))
		// 				}
		// 				break;
		// 		}
		// 	}
		// })

		// ====== 可配置项默认值（运行时可通过 config.json 覆盖）======
		const DEFAULT_TITLE = '高速磁浮空调状态诊断模块'
		const DEFAULT_LOGOS = [
			{ src: 'logo.png', width: 124.65, height: 41.43 }
		]

		const title = ref(DEFAULT_TITLE)
		const logos = ref(DEFAULT_LOGOS)
		const logoGap = ref(24)
		const titleAlign = ref('center') // 主标题对齐方式：'center' 居中 | 'left' 原位置

		// logo 区域基准参数（与原设计保持一致）
		const LOGO_START_X = 39.2
		const LOGO_BASE_Y = 10.45
		const LOGO_MAX_HEIGHT = 41.43
		const LOGO_DEFAULT_WIDTH = 124.65

		// 多 logo 一行布局：从左至右依次排列，垂直方向居中对齐
		const logoItems = computed(() => {
			let cursorX = LOGO_START_X
			const list = logos.value
			return list.map((logo, index) => {
				const height = Number(logo.height) > 0 ? Number(logo.height) : LOGO_MAX_HEIGHT
				const width = Number(logo.width) > 0 ? Number(logo.width) : LOGO_DEFAULT_WIDTH
				const y = LOGO_BASE_Y + (LOGO_MAX_HEIGHT - height) / 2
				const item = { x: cursorX, y, width, height, src: logo.src }
				cursorX += width + (index < list.length - 1 ? logoGap.value : 0)
				return item
			})
		})

		// 主标题布局：居中时以画布中线对齐，左对齐时保持原位置
		const TITLE_LEFT_X = 708.5
		const titleProps = computed(() => {
			if (titleAlign.value === 'center') {
				return { x: 960, anchor: 'middle' } // 1920 / 2
			}
			return { x: TITLE_LEFT_X, anchor: 'start' }
		})

		// 运行时加载外部配置文件（打包后位于 dist/config.json，可直接修改无需重新构建）
		onMounted(async () => {
			try {
				const res = await fetch('./config.json', { cache: 'no-cache' })
				if (!res.ok) return
				// 防止 SPA fallback 返回 index.html（非 JSON）导致解析报错
				const contentType = res.headers.get('content-type') || ''
				if (!contentType.includes('application/json')) return
				const config = await res.json()
				if (typeof config.title === 'string' && config.title.trim()) {
					title.value = config.title
				}
				if (Array.isArray(config.logos)) {
					const valid = config.logos.filter(l => l && typeof l.src === 'string' && l.src.trim())
					if (valid.length) logos.value = valid
				}
				if (typeof config.logoGap === 'number' && config.logoGap >= 0) {
					logoGap.value = config.logoGap
				}
				if (typeof config.titleAlign === 'string' && ['center', 'left'].includes(config.titleAlign)) {
					titleAlign.value = config.titleAlign
				}
			} catch (e) {
				console.warn('[配置] 加载 config.json 失败，使用默认配置', e)
			}

			flag = formatDate()
			flag1 = formatDate()
			flag2 = formatDate()
			currentTime()
			worker.onmessage = (event) => {
				const message = event.data;
				// 在这里处理接收到的消息
				var data_state = JSON.parse(message)//转换为双层对象
				var symple = data_state.symple // 定义标志位并赋值
				// console.log(symple)
				// console.log(data_state)
				switch (symple) {
					case "02":
						var dianzu_mref_th1 = data_state.dianzu_mref//双层对象替换为单层对象
						// console.log(dianzu_mref_th1)

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
			colorSig,
			title,
			logoItems,
			titleProps
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
					<!-- 时间模块 -->
					<text fill="#ffffff" font-family="SimHei" font-size="40" font-weight="400" height="56"
						letter-spacing="1.81818182" width="544" :text-anchor="titleProps.anchor">
						<tspan :x="titleProps.x" y="55">{{ title }}</tspan>
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
					<tspan x="372" y="39">车厢：MC2</tspan>
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
				<!-- logo 图标（可配置，支持一行多个，默认左上角原位置） -->
				<image v-for="(logo, index) in logoItems" :key="index" :height="logo.height" :width="logo.width"
					:x="logo.x" :y="logo.y" :xlink:href="logo.src" />

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
				<rect id="矩形备份-4" fill="url(#linearGradient-3)" opacity="0.37" x="3" y="0" width="1869" height="38">
				</rect>
				<text id="导向控制器状态曲线" font-family="PingFangSC-Regular, PingFang SC" font-size="20" font-weight="normal"
					fill="#FFFFFF">
					<tspan x="34" y="26">导向控制器状态曲线</tspan>
				</text>
				<g id="编组" transform="translate(1825.146667, 13.000000)" fill="#4EB3FE">
					<polygon id="矩形" opacity="0.220115298"
						points="11.1466667 0 16.2133333 0 26.8533333 13 21.7866667 13">
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
				<rect id="矩形备份-4" fill="url(#linearGradient-3)" opacity="0.37" x="3" y="0" width="1869" height="38">
				</rect>
				<text id="左侧电磁铁模块" font-family="PingFangSC-Regular, PingFang SC" font-size="20" font-weight="normal"
					fill="#FFFFFF">
					<tspan x="34" y="26">左侧电磁铁模块</tspan>
				</text>
				<g id="编组" transform="translate(1825.146667, 13.000000)" fill="#4EB3FE">
					<polygon id="矩形" opacity="0.220115298"
						points="11.1466667 0 16.2133333 0 26.8533333 13 21.7866667 13">
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
				<rect id="矩形" fill-opacity="0.154217" fill="#0DD6FF" x="32" y="17.0984456" width="1816"
					height="97.119171">
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
}
</style>
