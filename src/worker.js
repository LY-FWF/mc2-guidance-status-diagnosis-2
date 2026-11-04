let websocketUrl = null;
let socket = null;
var data1_state = {
  "dianzu_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },
  "speed_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },
  "dianliu1_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },
  "dianliu2_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },
  "dianya_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },
  "jiasudu1_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },
  "jiasudu2_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },
  "jianxi_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },
  "err_mret": {
    "mret0": "", "mret1": "", "mret2": "", "mret3": "", "mret4": "", "mret5": "", "mret6": "", "mret7": "", "mret8": "", "mret9": "", "mret10": "",
    "mret11": "", "mret12": "", "mret13": "", "mret14": "", "mret15": "", "mret16": "", "mret17": "", "mret18": "", "mret19": "", "mret20": "", "mret21": "",
    "mret22": "", "mret23": "", "mret24": "", "mret25": "", "mret26": "", "mret27": "", "mret28": "", "mret29": "", "mret30": "", "mret31": ""
  },

  "dianzu_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },
  "speed_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },
  "dianliu1_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },
  "dianliu2_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },
  "dianya_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },
  "jiasudu1_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },
  "jiasudu2_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },
  "jianxi_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },
  "err_mref": {
    "mref0": "", "mref1": "", "mref2": "", "mref3": "", "mref4": "", "mref5": "", "mref6": "", "mref7": "", "mref8": "", "mref9": "", "mref10": "",
    "mref11": "", "mref12": "", "mref13": "", "mref14": "", "mref15": "", "mref16": "", "mref17": "", "mref18": "", "mref19": "", "mref20": "", "mref21": "",
    "mref22": "", "mref23": "", "mref24": "", "mref25": "", "mref26": "", "mref27": "", "mref28": "", "mref29": "", "mref30": "", "mref31": ""
  },

  "dianliu1_mreb": { "mreb0": "", "mreb1": "", "mreb2": "", "mreb3": "", "mreb4": "", "mreb5": "", "mreb6": "", "mreb7": "", "mreb8": "" },
  "dianliu2_mreb": { "mreb0": "", "mreb1": "", "mreb2": "", "mreb3": "", "mreb4": "", "mreb5": "", "mreb6": "", "mreb7": "", "mreb8": "" },
  "dianya_mreb": { "mreb0": "", "mreb1": "", "mreb2": "", "mreb3": "", "mreb4": "", "mreb5": "", "mreb6": "", "mreb7": "", "mreb8": "" },
  "err_mreb": { "mreb0": "", "mreb1": "", "mreb2": "", "mreb3": "", "mreb4": "", "mreb5": "", "mreb6": "", "mreb7": "", "mreb8": "" }

}
var mret_state = {}
var mref_state = {}
var mreb_state = {}

// 在 web worker 中创建一个 WebSocket 客户端
self.onmessage = function (event) {
  websocketUrl = event.data.env.VITE_WEBSOCKET_URL;

  // 初始连接
  connectWebSocket();
};

async function blobToHexstring(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = function () {
      if (this.result instanceof ArrayBuffer) {
        const byteArray = new Uint8Array(this.result);
        const hexString = Array.from(byteArray).map(byte => byte.toString(16).padStart(2, '0')).join('');
        resolve(hexString);
      } else {
        reject(new Error('Invalid result type'));
      }

    };
    reader.onerror = reject
    reader.readAsArrayBuffer(blob);
  })
}

// 使用示例
async function handleBlobData(blob) {
  try {
    const hexString = await blobToHexstring(blob);
    const processedData = handleReceivedData(hexString);
    postMessage(processedData);
  } catch (error) {
    console.error(error);
  }
}
// 建立 WebSocket 连接
function connectWebSocket() {
  socket = new WebSocket(websocketUrl);

  // 处理 WebSocket 连接事件
  socket.onopen = function () {
    // console.log("WebSocket 连接已建立");
  };

  // 处理 WebSocket 接收到的消息
  socket.onmessage = function (event) {
    handleBlobData(event.data);
    // const processedData = handleBlobData(event.data);
    // console.log(processedData);
    
    // postMessage(processedData);

  };

  // 处理 WebSocket 关闭事件
  socket.onclose = function () {
    // console.log("WebSocket 连接已关闭");
    // 断开后重新连接
    setTimeout(connectWebSocket, 1000);
  };

  // 处理 WebSocket 错误事件
  socket.onerror = function (error) {
    console.error("WebSocket 错误:", error);
    // 出错后重新连接
    setTimeout(connectWebSocket, 1000);
  };
}

// 处理接收到的数据
function handleReceivedData(dataAll) {
  // ...
  var data1 = dataAll.toString('hex');
  var data = data1.replaceAll(' ', '')
  /* 2023.5.23  王昌凡编写*/
  var symple = data.substr(10, 2)
  switch (symple) {
    case "01":
      var dianzu_mret_th = mretDataProcess(166, data, 29.4, 0)
      replaceObject(data1_state.dianzu_mret, dianzu_mret_th)
      var speed_mret_th = mretDataProcess(168, data, 2.5, 0)
      replaceObject(data1_state.speed_mret, speed_mret_th)
      var dianliu1_mret_th = mretDataProcess(174, data, 0.3137, 0)
      replaceObject(data1_state.dianliu1_mret, dianliu1_mret_th)
      var dianliu2_mret_th = mretDataProcess(176, data, 0.3137, 0)
      replaceObject(data1_state.dianliu2_mret, dianliu2_mret_th)
      var dianya_mret_th = mretDataProcess(178, data, 4.7, -600)
      replaceObject(data1_state.dianya_mret, dianya_mret_th)
      var jiasudu1_mret_th = mretDataProcess(180, data, 0.11, -14)
      replaceObject(data1_state.jiasudu1_mret, jiasudu1_mret_th)
      var jiasudu2_mret_th = mretDataProcess(182, data, 0.11, -14)
      replaceObject(data1_state.jiasudu2_mret, jiasudu2_mret_th)
      var jianxi_mret_th = mretDataProcess(184, data, 0.0784, 0)
      replaceObject(data1_state.jianxi_mret, jianxi_mret_th)

      mret_state['symple'] = symple;
      mret_state['dianzu_mret'] = data1_state.dianzu_mret;
      mret_state['speed_mret'] = data1_state.speed_mret;
      mret_state['dianliu1_mret'] = data1_state.dianliu1_mret;
      mret_state['dianliu2_mret'] = data1_state.dianliu2_mret;
      mret_state['dianya_mret'] = data1_state.dianya_mret;
      mret_state['jiasudu1_mret'] = data1_state.jiasudu1_mret;
      mret_state['jiasudu2_mret'] = data1_state.jiasudu2_mret;
      mret_state['jianxi_mret'] = data1_state.jianxi_mret;

      let str = JSON.stringify(mret_state);
      return str;
    case "02":
      var dianzu_mref_th = mrefDataProcess(166, data, 29.4, 0)
      replaceObject(data1_state.dianzu_mref, dianzu_mref_th)
      var speed_mref_th = mrefDataProcess(168, data, 2.5, 0)
      replaceObject(data1_state.speed_mref, speed_mref_th)
      var dianliu1_mref_th = mrefDataProcess(174, data, 0.3137, 0)
      replaceObject(data1_state.dianliu1_mref, dianliu1_mref_th)
      var dianliu2_mref_th = mrefDataProcess(176, data, 0.3137, 0)
      replaceObject(data1_state.dianliu2_mref, dianliu2_mref_th)
      var dianya_mref_th = mrefDataProcess(178, data, 4.7, -600)
      replaceObject(data1_state.dianya_mref, dianya_mref_th)
      var jiasudu1_mref_th = mrefDataProcess(180, data, 0.11, -14)
      replaceObject(data1_state.jiasudu1_mref, jiasudu1_mref_th)
      var jiasudu2_mref_th = mrefDataProcess(182, data, 0.11, -14)
      replaceObject(data1_state.jiasudu2_mref, jiasudu2_mref_th)
      var jianxi_mref_th = mrefDataProcess(184, data, 0.0784, 0)
      replaceObject(data1_state.jianxi_mref, jianxi_mref_th)
      mref_state['symple'] = symple;
      mref_state['dianzu_mref'] = data1_state.dianzu_mref;
      mref_state['speed_mref'] = data1_state.speed_mref;
      mref_state['dianliu1_mref'] = data1_state.dianliu1_mref;
      mref_state['dianliu2_mref'] = data1_state.dianliu2_mref;
      mref_state['dianya_mref'] = data1_state.dianya_mref;
      mref_state['jiasudu1_mref'] = data1_state.jiasudu1_mref;
      mref_state['jiasudu2_mref'] = data1_state.jiasudu2_mref;
      mref_state['jianxi_mref'] = data1_state.jianxi_mref;

      let str2 = JSON.stringify(mref_state);
      return str2;
    case "03":
      var dianliu1_mreb_th = mrebDataProcess(160, data, 0.3137, 0)
      replaceObject(data1_state.dianliu1_mreb, dianliu1_mreb_th)
      // console.log(data1_state.dianzu_mref)
      var dianliu2_mreb_th = mrebDataProcess(162, data, 0.3137, 0)
      replaceObject(data1_state.dianliu2_mreb, dianliu2_mreb_th)
      var dianya_mreb_th = mrebDataProcess(164, data, 0.3137, 0)
      replaceObject(data1_state.dianya_mreb, dianya_mreb_th)
      mreb_state['symple'] = symple;
      mreb_state['dianliu1_mreb'] = data1_state.dianliu1_mreb;
      mreb_state['dianliu2_mreb'] = data1_state.dianliu2_mreb;
      mreb_state['dianya_mreb'] = data1_state.dianya_mreb;

      let str3 = JSON.stringify(mreb_state);
      return str3;
  }
}
/* 2023.5.23  王昌凡编写*/
function mretDataProcess(val, data_val, mul, sub) {  //MRET状态处理方法
  var state_mret = {
    mret0: "", mret1: "", mret2: "", mret3: "", mret4: "", mret5: "", mret6: "", mret7: "", mret8: "", mret9: "", mret10: "", mret11: "",
    mret12: "", mret13: "", mret14: "", mret15: "", mret16: "", mret17: "", mret18: "", mret19: "", mret20: "", mret21: "",
    mret22: "", mret23: "", mret24: "", mret25: "", mret26: "", mret27: "", mret28: "", mret29: "", mret30: "", mret31: ""
  }
  state_mret.mret0 = ((hexto10(data_val.substr(val, 2)) * mul) + sub).toFixed(2)
  state_mret.mret1 = ((hexto10(data_val.substr((val + 40 * 1), 2)) * mul) + sub).toFixed(2)
  state_mret.mret2 = ((hexto10(data_val.substr((val + 40 * 2), 2)) * mul) + sub).toFixed(2)
  state_mret.mret3 = ((hexto10(data_val.substr((val + 40 * 3), 2)) * mul) + sub).toFixed(2)
  state_mret.mret4 = ((hexto10(data_val.substr((val + 40 * 4), 2)) * mul) + sub).toFixed(2)
  state_mret.mret5 = ((hexto10(data_val.substr((val + 40 * 5), 2)) * mul) + sub).toFixed(2)
  state_mret.mret6 = ((hexto10(data_val.substr((val + 40 * 6), 2)) * mul) + sub).toFixed(2)
  state_mret.mret7 = ((hexto10(data_val.substr((val + 40 * 7), 2)) * mul) + sub).toFixed(2)
  state_mret.mret8 = ((hexto10(data_val.substr((val + 40 * 8), 2)) * mul) + sub).toFixed(2)
  state_mret.mret9 = ((hexto10(data_val.substr((val + 40 * 9), 2)) * mul) + sub).toFixed(2)
  state_mret.mret10 = ((hexto10(data_val.substr((val + 40 * 10), 2)) * mul) + sub).toFixed(2)
  state_mret.mret11 = ((hexto10(data_val.substr((val + 40 * 11), 2)) * mul) + sub).toFixed(2)
  state_mret.mret12 = ((hexto10(data_val.substr((val + 40 * 12), 2)) * mul) + sub).toFixed(2)
  state_mret.mret13 = ((hexto10(data_val.substr((val + 40 * 13), 2)) * mul) + sub).toFixed(2)
  state_mret.mret14 = ((hexto10(data_val.substr((val + 40 * 14), 2)) * mul) + sub).toFixed(2)
  state_mret.mret15 = ((hexto10(data_val.substr((val + 40 * 15), 2)) * mul) + sub).toFixed(2)
  state_mret.mret16 = ((hexto10(data_val.substr((val + 40 * 16), 2)) * mul) + sub).toFixed(2)
  state_mret.mret17 = ((hexto10(data_val.substr((val + 40 * 17), 2)) * mul) + sub).toFixed(2)
  state_mret.mret18 = ((hexto10(data_val.substr((val + 40 * 18), 2)) * mul) + sub).toFixed(2)
  state_mret.mret19 = ((hexto10(data_val.substr((val + 40 * 19), 2)) * mul) + sub).toFixed(2)
  state_mret.mret20 = ((hexto10(data_val.substr((val + 40 * 20), 2)) * mul) + sub).toFixed(2)
  state_mret.mret21 = ((hexto10(data_val.substr((val + 40 * 21), 2)) * mul) + sub).toFixed(2)
  state_mret.mret22 = ((hexto10(data_val.substr((val + 40 * 22), 2)) * mul) + sub).toFixed(2)
  state_mret.mret23 = ((hexto10(data_val.substr((val + 40 * 23), 2)) * mul) + sub).toFixed(2)
  state_mret.mret24 = ((hexto10(data_val.substr((val + 40 * 24), 2)) * mul) + sub).toFixed(2)
  state_mret.mret25 = ((hexto10(data_val.substr((val + 40 * 25), 2)) * mul) + sub).toFixed(2)
  state_mret.mret26 = ((hexto10(data_val.substr((val + 40 * 26), 2)) * mul) + sub).toFixed(2)
  state_mret.mret27 = ((hexto10(data_val.substr((val + 40 * 27), 2)) * mul) + sub).toFixed(2)
  state_mret.mret28 = ((hexto10(data_val.substr((val + 40 * 28), 2)) * mul) + sub).toFixed(2)
  state_mret.mret29 = ((hexto10(data_val.substr((val + 40 * 29), 2)) * mul) + sub).toFixed(2)
  state_mret.mret30 = ((hexto10(data_val.substr((val + 40 * 30), 2)) * mul) + sub).toFixed(2)
  state_mret.mret31 = ((hexto10(data_val.substr((val + 40 * 31), 2)) * mul) + sub).toFixed(2)
  return state_mret
}

function mrefDataProcess(val, data_val, mul, sub) {  //MRET状态处理方法
  var state_mref = {
    mref0: "", mref1: "", mref2: "", mref3: "", mref4: "", mref5: "", mref6: "", mref7: "", mref8: "", mref9: "", mref10: "", mref11: "",
    mref12: "", mref13: "", mref14: "", mref15: "", mref16: "", mref17: "", mref18: "", mref19: "", mref20: "", mref21: "",
    mref22: "", mref23: "", mref24: "", mref25: "", mref26: "", mref27: "", mref28: "", mref29: "", mref30: "", mref31: ""
  }
  state_mref.mref0 = ((hexto10(data_val.substr(val, 2)) * mul) + sub).toFixed(2)
  state_mref.mref1 = ((hexto10(data_val.substr((val + 40 * 1), 2)) * mul) + sub).toFixed(2)
  state_mref.mref2 = ((hexto10(data_val.substr((val + 40 * 2), 2)) * mul) + sub).toFixed(2)
  state_mref.mref3 = ((hexto10(data_val.substr((val + 40 * 3), 2)) * mul) + sub).toFixed(2)
  state_mref.mref4 = ((hexto10(data_val.substr((val + 40 * 4), 2)) * mul) + sub).toFixed(2)
  state_mref.mref5 = ((hexto10(data_val.substr((val + 40 * 5), 2)) * mul) + sub).toFixed(2)
  state_mref.mref6 = ((hexto10(data_val.substr((val + 40 * 6), 2)) * mul) + sub).toFixed(2)
  state_mref.mref7 = ((hexto10(data_val.substr((val + 40 * 7), 2)) * mul) + sub).toFixed(2)
  state_mref.mref8 = ((hexto10(data_val.substr((val + 40 * 8), 2)) * mul) + sub).toFixed(2)
  state_mref.mref9 = ((hexto10(data_val.substr((val + 40 * 9), 2)) * mul) + sub).toFixed(2)
  state_mref.mref10 = ((hexto10(data_val.substr((val + 40 * 10), 2)) * mul) + sub).toFixed(2)
  state_mref.mref11 = ((hexto10(data_val.substr((val + 40 * 11), 2)) * mul) + sub).toFixed(2)
  state_mref.mref12 = ((hexto10(data_val.substr((val + 40 * 12), 2)) * mul) + sub).toFixed(2)
  state_mref.mref13 = ((hexto10(data_val.substr((val + 40 * 13), 2)) * mul) + sub).toFixed(2)
  state_mref.mref14 = ((hexto10(data_val.substr((val + 40 * 14), 2)) * mul) + sub).toFixed(2)
  state_mref.mref15 = ((hexto10(data_val.substr((val + 40 * 15), 2)) * mul) + sub).toFixed(2)
  state_mref.mref16 = ((hexto10(data_val.substr((val + 40 * 16), 2)) * mul) + sub).toFixed(2)
  state_mref.mref17 = ((hexto10(data_val.substr((val + 40 * 17), 2)) * mul) + sub).toFixed(2)
  state_mref.mref18 = ((hexto10(data_val.substr((val + 40 * 18), 2)) * mul) + sub).toFixed(2)
  state_mref.mref19 = ((hexto10(data_val.substr((val + 40 * 19), 2)) * mul) + sub).toFixed(2)
  state_mref.mref20 = ((hexto10(data_val.substr((val + 40 * 20), 2)) * mul) + sub).toFixed(2)
  state_mref.mref21 = ((hexto10(data_val.substr((val + 40 * 21), 2)) * mul) + sub).toFixed(2)
  state_mref.mref22 = ((hexto10(data_val.substr((val + 40 * 22), 2)) * mul) + sub).toFixed(2)
  state_mref.mref23 = ((hexto10(data_val.substr((val + 40 * 23), 2)) * mul) + sub).toFixed(2)
  state_mref.mref24 = ((hexto10(data_val.substr((val + 40 * 24), 2)) * mul) + sub).toFixed(2)
  state_mref.mref25 = ((hexto10(data_val.substr((val + 40 * 25), 2)) * mul) + sub).toFixed(2)
  state_mref.mref26 = ((hexto10(data_val.substr((val + 40 * 26), 2)) * mul) + sub).toFixed(2)
  state_mref.mref27 = ((hexto10(data_val.substr((val + 40 * 27), 2)) * mul) + sub).toFixed(2)
  state_mref.mref28 = ((hexto10(data_val.substr((val + 40 * 28), 2)) * mul) + sub).toFixed(2)
  state_mref.mref29 = ((hexto10(data_val.substr((val + 40 * 29), 2)) * mul) + sub).toFixed(2)
  state_mref.mref30 = ((hexto10(data_val.substr((val + 40 * 30), 2)) * mul) + sub).toFixed(2)
  state_mref.mref31 = ((hexto10(data_val.substr((val + 40 * 31), 2)) * mul) + sub).toFixed(2)
  return state_mref
}

function mrebDataProcess(val, data_val, mul, sub) {  //MRET状态处理方法
  var state_mreb = { mreb0: "", mreb1: "", mreb2: "", mreb3: "", mreb4: "", mreb5: "", mreb6: "", mreb7: "" }
  state_mreb.mreb0 = ((hexto10(data_val.substr(val, 2)) * mul) + sub).toFixed(2)
  state_mreb.mreb1 = ((hexto10(data_val.substr((val + 20 * 1), 2)) * mul) + sub).toFixed(2)
  state_mreb.mreb2 = ((hexto10(data_val.substr((val + 20 * 2), 2)) * mul) + sub).toFixed(2)
  state_mreb.mreb3 = ((hexto10(data_val.substr((val + 20 * 3), 2)) * mul) + sub).toFixed(2)
  state_mreb.mreb4 = ((hexto10(data_val.substr((val + 20 * 4), 2)) * mul) + sub).toFixed(2)
  state_mreb.mreb5 = ((hexto10(data_val.substr((val + 20 * 5), 2)) * mul) + sub).toFixed(2)
  state_mreb.mreb6 = ((hexto10(data_val.substr((val + 20 * 6), 2)) * mul) + sub).toFixed(2)
  state_mreb.mreb7 = ((hexto10(data_val.substr((val + 20 * 7), 2)) * mul) + sub).toFixed(2)
  return state_mreb
}

function replaceObject(newObject, oldObject) {//对象赋值函数，将方法计算得到对象键值对赋值给另一个对象。
  for (let key in oldObject) {
    newObject[key] = oldObject[key]
  }
}
function hexto10(hex){  //十六进制转10进制
  var hexto10 = parseInt(hex,16)
  return hexto10;//十六进制转10进制
}
