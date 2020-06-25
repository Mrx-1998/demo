import React, { useState } from 'react'
import { Row, Col, Button, Input, message } from 'antd'
import axios from 'axios'
import sevicePath from '../config/apiUrl'


const AddType = () => {

  const [typeName, setTypeName] = useState()
  const [id, setId] = useState()

  const addTypeName = () => {
    let data = {
      typeName,
      ord_id: id
    }
    axios({
      method: 'post',
      url: sevicePath.addTypeName,
      data,
      header:{   'Access-Control-Allow-Origin':'*' },
      withCredentials: true
    }).then(res => {
      console.log(res);
      message.success('添加成功')
    })
  }

  return(
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <span>类型</span>
        </Col>
        <Col span={8}>
          <span>类型id</span>
        </Col>
        <Col span={8}>
          <span>操作</span>
        </Col>
      </Row>
      <br></br>
      <Row gutter={16}>
        <Col span={8}>
          <Input onChange={e => setTypeName(e.target.value)}></Input>
        </Col>
        <Col span={8}>
          <Input onChange={e => setId(e.target.value)}></Input>
        </Col>
        <Col span={8}>
          <Button type='primary' onClick={addTypeName}>增加</Button>
        </Col>
      </Row>
    </div>
  )
}

export default AddType