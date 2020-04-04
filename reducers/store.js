import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import reducers from './index';
import {persistStore} from 'redux-persist'

export const store = createStore(reducers, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);


