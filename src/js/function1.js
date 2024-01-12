/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-02 09:51:31
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2023-02-02 10:44:36
 * @FilePath: \sgm-udp-ceshi\src\utils\function.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */ 
const function2 = {
      fillZero :(str)=>{
          var zeroStr = "";
          var zeroLength = 8 - str.length;
          for(var i=0;i<zeroLength;i++){
          zeroStr += "0";
          }
          return zeroStr+str//对二进制数组补零
        },
      hexto10  :(hex)=>{
          var hexto10 = parseInt(hex,16)
          return hexto10;//十六进制转10进制
        },
      hexto2  :(hex)=>{
          var hexto2 = function2.fillZero(parseInt(hex,16).toString(2));
          return hexto2;//十六进制转2进制
        },
      binarytoarry2  :(str)=>{
          var switcharry = new Array();
          var i;
          for(i=0;i<str.length;i++){
            switcharry.push(str.charAt(i)) 
          }
          return switcharry;
        //遍历二进制字符串内容，输出数组
        },
      }

export default function2