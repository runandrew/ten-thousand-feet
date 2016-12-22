// Required packages
import { combineReducers } from 'redux';

// Required files
import dayData from './api-data';
import user from './user';

export default combineReducers({ dayData, user });
