import hamburgerMenuReducer from "./hamburgerMenuReducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    hamburgerMenu: hamburgerMenuReducer
});

let store = createStore(reducers, applyMiddleware());

window.store = store;

export default store;