import React, { Component } from 'react'
import Child from './Child'
import './index.less'
import { Button } from 'antd'

export default class Life extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleAdd= () => {
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
  }

  handleAdd2() {
    console.log(this) // undefind
  }

  render() {
    return (
      <div style={{ padding: 50 }} className="content">
        <p>react生命周期</p>
        <Button onClick={this.handleAdd}>点击一下</Button>
        <Button onClick={this.handleAdd2}>点击一下</Button>
        <p>{this.state.count}</p>
        <Child name= {this.state.count} />
      </div>
    )
  }
}
