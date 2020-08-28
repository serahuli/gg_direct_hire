/*
 包含多个 reducer 函数， 根据旧的 state 和指定的 action 返回一个 新的 state
 */

import { combineReducers } from 'redux'

import { AUTH_SUCCESS, ERROR_MSG } from "./action-types";

const initUser = { username: '', type: '', msg: '' }

function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, ...action.data}
    case ERROR_MSG:
      return {...state, msg: action.data}
    default:
      return state
  }
}

export default combineReducers({
  user
})
