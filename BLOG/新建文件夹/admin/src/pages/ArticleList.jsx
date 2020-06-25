import React, {useState, useEffect} from 'react'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { List, Row, Col, Modal, message, Button } from 'antd'
import '../static/css/ArticleList.css'

const { confirm } = Modal

const ArticleList = (props) => {

  const [list,setList] = useState([])
  
  const getArticleList = () => {
    axios({
      method: 'get',
      url: servicePath.getArticleList,
      withCredentials: true
    }).then(res => {
      setList(res.data.list)
    })
  }

  const delArticle = id => {
    confirm({
      title: '确定要删除嘛？',
      content: '如果你点击ok，文章永远被删除，无法恢复',
      onOk() {
        axios({
          method: 'delete',
          url: servicePath.delArticle + id,
          withCredentials: true
        }).then(res => {
          message.success('删除成功')
          getArticleList()
        })
      },
      onCancel() {
          message.success('取消删除')
      }
  })

  }

  const updateArticle = id => {
    props.history.push('/index/add/'+id)
  }

  useEffect(() => {
    getArticleList()
  }, [])

  return(
    <div>
      <List
        header={
            <Row className="list-div">
                <Col span={4}>
                    <b>标题</b>
                </Col>
                <Col span={3}>
                    <b>类别</b>
                </Col>
                <Col span={3}>
                    <b>发布时间</b>
                </Col>
                <Col span={7}>
                    <b>介绍</b>
                </Col>
                <Col span={3}>
                    <b>浏览量</b>
                </Col>

                <Col span={4}>
                    <b>操作</b>
                </Col>
            </Row>
        }
        bordered
        dataSource={list}
        renderItem={item => (
            <List.Item>
                <Row className="list-div">
                    <Col span={4}>
                        {item.title}
                    </Col>
                    <Col span={3}>
                      {item.typeName}
                    </Col>
                    <Col span={3}>
                        {item.addTime}
                    </Col>
                    <Col span={7}>
                        <span>{item.introduce}</span>
                    </Col>
                    <Col span={3}>
                      {item.view_count}
                    </Col>

                    <Col span={4}>
                      <Button type="primary" 
                      onClick={() => updateArticle(item.id)}
                      >修改</Button>&nbsp;

                      <Button 
                      onClick={() => delArticle(`${item.id}+${item.type_id}`)}
                      >删除 </Button>
                    </Col>
                </Row>

            </List.Item>
        )}
        />
    </div>
  )
}

export default ArticleList