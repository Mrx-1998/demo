import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentWillMount() {
    console.log('componentWillMount');
    
  }
  
  componentDidMount() {
    console.log('componentDidMount');
    
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps'+ newProps);
  }
  
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');

  }


  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
