import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { putDataReducer } from "./putDataReducer";
import hamburgerMenuReducer from "./hamburgerMenuReducer";
import { watchLoadData } from './sagas';

const { createStore, combineReducers, applyMiddleware } = require("redux");

export const sagaMiddleware = createSagaMiddleware();

let reducers = combineReducers({
    hamburgerMenu: hamburgerMenuReducer,
    putData: putDataReducer
});

let store = createStore(reducers, applyMiddleware(logger,sagaMiddleware));
sagaMiddleware.run(watchLoadData);


window.store = store;

export default store;