import React,{ useEffect, useState } from 'react'
import { Spin, message, Row, Col, Divider, Tag, Affix } from 'antd'
import { getArticleById } from '../../api/request';
import './index.css'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import { HighlightOutlined, TagOutlined, FolderOutlined, EyeOutlined } from '@ant-design/icons';

const Detailed = (props) => {
  const [articleTitle, setArticleTitle] = useState()
  const [article, setArticle] = useState()
  const [articleContent, setArticleContent] = useState()
  const [articleAddTime, setArticleAddTime] = useState()
  const [articleViewCount, setArticleViewCount] = useState()
  const [articleTypeName, setArticleTypeName] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const renderer = new marked.Renderer();

  marked.setOptions({

    renderer: renderer,

    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,

    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }

  }); 



  const id = props.match.params.id
  
  const getArticle = (id) => {
    getArticleById(id).then(res => {
      setArticleTitle(res.data.result[0].title)
      setArticle(res.data.result[0].content)
      setArticleContent(marked(res.data.result[0].content))
      setArticleAddTime(res.data.result[0].addTime.slice(0, 10))
      setArticleViewCount(res.data.result[0].view_count)
      setArticleTypeName(res.data.result[0].typeName)
      setIsLoading(false)
    })
    .catch(() => {
      message.error('获取失败')
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getArticle(id)
  }, [id])
  
  
  return (
    <div className='article-wrapper'>
        <Spin spinning={ isLoading } size='default' tip="Loading...">
        <Row>
          <Col xxl={19} xl={19} lg={19} sm={24} xs={24}>
            <div className='artilce-header'>
              <div className='artilce-title'>{articleTitle}</div>
                <div className='article-desc'>
                  <span>
                    <HighlightOutlined />
                    {articleAddTime}
                  </span>
                  <Divider type='vertical'/>
                  <TagOutlined style={{marginRight: '5px'}}/>
                  <Tag color='magenta'>{articleTypeName}</Tag>
                  <Divider type='vertical' />
                  <FolderOutlined style={{marginRight: '5px'}}/>
                  <Tag style={{backgroundColor: 'rgb(45, 183, 245)', color: '#fff',borderRadius: '5px' }} >{articleTypeName}</Tag>

                  <Divider type='vertical' />

                  <EyeOutlined style={{marginRight: '5px'}} />
                      {articleViewCount}
                </div>
            </div>
            <div className='artilce-content'>
              <div className="article-detailed"
                dangerouslySetInnerHTML={{__html: articleContent}}></div>
            </div>
          </Col>
          <Col xxl={5} xl={5} lg={5} sm={0} xs={0}>

            <Affix offsetTop={120}>
              <div className="nav-title">文章目录</div>
              <div className="detailed-nav">
                <MarkNav
                  className="article-menu"
                  source={article}
                  ordered={false}
                />
              </div>
            </Affix>

          </Col>
        </Row>
        </Spin> 
    </div>
  )
}

export default Detailed