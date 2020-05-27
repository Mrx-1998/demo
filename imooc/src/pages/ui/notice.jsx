import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'

export default class notice extends Component {
  openNotification = (type, direction) => {
    notification[type]({
      message: type,
      description: 'react学习',
      duration: 1,
      placement: direction
    })
  }
  render() {
    return (
      <div>
        <Card title='通知提醒框' className='card-wrap'>
          <Button type='primary' onClick={() => this.openNotification('success', 'topLeft ')}>Success</Button>
          <Button type='primary' onClick={() => this.openNotification('info', 'bottomLeft')}>Info</Button>
          <Button type='primary' onClick={() => this.openNotification('warning')}>Warning</Button>
          <Button type='primary' onClick={() => this.openNotification('error')}>Error</Button>
        </Card>
      </div>
    )
  }
}
