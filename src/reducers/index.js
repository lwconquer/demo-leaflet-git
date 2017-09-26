import { combineReducers } from 'redux';

import userReducer from './userReducer';
import tweetsReducer from './tweetsReducer';
import mapControlReducer from './mapControlReducer';
import mainRegionManagerReducer from './mainRegionManagerReducer';
import queryToolReducer from './queryToolReducer';
import dataListToolReducer from './dataListToolReducer';
import dataTableReducer from './dataTableReducer';

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});

export default combineReducers({
    info: reducers,
    apple: tweetsReducer,
    mainRegionManager: mainRegionManagerReducer,
    mapControl: mapControlReducer,
    queryTool: queryToolReducer,
    dataListTool: dataListToolReducer,
    dataTable: dataTableReducer
});