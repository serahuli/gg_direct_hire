/*
 注册路由组件
 */

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Logo from "../../components/logo/logo";

import { register } from '../../redux/actions'

import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from "antd-mobile";
const ListItem = List.Item

class Register extends Component {

  state = {
    username: '',
    password: '',
    password2: '',
    type: 'laoban'  //
  }

  register = () => {
    this.props.register(this.state)
  }

  // 处理输入数据改变
  handleChange = (name, val) => {
    this.setState({
      [name]: val
    })
  }

  toLogin = () => {
    this.props.history.replace('/login')
  }

  render() {
    const { type } = this.state
    const { msg, redirectTo } = this.props.user
    if(redirectTo) {
      return <Redirect to={ redirectTo }></Redirect>
    }
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            { msg ? <div className='error-msg'> { msg } </div> : null }
            <WhiteSpace />
            <InputItem placeholder='请输入用户名' onChange={ val => { this.handleChange('username', val) } }>用户名：</InputItem>
            <WhiteSpace />
            <InputItem placeholder='请输入密码' type="password" onChange={ val => { this.handleChange('password', val) } }>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <WhiteSpace />
            <InputItem placeholder='请确认 密码' type="password" onChange={ val => { this.handleChange('password2', val) } }>确认密码：</InputItem>
            <WhiteSpace />
            <ListItem>
              <span>用户身份</span>
              &nbsp;&nbsp;&nbsp;
              <Radio checked={ type==='dashen' } onChange={ () => this.handleChange('type', 'dashen')} >大神</Radio>
              &nbsp;&nbsp;&nbsp;
              <Radio checked={ type==='laoban' } onChange={ () => this.handleChange('type', 'laoban') }>老板</Radio>
            </ListItem>
            <WhiteSpace />
            <Button type='primary' onClick={ this.register }>注&nbsp;&nbsp;&nbsp;&nbsp;册</Button>
            <Button onClick={ this.toLogin }>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({ user: state.user }),
  { register }
)(Register)
