import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'

export default class modals extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false,
    type: ''
  }
  handleOpen = (type) => {
    this.setState({
      [type]: true,
      type
    })
  }
  handleConfirm = (type) => {
    Modal[type]({
      title: '确定?',
      content: '你确定你学会了React了吗？',
      onOk() {
        console.log('ok')
      },
      onCancel() {
        console.log('onCancel')
      }
    })
  }
  render() {
    return (
      <div>
        <Card title='基础模态框' className='card-wrap'>
          <Button type='primary' onClick={() => this.handleOpen('showModal1')}>Open</Button>
          <Button type='primary' onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type='primary' onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type='primary' onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title='信息确认框' className='card-wrap'>
          <Button type='primary' onClick={() => this.handleConfirm('confirm')}>confirm</Button>
          <Button type='primary' onClick={() => this.handleConfirm('info')}>info</Button>
          <Button type='primary' onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type='primary' onClick={() => this.handleConfirm('warning')}>Waring</Button>
          <Button type='primary' onClick={() => this.handleConfirm('error')}>error</Button>
        </Card>
        <Modal
          title='React'
          visible={this.state.showModal1}
          onCancel={() => this.setState({showModal1: false})}
        >
          <p>{this.state.type}</p>
        </Modal>
        <Modal
          title='React'
          visible={this.state.showModal2}
          okText='下一步'
          cancelText='算了'
          onCancel={() => this.setState({showModal2: false})}
        >
          <p>{this.state.type}</p>
        </Modal>
        <Modal
          style={{top:20}} // 自己封装的样式
          title='React'
          visible={this.state.showModal3}
          okText='下一步'
          cancelText='算了'
          onCancel={() => this.setState({showModal3: false})}
        >
          <p>{this.state.type}</p>
        </Modal>
        <Modal
          wrapClassName='vertical-center-modal' // 自己封装的样式
          title='React'
          visible={this.state.showModal4}
          okText='下一步'
          cancelText='算了'
          onCancel={() => this.setState({showModal4: false})}
        >
          <p>{this.state.type}</p>
        </Modal>
      </div>
    )
  }
}
