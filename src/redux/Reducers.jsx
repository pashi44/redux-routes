import store from './store'
import React from 'react'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import C from './actions'
import { act } from 'react-dom/test-utils'


//from  colors.jsx we can see that color  return type is object
export const color = (state = {}, action) => {

    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.title,
                timestmap: action.timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                }
        default:
            return state
    }
}



//from  colors.jsx we can see that colors  return type is array
export const colors = (state = [], action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return [
                ...state,
                color({}, action)
            ]
        case C.RATE_COLOR:
            return state.map(
                c => color(c, action)
            )
        case C.REMOVE_COLOR:
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}

//from  colors.jsx we can see that   sort    return type is   string 
export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case C.SORT_COLORS:
            return action.sortBy
        default:
            return state
    }
}


export { color, colors, sort };