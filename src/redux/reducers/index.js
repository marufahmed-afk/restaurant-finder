import { combineReducers } from 'redux';
import restaurants from './restaurants';
import interaction from './interaction';

export default combineReducers({ restaurants, interaction });
