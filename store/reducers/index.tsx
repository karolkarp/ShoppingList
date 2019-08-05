/* eslint-disable no-tabs */
import { combineReducers } from 'redux';
import { common } from './common';
import { purchases } from './purchases';

export default combineReducers({
	common,
	purchases,
});
