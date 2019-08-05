/* eslint-disable no-tabs */
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';
import purchases from './reducers/purchases';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: [purchases],
	timeout:0,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
