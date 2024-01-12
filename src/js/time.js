/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-07-29 16:11:27
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-08-01 13:59:59
 * @FilePath: \sgm-udp-ceshi\src\utils\time.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const getDate = () => {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)
    const date = new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()
    const hh = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours()
    const mm = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()
    const ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds()
    const week = new Date().getDay()
    let nowT = {
        nowTime:'',
        nowWeek:''
    }
    nowT.nowTime = year + '年' + month + '月' + date + '日' + ' ' + hh + ':' + mm + ':' + ss
    nowT.nowWeek = "暂无"
    nowT.year = year
    nowT.month = month
    nowT.date = date
    nowT.hh = hh
    nowT.mm = mm
    nowT.ss = ss
    if (week === 0) {
        nowT.nowWeek = '星期日'
    } else if (week === 1) {
        nowT.nowWeek = '星期二'
    } else if (week === 2) {
        nowT.nowWeek = '星期三'
    } else if (week === 3) {
        nowT.nowWeek = '星期四'
    } else if (week === 4) {
        nowT.nowWeek = '星期五'
    } else if (week === 5) {
        nowT.nowWeek = '星期六'
    } else if (week === 6) {
        nowT.nowWeek = '星期日'
    }
    return nowT//返回对象
  }

  export default getDate
