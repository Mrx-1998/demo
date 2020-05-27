import React, { Component } from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.less'
import {
  LoadingOutlined
} from '@ant-design/icons';

export default class loadings extends Component {
  render() {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    return (
      <div>
        <Card title='Spin用法' className='card-wrap'>
          <Spin size='small'></Spin>
          <Spin style={{ margin: '0 10px' }}/>
          <Spin size='larger'></Spin>
          <Spin indicator={antIcon} style={{ marginLeft: 10 }} />
        </Card>

        <Card title='内容遮盖' className='card-wrap'>
          <Alert 
            message="React"
            description='欢迎来到理智的管理系统'
            type="info"
          />
          <Spin>
            <Alert 
              message="React"
              description='欢迎来到理智的管理系统'
              type="warning"
            />
            </Spin>
            <Spin tip='加载中...'  indicator={antIcon}>
              <Alert 
                message="React"
                description='欢迎来到理智的管理系统'
                type="warning"
              />
            </Spin>
        </Card>

      </div>
    )
  }
}
