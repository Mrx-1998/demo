import React from 'react'
import { Row, Col, Menu } from 'antd';
import { SmileTwoTone, FolderOutlined, HomeOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';
import './index.css';

const Header = () => {
  return(
    <div className='header-warpper'>
      <Row>
        <Col span={4}>
          <span className='header-name'>
            <SmileTwoTone />
            <span className='header-name-title'>Mrx</span>
          </span>
        </Col>
        <Col span={20}>
          <Menu mode="horizontal">
            <Menu.Item key="index" icon={<HomeOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key="classify" icon={<TagOutlined />}>
              分类
            </Menu.Item>
            <Menu.Item key="time" icon={<FolderOutlined />}>
              归档
            </Menu.Item>
            <Menu.Item key="about" icon={<UserOutlined />}>
              关于
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header