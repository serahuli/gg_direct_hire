/*
  老板信息完善路由容器组件
 */

import React, {Component} from "react";
import { connect } from 'react-redux'
import {
  NavBar,
  InputItem,
  TextareaItem,
  Button
} from "antd-mobile";
import HeaderSelector from "../../components/header-selector/header-selector";

class DashenInfo extends Component {

  static = {
    header: '',
    post: '',
    info: ''
  }

  setHeader = header => {
    this.setState({ header })
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  save = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <NavBar>大神信息完善</NavBar>
        <HeaderSelector setHeader={ this.setHeader }/>
        <InputItem placeholder="请输入求职岗位" onChange={val => { this.handleChange('post', val) }}>求职职位: </InputItem>
        <TextareaItem title="个人介绍" rows={ 3 } onChange={val => { this.handleChange('info', val) }}></TextareaItem>
        <Button type="primary" onClick={this.save}>保&nbsp;&nbsp;&nbsp;&nbsp;存</Button>
      </div>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(DashenInfo)

