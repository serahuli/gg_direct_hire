/*
  登录组件
 */

import React, {Component} from 'react'

import Logo from '../../components/logo/logo'

import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from "antd-mobile";

export default class Login extends Component {

  handleChange = (name, val) => {
    this.setState({ [name]: val })
  }

  login = () => {
    console.log(this.state);
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  render() {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            <WhiteSpace />
            <InputItem placeholder='请输入用户名' onChange={ val => this.handleChange('username', val) }>用户名：</InputItem>
            <WhiteSpace />
            <InputItem placeholder='请输入密码' type="password" onChange={ val => this.handleChange('password', val) }>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace />
            <Button type='primary' onClick={ this.login }>登&nbsp;&nbsp;&nbsp;&nbsp;陆</Button>
            <Button onClick={ this.toRegister }>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}
