let WEBSOCKET_URL = null
let WEBSOCKET_RECONNECT_TIME = 0
let socket = null

// 在 web worker 中创建一个 WebSocket 客户端
self.onmessage = function (event) {
	// 初始化
	if (event.data.type === 'init') {
		WEBSOCKET_URL = event.data.env.VITE_WEBSOCKET_URL
		WEBSOCKET_RECONNECT_TIME = event.data.env.VITE_WEBSOCKET_RECONNECT_TIME
		// 初始 WebSocket 连接
		connectWebSocket()
		return
	}
}

// 建立 WebSocket 连接
function connectWebSocket() {
	socket = new WebSocket(WEBSOCKET_URL)

	// 处理 WebSocket 连接事件
	socket.onopen = function () {
		console.log('WebSocket 连接已建立')
	}

	// 处理 WebSocket 接收到的消息
	socket.onmessage = function (event) {
		const processedData = handleReceivedData(event.data)
		postMessage(processedData)
	}

	// 处理 WebSocket 关闭事件
	socket.onclose = function () {
		console.log('WebSocket 连接已关闭')
		socket = null
		// 断开后重新连接
		if (WEBSOCKET_RECONNECT_TIME > 0) {
			setTimeout(connectWebSocket, WEBSOCKET_RECONNECT_TIME)
		}
	}

	// 处理 WebSocket 错误事件
	socket.onerror = function (error) {
		console.error('WebSocket 错误:', error)
		socket.close()
	}
}

// 处理接收到的数据
function handleReceivedData(data) {
	// ...
}
