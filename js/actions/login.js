
'use strict';

import type {Action} from './types';
import ApiServices from '../api/services';
export const USER_LOGIN = "USER_LOGIN";

export function userLogin(username:string, userpwd:string):Action {
  var data = {};
  data.username = username;
  data.userpwd = userpwd;
  return ApiServices.Login('123',data).then(function(result){
    return {
        type: USER_LOGIN,
        username:result.username,
        userpwd:result.userpwd,
        status:result.status
    }
  })
}
