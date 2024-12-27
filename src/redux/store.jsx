import { color, sort, colors } from "./Reducers";
// import { createStore, combineReducers } from 'redux'
//deprecated
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import C from './constants'
import initialstate from './applicationstore'
// const store = configureStore(color);
//color and  sort and pure reducer fucntions from Reducers 
const store = configureStore(combineReducers({ color, sort }), initialstate)
console.log(store.getState())


store.dispatch({
    type: C.ADD_COLOR,
    tittle: "party  pink",
    coloe: "#f3f3f3",
    timestamp:
        new Date()

})




module.exports = store;
