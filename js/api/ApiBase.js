
'use strict';
import React, { Component } from 'react';

class ApiBase extends React.Component {
  //post请求
  /**
  *url :请求地址
  *data:参数对象
  *callback:回调函数
  *type:null为json模式，not null 为 application/x-www-form-urlencoded 方式
  */
  static  postData(url, data, type) {
    var fetchOptions = null
    if(typeof type == 'undefined'){
      fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          //json形式
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
    }else{
      fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:data
      };
    }

    return new Promise((resolve, reject) =>{
      fetch(url,fetchOptions).then((response)=>response.json())
        .then((responseData) => {
            resolve(responseData);
      }).catch((error) => {
        reject(new Error('网路异常'));
      }).done();
    });
    }
  //get请求
  /**
  *url :请求地址
  *callback:回调函数
  */
  static  getData(url,data) {
    return new Promise((resolve, reject) =>{
      fetch(url).then((response)=>response.json())
        .then((responseData) => {
            resolve(responseData.d);
      }).catch((error) => {
        reject(new Error('网路异常'));
      }).done();
    });
  }
}
module.exports = ApiBase;
