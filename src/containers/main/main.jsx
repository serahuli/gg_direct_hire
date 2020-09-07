/*
 主界面路由
 */

import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'

import LaobanInfo from "../laoban-info/laoban-info";
import DashenInfo from "../dashen-info/dashen-info";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/dashen-info' component={ DashenInfo }/>
          <Route path='/laoban-info' component={ LaobanInfo }/>
        </Switch>
      </div>
    )
  }
}
