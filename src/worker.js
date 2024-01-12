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
function handleReceivedData(dataAll) {
	// ...
    console.log(dataAll)
    var data1 = dataAll.toString('hex');   
    var data = data1.replaceAll(' ','')
    /* 2023.5.23  王昌凡编写*/
    var symple = data.substr(10,2)
    console.log(symple)
    switch(symple){
      case "01":
        var dianzu_mret_th = mretDataProcess(74,data,29.4,0)
        replaceObject(data1_state.dianzu_mret,dianzu_mret_th)
        console.log(data1_state.dianzu_mret)
        var speed_mret_th = mretDataProcess(76,data,2.5,0)
        replaceObject(data1_state.speed_mret,speed_mret_th)
        var dianliu1_mret_th = mretDataProcess(82,data,0.3137,0)
        replaceObject(data1_state.dianliu1_mret,dianliu1_mret_th)
        var dianliu2_mret_th = mretDataProcess(84,data,0.3137,0)
        replaceObject(data1_state.dianliu2_mret,dianliu2_mret_th)
        var dianya_mret_th = mretDataProcess(86,data,4.7,-600)
        replaceObject(data1_state.dianya_mret,dianya_mret_th)
        var jiasudu1_mret_th = mretDataProcess(88,data,0.11,-14)
        replaceObject(data1_state.jiasudu1_mret,jiasudu1_mret_th)
        var jiasudu2_mret_th = mretDataProcess(90,data,0.11,-14)
        replaceObject(data1_state.jiasudu2_mret,jiasudu2_mret_th)
        var jianxi_mret_th = mretDataProcess(92,data,0.0784,0)
        replaceObject(data1_state.jianxi_mret,jianxi_mret_th)
  
        mret_state['symple'] = symple;
        mret_state['dianzu_mret'] = data1_state.dianzu_mret;
        mret_state['speed_mret'] = data1_state.speed_mret;
        mret_state['dianliu1_mret'] = data1_state.dianliu1_mret;
        mret_state['dianliu2_mret'] = data1_state.dianliu2_mret;
        mret_state['dianya_mret'] = data1_state.dianya_mret;
        mret_state['jiasudu1_mret'] = data1_state.jiasudu1_mret;
        mret_state['jiasudu2_mret'] = data1_state.jiasudu2_mret;
        mret_state['jianxi_mret'] = data1_state.jianxi_mret;
  
        // ws2.clients.forEach(client => {
        //   if (client.readyState === WebSocket.OPEN) {
        //     let str = JSON.stringify(mret_state);
        //     client.send(str);
        //     console.log("ws2启用了")
        //   }
        // });
        let str = JSON.stringify(mret_state);
        return str;
        break;
      case "02":
        var dianzu_mref_th = mrefDataProcess(72,data,29.4,0)
        replaceObject(data1_state.dianzu_mref,dianzu_mref_th)
        console.log(data1_state.dianzu_mref)
        var speed_mref_th = mrefDataProcess(74,data,2.5,0)
        replaceObject(data1_state.speed_mref,speed_mref_th)
        var dianliu1_mref_th = mrefDataProcess(80,data,0.3137,0)
        replaceObject(data1_state.dianliu1_mref,dianliu1_mref_th)
        var dianliu2_mref_th = mrefDataProcess(82,data,0.3137,0)
        replaceObject(data1_state.dianliu2_mref,dianliu2_mref_th)
        var dianya_mref_th = mrefDataProcess(84,data,4.7,-600)
        replaceObject(data1_state.dianya_mref,dianya_mref_th)
        var jiasudu1_mref_th = mrefDataProcess(86,data,0.11,-14)
        replaceObject(data1_state.jiasudu1_mref,jiasudu1_mref_th)
        var jiasudu2_mref_th = mrefDataProcess(88,data,0.11,-14)
        replaceObject(data1_state.jiasudu2_mref,jiasudu2_mref_th)
        var jianxi_mref_th = mrefDataProcess(90,data,0.0784,0)
        replaceObject(data1_state.jianxi_mref,jianxi_mref_th)
        mref_state['symple'] = symple;
        mref_state['dianzu_mref'] = data1_state.dianzu_mref;
        mref_state['speed_mref'] = data1_state.speed_mref;
        mref_state['dianliu1_mref'] = data1_state.dianliu1_mref;
        mref_state['dianliu2_mref'] = data1_state.dianliu2_mref;
        mref_state['dianya_mref'] = data1_state.dianya_mref;
        mref_state['jiasudu1_mref'] = data1_state.jiasudu1_mref;
        mref_state['jiasudu2_mref'] = data1_state.jiasudu2_mref;
        mref_state['jianxi_mref'] = data1_state.jianxi_mref;
        // ws2.clients.forEach(client => {
        //   if (client.readyState === WebSocket.OPEN) {
        //     let str = JSON.stringify(mref_state);
        //     client.send(str);
        //     console.log("ws2启用了")
        //   }
        // });
        str = JSON.stringify(mref_state);
        return str;
        break;
      case "03":
        var dianliu1_mreb_th = mrebDataProcess(64,data,0.3137,0)
        replaceObject(data1_state.dianliu1_mreb,dianliu1_mreb_th)
        console.log(data1_state.dianzu_mref)
        var dianliu2_mreb_th = mrebDataProcess(66,data,0.3137,0)
        replaceObject(data1_state.dianliu2_mreb,dianliu2_mreb_th)
        var dianya_mreb_th = mrebDataProcess(80,data,0.3137,0)
        replaceObject(data1_state.dianya_mreb,dianya_mreb_th)
        mreb_state['symple'] = symple;
        mreb_state['dianliu1_mreb'] = data1_state.dianliu1_mreb;
        mreb_state['dianliu2_mreb'] = data1_state.dianliu2_mreb;
        mreb_state['dianya_mreb'] = data1_state.dianya_mreb;
        // ws2.clients.forEach(client => {
        //   if (client.readyState === WebSocket.OPEN) {
        //     let str = JSON.stringify(mreb_state);
        //     client.send(str);
        //     console.log("ws2启用了")
        //   }
        // });
        str = JSON.stringify(mreb_state);
        return str;
        break;
    }
}
/* 2023.5.23  王昌凡编写*/
function mretDataProcess(val,data_val,mul,sub){  //MRET状态处理方法
    var state_mret = {mret0:"",mret1:"",mret2:"",mret3:"",mret4:"",mret5:"",mret6:"",mret7:"",mret8:"",mret9:"",mret10:"",mret11:"",
      mret12:"",mret13:"",mret14:"",mret15:"",mret16:"",mret17:"",mret18:"",mret19:"",mret20:"",mret21:"",
      mret22:"",mret23:"",mret24:"",mret25:"",mret26:"",mret27:"",mret28:"",mret29:"",mret30:"",mret31:""}
    state_mret.mret0 = ((hexto10(data_val.substr(val,2))*mul)+sub).toFixed(2)
    state_mret.mret1 = ((hexto10(data_val.substr((val+48*1),2))*mul)+sub).toFixed(2)
    state_mret.mret2 = ((hexto10(data_val.substr((val+48*2),2))*mul)+sub).toFixed(2)
    state_mret.mret3 = ((hexto10(data_val.substr((val+48*3),2))*mul)+sub).toFixed(2)
    state_mret.mret4 = ((hexto10(data_val.substr((val+48*4),2))*mul)+sub).toFixed(2)
    state_mret.mret5 = ((hexto10(data_val.substr((val+48*5),2))*mul)+sub).toFixed(2)
    state_mret.mret6 = ((hexto10(data_val.substr((val+48*6),2))*mul)+sub).toFixed(2)
    state_mret.mret7 = ((hexto10(data_val.substr((val+48*7),2))*mul)+sub).toFixed(2)
    state_mret.mret8 = ((hexto10(data_val.substr((val+48*8),2))*mul)+sub).toFixed(2)
    state_mret.mret9 = ((hexto10(data_val.substr((val+48*9),2))*mul)+sub).toFixed(2)
    state_mret.mret10 = ((hexto10(data_val.substr((val+48*10),2))*mul)+sub).toFixed(2)
    state_mret.mret11 = ((hexto10(data_val.substr((val+48*11),2))*mul)+sub).toFixed(2)
    state_mret.mret12 = ((hexto10(data_val.substr((val+48*12),2))*mul)+sub).toFixed(2)
    state_mret.mret13 = ((hexto10(data_val.substr((val+48*13),2))*mul)+sub).toFixed(2)
    state_mret.mret14 = ((hexto10(data_val.substr((val+48*14),2))*mul)+sub).toFixed(2)
    state_mret.mret15 = ((hexto10(data_val.substr((val+48*15),2))*mul)+sub).toFixed(2)
    state_mret.mret16 = ((hexto10(data_val.substr((val+48*16),2))*mul)+sub).toFixed(2)
    state_mret.mret17 = ((hexto10(data_val.substr((val+48*17),2))*mul)+sub).toFixed(2)
    state_mret.mret18 = ((hexto10(data_val.substr((val+48*18),2))*mul)+sub).toFixed(2)
    state_mret.mret19 = ((hexto10(data_val.substr((val+48*19),2))*mul)+sub).toFixed(2)
    state_mret.mret20 = ((hexto10(data_val.substr((val+48*20),2))*mul)+sub).toFixed(2)
    state_mret.mret21 = ((hexto10(data_val.substr((val+48*21),2))*mul)+sub).toFixed(2)
    state_mret.mret22 = ((hexto10(data_val.substr((val+48*22),2))*mul)+sub).toFixed(2)
    state_mret.mret23 = ((hexto10(data_val.substr((val+48*23),2))*mul)+sub).toFixed(2)
    state_mret.mret24 = ((hexto10(data_val.substr((val+48*24),2))*mul)+sub).toFixed(2)
    state_mret.mret25 = ((hexto10(data_val.substr((val+48*25),2))*mul)+sub).toFixed(2)
    state_mret.mret26 = ((hexto10(data_val.substr((val+48*26),2))*mul)+sub).toFixed(2)
    state_mret.mret27 = ((hexto10(data_val.substr((val+48*27),2))*mul)+sub).toFixed(2)
    state_mret.mret28 = ((hexto10(data_val.substr((val+48*28),2))*mul)+sub).toFixed(2)
    state_mret.mret29 = ((hexto10(data_val.substr((val+48*29),2))*mul)+sub).toFixed(2)
    state_mret.mret30 = ((hexto10(data_val.substr((val+48*30),2))*mul)+sub).toFixed(2)
    state_mret.mret31 = ((hexto10(data_val.substr((val+48*31),2))*mul)+sub).toFixed(2)
    return state_mret
  }
  
  function mrefDataProcess(val,data_val,mul,sub){  //MRET状态处理方法
    var state_mref = {mref0:"",mref1:"",mref2:"",mref3:"",mref4:"",mref5:"",mref6:"",mref7:"",mref8:"",mref9:"",mref10:"",mref11:"",
      mref12:"",mref13:"",mref14:"",mref15:"",mref16:"",mref17:"",mref18:"",mref19:"",mref20:"",mref21:"",
      mref22:"",mref23:"",mref24:"",mref25:"",mref26:"",mref27:"",mref28:"",mref29:"",mref30:"",mref31:""}
    state_mref.mref0 = ((hexto10(data_val.substr(val,2))*mul)+sub).toFixed(2)
    state_mref.mref1 = ((hexto10(data_val.substr((val+46*1),2))*mul)+sub).toFixed(2)
    state_mref.mref2 = ((hexto10(data_val.substr((val+46*2),2))*mul)+sub).toFixed(2)
    state_mref.mref3 = ((hexto10(data_val.substr((val+46*3),2))*mul)+sub).toFixed(2)
    state_mref.mref4 = ((hexto10(data_val.substr((val+46*4),2))*mul)+sub).toFixed(2)
    state_mref.mref5 = ((hexto10(data_val.substr((val+46*5),2))*mul)+sub).toFixed(2)
    state_mref.mref6 = ((hexto10(data_val.substr((val+46*6),2))*mul)+sub).toFixed(2)
    state_mref.mref7 = ((hexto10(data_val.substr((val+46*7),2))*mul)+sub).toFixed(2)
    state_mref.mref8 = ((hexto10(data_val.substr((val+46*8),2))*mul)+sub).toFixed(2)
    state_mref.mref9 = ((hexto10(data_val.substr((val+46*9),2))*mul)+sub).toFixed(2)
    state_mref.mref10 = ((hexto10(data_val.substr((val+46*10),2))*mul)+sub).toFixed(2)
    state_mref.mref11 = ((hexto10(data_val.substr((val+46*11),2))*mul)+sub).toFixed(2)
    state_mref.mref12 = ((hexto10(data_val.substr((val+46*12),2))*mul)+sub).toFixed(2)
    state_mref.mref13 = ((hexto10(data_val.substr((val+46*13),2))*mul)+sub).toFixed(2)
    state_mref.mref14 = ((hexto10(data_val.substr((val+46*14),2))*mul)+sub).toFixed(2)
    state_mref.mref15 = ((hexto10(data_val.substr((val+46*15),2))*mul)+sub).toFixed(2)
    state_mref.mref16 = ((hexto10(data_val.substr((val+46*16),2))*mul)+sub).toFixed(2)
    state_mref.mref17 = ((hexto10(data_val.substr((val+46*17),2))*mul)+sub).toFixed(2)
    state_mref.mref18 = ((hexto10(data_val.substr((val+46*18),2))*mul)+sub).toFixed(2)
    state_mref.mref19 = ((hexto10(data_val.substr((val+46*19),2))*mul)+sub).toFixed(2)
    state_mref.mref20 = ((hexto10(data_val.substr((val+46*20),2))*mul)+sub).toFixed(2)
    state_mref.mref21 = ((hexto10(data_val.substr((val+46*21),2))*mul)+sub).toFixed(2)
    state_mref.mref22 = ((hexto10(data_val.substr((val+46*22),2))*mul)+sub).toFixed(2)
    state_mref.mref23 = ((hexto10(data_val.substr((val+46*23),2))*mul)+sub).toFixed(2)
    state_mref.mref24 = ((hexto10(data_val.substr((val+46*24),2))*mul)+sub).toFixed(2)
    state_mref.mref25 = ((hexto10(data_val.substr((val+46*25),2))*mul)+sub).toFixed(2)
    state_mref.mref26 = ((hexto10(data_val.substr((val+46*26),2))*mul)+sub).toFixed(2)
    state_mref.mref27 = ((hexto10(data_val.substr((val+46*27),2))*mul)+sub).toFixed(2)
    state_mref.mref28 = ((hexto10(data_val.substr((val+46*28),2))*mul)+sub).toFixed(2)
    state_mref.mref29 = ((hexto10(data_val.substr((val+46*29),2))*mul)+sub).toFixed(2)
    state_mref.mref30 = ((hexto10(data_val.substr((val+46*30),2))*mul)+sub).toFixed(2)
    state_mref.mref31 = ((hexto10(data_val.substr((val+46*31),2))*mul)+sub).toFixed(2)
    return state_mref
  }
  
  function mrebDataProcess(val,data_val,mul,sub){  //MRET状态处理方法
    var state_mreb = {mreb0:"",mreb1:"",mreb2:"",mreb3:"",mreb4:"",mreb5:"",mreb6:"",mreb7:""}
    state_mreb.mreb0 = ((hexto10(data_val.substr(val,2))*mul)+sub).toFixed(2)
    state_mreb.mreb1 = ((hexto10(data_val.substr((val+24*1),2))*mul)+sub).toFixed(2)
    state_mreb.mreb2 = ((hexto10(data_val.substr((val+24*2),2))*mul)+sub).toFixed(2)
    state_mreb.mreb3 = ((hexto10(data_val.substr((val+24*3),2))*mul)+sub).toFixed(2)
    state_mreb.mreb4 = ((hexto10(data_val.substr((val+24*4),2))*mul)+sub).toFixed(2)
    state_mreb.mreb5 = ((hexto10(data_val.substr((val+24*5),2))*mul)+sub).toFixed(2)
    state_mreb.mreb6 = ((hexto10(data_val.substr((val+24*6),2))*mul)+sub).toFixed(2)
    state_mreb.mreb7 = ((hexto10(data_val.substr((val+24*7),2))*mul)+sub).toFixed(2)
    return state_mreb
  }
  
  function replaceObject (newObject,oldObject){//对象赋值函数，将方法计算得到对象键值对赋值给另一个对象。
    for (let key in oldObject){
      newObject[key] = oldObject[key]
    }
  }
  
  
  
  
  /* * 对二进制字符串进行补0
   * 1010 ==> 00001010
   * @param {*} ele2String 
   * @returns */
    function fillZero(ele2String) {
      if (ele2String.length < 8) {
        let zeroNum = 8 - ele2String.length;
        for (let i = 0; i < zeroNum; i++) {
          ele2String = '0' + ele2String;
        }
      }
      return ele2String;
    }
    function hexto10(hex){  //十六进制转10进制
      var hexto10 = parseInt(hex,16)
      return hexto10;//十六进制转10进制
    }
    function hexto2(hex){//十六进制转2进制
      var hexto2 = function2.fillZero(parseInt(hex,16).toString(2));
      return hexto2;//十六进制转2进制
    }
    function binarytoarry2(str){
      var switcharry = new Array();
      var i;
      for(i=0;i<str.length;i++){
        switcharry.push(str.charAt(i)) 
      }
      return switcharry;
    //遍历二进制字符串内容，输出数组
    }
  
  /*******************************************************************************************************************/
  function mrebMsgProcess(val,arr_mreb,lastmsg_mreb0,mreb0) { //MREB故障处理方法
    var arr_mrebfault = arr_mreb.slice(val,(val+2)) //截取故障位
    arr_mrebfault.forEach((item, index) => {    //item是元素值，index是索引
      let ele2String = item.toString(2);   
      let ele = fillZero(ele2String);
      mrebCompareMsg(ele, index, lastmsg_mreb0,mreb0)//compareMsg的index是foreach的index
    });
  }
  function mrebCompareMsg(ele, index, lastmsg,mreb0) { //新数组与旧数组对比方法
  let lastStr = lastmsg[index];//取出00000000，与17（00010001）作对比
  if (lastStr != ele) {
    for (let i = 0; i < 8; i++) {
      if (lastStr[i] != ele[i]) {
        if (ele[i] == 1) {//就是故障从0到1
          mrebFaultSumCount(index,i,mreb0)
        } 
      }
    }
    lastmsg[index] = ele;
  }
  }
  function mrebFaultSumCount(index,i,mreb0) { //mreb的11种故障总数+1
  switch(index){
    case 0:
      switch(i){
        case 0:
          mreb0.KnoAusfall = mreb0.KnoAusfall + 1;
          break;
        case 1:
          mreb0.MRE = mreb0.MRE + 1;
          break;
        case 2:
          mreb0.MRK_Checkout = mreb0.MRK_Checkout + 1;
          break;
        case 3:
          mreb0.Ansteuerung_BST1 = mreb0.Ansteuerung_BST1 + 1;
          break;
        case 4:
          mreb0.Ansteuerung_BST0 = mreb0.Ansteuerung_BST0 + 1;
          break;
        case 5:
          mreb0.unzeitiger_Bremsstrom = mreb0.unzeitiger_Bremsstrom + 1;
          break;
        case 6:
          mreb0.Ueberhitzung = mreb0.Ueberhitzung + 1;
          break;
        case 7:
          mreb0.BrStromRueckmldg_AUS = mreb0.BrStromRueckmldg_AUS + 1;
          break;
      }
      break;
    case 1:
      switch(i){
        case 0:
          mreb0.BrStromRueckmldg_MAX = mreb0.BrStromRueckmldg_MAX +1;
          break;
        case 1:
          mreb0.MRE_Luefter = mreb0.MRE_Luefter+1;
          break;
        case 2:
          mreb0.Magnet = mreb0.Magnet+1;
          break;
      }
      break;
    }
    return mreb0;
  }      
  
  function mretMsgProcess(val,arr_mret,lastmsg_mret0,mret0) { //MRET故障处理方法
    var arr_mretfault = arr_mret.slice(val,(val+4)) //截取故障位
    arr_mretfault.forEach((item, index) => {    //item是元素值，index是索引
      let ele2String = item.toString(2);   
      let ele = fillZero(ele2String);
      mretCompareMsg(ele, index, lastmsg_mret0,mret0)//compareMsg的index是foreach的index
    });
  }
  function mretCompareMsg(ele, index, lastmsg,mret0) { //新数组与旧数组对比方法
    let lastStr = lastmsg[index];//取出00000000，与17（00010001）作对比
    if (lastStr != ele) {
      for (let i = 0; i < 8; i++) {
        if (lastStr[i] != ele[i]) {
          if (ele[i] == 1) {//就是故障从0到1
            mretFaultSumCount(index,i,mret0)
          } 
        }
      }
      lastmsg[index] = ele;
    }
  }
  function mretFaultSumCount(index,i,mret0) { //mret的29种故障总数+1
    switch(index){
      case 0:
        switch(i){
          case 0:
            mret0.KnoAusfall = mret0.KnoAusfall + 1;
            break;
          case 1:
            mret0.MRE = mret0.MRE + 1;
            break;
          case 2:
            mret0.MRE_EBO = mret0.MRE_EBO + 1;
            break;
          case 3:
            mret0.MRK_Checkout = mret0.MRK_Checkout + 1;
            break;
          case 4:
            mret0.SME_B1 = mret0.SME_B1 + 1;
            break;
          case 5:
            mret0.SME_B2 = mret0.SME_B2 + 1;
            break;
          case 6:
            mret0.Lastverteilung = mret0.Lastverteilung + 1;
            break;
          case 7:
            mret0.SME_1 = mret0.SME_1 + 1;
            break;
        }
        break;
      case 1:
        switch(i){
          case 0:
            mret0.SME_2 = mret0.SME_2 +1;
            break;
          case 1:
            mret0.fehlerhafte_Lastvertlg = mret0.fehlerhafte_Lastvertlg+1;
            break;
          case 2:
            mret0.Regelkreis_v_Signal_0 = mret0.Regelkreis_v_Signal_0+1;
            break;
          case 3:
            mret0.Heb_Befehl = mret0.Heb_Befehl+1;
            break;
          case 4:
            mret0.Heb_Rueck = mret0.Heb_Rueck+1;
            break;
          case 5:
            mret0.SME_V1 = mret0.SME_V1 +1;
            break;
          case 6:
            mret0.SME_V2= mret0.SME_V2 +1;
            break;     
          case 7:
            mret0.Lastkurzschluss = mret0.Lastkurzschluss +1;
            break;
        }
        break;
      case 2:
        switch(i){
          case 0:
            mret0.Signalverbindung = mret0.Signalverbindung +1;
            break;
          case 1:
            mret0.SNT_LF_Steuerung = mret0.SNT_LF_Steuerung +1;
            break;
          case 2:
            mret0.Belueftung = mret0.Belueftung +1;
            break;
          case 3:
            mret0.Entlueftung = mret0.Entlueftung +1;
            break;
          case 4:
            mret0.pTEIL_pMIN = mret0.pTEIL_pMIN +1;
            break;
          case 5:
            mret0.Signale_LST = mret0.Signale_LST +1;
            break;
          case 6:
            mret0.Lastvertlgs_mit_Entlueftg = mret0.Lastvertlgs_mit_Entlueftg +1;
            break;     
          case 7:
            mret0.LF_Relaistest = mret0.LF_Relaistest +1;
            break;
        }
        break;
      case 3:
        switch(i){
          case 0:
            mret0.Belueften_Entlueften = mret0.Belueften_Entlueften +1;
            break;
          case 1:
            mret0.HebR_Abgesetzt = mret0.HebR_Abgesetzt +1;
            break;
          case 2:
            mret0.Druckschalter_PVL = mret0.Druckschalter_PVL +1;
            break;
          case 3:
            mret0.SME_1_2 = mret0.SME_1_2 +1;
            break;
          case 4:
            mret0.LF_pMIN = mret0.LF_pMIN +1;
            break;
        }
        break;
      }
      return mret0;
  }
  
  function mrefMsgProcess(val,arr_mref,lastmsg_mref0,mref0) { //MREF故障处理方法
      var arr_mreffault = arr_mref.slice(val,(val+3)) //截取故障位
      arr_mreffault.forEach((item, index) => {    //item是元素值，index是索引
        let ele2String = item.toString(2);   
        let ele = fillZero(ele2String);
        mrefCompareMsg(ele, index, lastmsg_mref0,mref0)//compareMsg的index是foreach的index
      });
  }
  function mrefCompareMsg(ele, index, lastmsg,mref0) { //新数组与旧数组对比方法
    let lastStr = lastmsg[index];//取出00000000，与17（00010001）作对比
    if (lastStr != ele) {
      for (let i = 0; i < 8; i++) {
        if (lastStr[i] != ele[i]) {
          if (ele[i] == 1) {//就是故障从0到1
            mrefFaultSumCount(index,i,mref0)
          } 
        }
      }
      lastmsg[index] = ele;
    }
  }
  function mrefFaultSumCount(index,i,mref0) { //mref的18种故障总数+1
    switch(index){
      case 0:
        switch(i){
          case 0:
            mref0.KnoAusfall = mref0.KnoAusfall + 1;
            break;
          case 1:
            mref0.MRE = mref0.MRE + 1;
            break;
          case 2:
            mref0.MRE_EBO = mref0.MRE_EBO + 1;
            break;
          case 3:
            mref0.MRK_Checkout = mref0.MRK_Checkout + 1;
            break;
          case 4:
            mref0.SME_B1 = mref0.SME_B1 + 1;
            break;
          case 5:
            mref0.SME_B2 = mref0.SME_B2 + 1;
            break;
          case 6:
            mref0.Lastverteilung = mref0.Lastverteilung + 1;
            break;
          case 7:
            mref0.SME_1 = mref0.SME_1 + 1;
            break;
        }
        break;
      case 1:
        switch(i){
          case 0:
            mref0.SME_2 = mref0.SME_2 +1;
            break;
          case 1:
            mref0.Regelkreis_v_Signal_0 = mref0.Regelkreis_v_Signal_0+1;
            break;
          case 2:
            mref0.Heb_Befehl = mref0.Heb_Befehl+1;
            break;
          case 3:
            mref0.Heb_Rueck = mref0.Heb_Rueck+1;
            break;
          case 4:
            mref0.SME_V1 = mref0.SME_V1 +1;
            break;
          case 5:
            mref0.SME_V2= mref0.SME_V2 +1;
            break;     
          case 6:
            mref0.Lastkurzschluss = mref0.Lastkurzschluss +1;
            break;
          case 7:
            mref0.Signalverbindung = mref0.Signalverbindung +1;
            break;
        }
        break;
      case 2:
        switch(i){
          case 0:
            mref0.MRE_Luefter = mref0.MRE_Luefter +1;
            break;
          case 1:
              mref0.SME_1_2 = mref0.SME_1_2 +1;
              break;
        }
        break;
      }
      return mref0;
  }
