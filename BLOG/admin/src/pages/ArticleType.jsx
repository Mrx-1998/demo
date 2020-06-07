import React, { useState, useEffect } from 'react'
import { Row, Col, List, Button } from 'antd'
import '../static/css/ArticleList.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const ArticleType = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: servicePath.getType,
            withCredentials: true
        }).then(res => {
            console.log(res.data.data);
            setList(res.data.data)
        })
    }, [])

  return (
    <div>
      <List
        header={
            <Row className="list-div">
                <Col span={6}>
                    <b>id</b>
                </Col>
                <Col span={6}>
                    <b>typeName</b>
                </Col>
                <Col span={6}>
                    <b>ord_id</b>
                </Col>
                <Col span={6}>
                    <b>操作</b>
                </Col>
            </Row>
        }
        bordered
        dataSource={list}
        renderItem={item => (
            <List.Item>
                <Row className="list-div">
                    <Col span={6}>
                        {item.id}
                    </Col>
                    <Col span={6}>
                        {item.typeName}
                    </Col>
                    <Col span={6}>
                        {item.ord_id}
                    </Col>
                    <Col span={6}>
                      <Button type="primary" 
                      // onClick={() => updateArticle(item.id)}
                      >修改</Button>&nbsp;

                      <Button 
                    //   onClick={() => delArticle(item.id)}
                      >删除 </Button>
                    </Col>
                </Row>

            </List.Item>
        )}
        />
    </div>
  )
}

export default ArticleType