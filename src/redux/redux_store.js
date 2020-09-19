import headerMenuReducer from "./headerMenuReducer";

// import thunkMiddleware from 'redux-thunk'
// import { reducer as formReducer } from 'redux-form'



const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    menu: headerMenuReducer

});

let store = createStore(reducers, applyMiddleware());

window.store = store;

export default store;