/*
 包含多个 reducer 函数， 根据旧的 state 和指定的 action 返回一个 新的 state
 */

import { combineReducers } from 'redux'

import { AUTH_SUCCESS, ERROR_MSG } from "./action-types";

import { getRedirectTo } from "../utils";

const initUser = { username: '', type: '', msg: '', redirectTo: '' }

function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      const { type, header } = action.data
      return { ...action.data, redirectTo: getRedirectTo(type, header)}
    case ERROR_MSG:
      return {...state, msg: action.data}
    default:
      return state
  }
}

export default combineReducers({
  user
})
