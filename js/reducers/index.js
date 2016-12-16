
'use strict';

import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import login from './login';

export default combineReducers({

 	drawer,
 	route,
  login

})
