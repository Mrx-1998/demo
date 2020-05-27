import React, { Component } from 'react'
import { Card, Button, Radio } from 'antd'
import { DownloadOutlined, SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './ui.less'

class Buttons extends Component {
  constructor(props){
    super(props) 
    this.state = {
      loading: true,
      size: 'small'
    }
  }
  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }
  handleOpenLoading = () => {
    this.setState({
      loading: true
    })
  }
  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Card title='基础按钮'>
            <Button type='primary'>Imooc</Button>
            <Button >Imooc</Button>
            <Button type='dashed'>Imooc</Button>
            <Button type='danger'>Imooc</Button>
            <Button disabled>Imooc</Button>
        </Card>
        <Card title='图形按钮'>
            <Button icon={<PlusOutlined />}>创建</Button>
            <Button icon={<EditOutlined />}>编辑</Button>
            <Button icon={<DeleteOutlined />}>删除</Button>
            <Button shape='circle' icon={<SearchOutlined />}></Button>
            <Button type='primary' icon={<SearchOutlined />}>搜索</Button>
            <Button type='primary' icon={<DownloadOutlined />}>下载</Button>
        </Card>
        <Card title='loading按钮'>
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" loading={this.state.loading} shape='circle'></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button loading={this.state.loading} shape='circle'></Button>
          <Button type='primary' onClick={this.handleCloseLoading} disabled={this.state.loading}>关闭</Button>
          <Button type='primary' onClick={this.handleOpenLoading} disabled={this.state.loading}>开启</Button>
        </Card>
        <Card title='按钮组'>
            <Button.Group>
              <Button icon={<LeftOutlined />}>返回</Button>
              <Button icon={<RightOutlined />}>前进</Button>
            </Button.Group>
        </Card>
        <Card title='按钮大小'>
          <Radio.Group value={this.state.size}>
            <Radio value="small" checked onChange={this.handleChange}>小</Radio>
            <Radio value="default" onChange={this.handleChange}>中</Radio>
            <Radio value="large" onChange={this.handleChange}>大</Radio>
          </Radio.Group>
            <Button type='primary' size={this.state.size}>Imooc</Button>
            <Button size={this.state.size}>Imooc</Button>
            <Button type='dashed' size={this.state.size}>Imooc</Button>
            <Button type='danger' size={this.state.size}>Imooc</Button>
            <Button disabled size={this.state.size}>Imooc</Button>
        </Card>
      </div>
    )
  }
}
export default Buttons