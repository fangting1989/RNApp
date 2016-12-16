
'use strict';

import React, { Component } from 'react';

import ApiBase from './ApiBase';
//http://localhost:3000/api/TUsers/UserLoginPost
const ApiHostUrl = 'http://192.168.0.158:3000/api/TUsers/UserLoginPost';
/**pageLoginServices**/
class ApiServices extends React.Component {
  /**page loign**/
  static Login(Url,data){
    return ApiBase.postData(ApiHostUrl,data).then(function(result){
      return result;
    })
  }
}

module.exports = ApiServices;
