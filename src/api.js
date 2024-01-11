/**
 * fetch请求封装
 * @param {string} url - 请求URL
 * @param {object} options - fetch选项
 * @returns {Promise<object>} - 解析后的JSON响应
 * @throws {Error} - 如果请求失败或响应不是OK
 */
async function fatch(url, options) {
	const fullUrl = `${import.meta.env.API_BASE_URL}${url}`
	try {
		const response = await fetch(fullUrl, options)
		if (!response.ok) {
			throw new Error(`请求失败，状态码为 ${response.status}`)
		}
		return response.json()
	} catch (error) {
		console.error(`获取 ${fullUrl} 时出错：${error.message}`)
		throw error
	}
}

/**
 * 发送GET请求
 * @param {string} url - 请求URL
 * @returns {Promise<object>} - 解析后的JSON响应
 * @throws {Error} - 如果请求失败或响应不是OK
 */
async function get(url) {
	const options = {
		method: 'GET',
	}
	return fetch(url, options)
}

/**
 * 发送POST请求
 * @param {string} url - 请求URL
 * @param {object} data - 请求数据
 * @returns {Promise<object>} - 解析后的JSON响应
 * @throws {Error} - 如果请求失败或响应不是OK
 */
async function post(url, data) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}
	return fetch(url, options)
}

export { fatch, get, post }
