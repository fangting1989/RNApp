
'use strict';

import type {Action} from '../actions/types';
import { USER_LOGIN } from '../actions/login';

import { replaceRoute } from '../actions/route';

export type State = {
    loginState: string
}

const initialState = {
    loginState: 'LOGIN'
};

export default function (state:State = initialState, action:Action): State {
  switch(action.type){
    case USER_LOGIN:
      return {
        ...state,loginState: 'USER_LOGIN'
      }
    break;
    default: return state; break
  }
}
