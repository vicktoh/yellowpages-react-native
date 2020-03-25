import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import authReducer from './authReducer';

const persistedAuthReducer = persistReducer({key: 'auth', storage: AsyncStorage}, authReducer);

export default combineReducers({
    auth: persistedAuthReducer
})