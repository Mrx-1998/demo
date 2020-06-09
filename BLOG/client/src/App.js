import React from 'react';
import { Row, Col } from 'antd'
import Header from './components/Header/Header'
import SideBar from './components/SideBar'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Row className='content-warpper'>
        <Col span={4}>
          <SideBar />
        </Col>
        <Col span={16}>
          middle
        </Col>
        <Col span={4}>
          right
        </Col>
      </Row>
    </div>
  );
}

export default App;
