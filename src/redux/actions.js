/*
  包含n个action creator
  异步 action
  同步 action
*/

import { AUTH_SUCCESS, ERROR_MSG } from "./action-types";

import { reqRegister, reqLogin } from "../api";

const authSuccess = user => ({ type: AUTH_SUCCESS, data: user })
const errorMsg = msg => ({ type: ERROR_MSG, data: msg })

export const register = user => {
  const { username, password, password2, type } = user

  // 表单前端验证
  if(!username) {
    return errorMsg('用户名必须指定')
  }
  if(!password) {
    return errorMsg('密码必填！')
  }
  if(password !== password2) {
    return errorMsg('两次密码要一致')
  }

  return async dispatch => {

    // if(password !== password2) {
    //   return dispatch(errorMsg('两次密码要一致))
    // }

    const response = await reqRegister({ username, password, type })
    const result = response.data
    if(result.code === 0) {
      dispatch(authSuccess(result.data))
    }
    else {
      dispatch(errorMsg(result.msg))
    }
  }
}

export const login = user => {

  const { username, password } = user

  // 表单前端验证
  if(!username) {
    return errorMsg('用户名必须指定')
  }
  if(!password) {
    return errorMsg('密码必填！')
  }

  return async dispatch => {
    const response = await reqLogin(user)
    const result = response.data
    if(result.code === 0) {
      dispatch(authSuccess(result.data))
    }
    else {
      dispatch(errorMsg(result.msg))
    }
  }
}
