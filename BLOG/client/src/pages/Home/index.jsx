import React from 'react'
import { connect } from 'react-redux'
import { Divider, Card, Row, Col, Tag } from 'antd'
import { color } from '../../utils'
import {NavLink} from 'react-router-dom'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import './index.css'
import { TagsOutlined, EyeOutlined, FolderOutlined } from '@ant-design/icons';


const Home = (props) => {
  const { articleTitle } = props
  const articleTitleJS = articleTitle ? articleTitle.toJS () : []; 

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
    sanitizer:false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  }); 

  const toDetailed = (id) => {
    props.history.push('/detailed/'+id)
  }

  return(
    <div className='home-wrapper'>
    <Row>
      <Col xxl={19} xl={19} lg={19} sm={24} xs={24}>
            {
              articleTitleJS.reverse().map((item, index) => {
                return(
                  <Card
                    hoverable
                    style={{ width: '95%', margin: '0 auto 20px' }}
                    key={index}
                    className='Card-wrapper'
                    onClick={ () =>{toDetailed(item.id)}}
                  >
                  <Divider orientation='left' >
                    <span className='card-title'>{item.title}</span>
                    <span className='card-time'>{item.addTime.slice(0, 10)}</span>
                  </Divider>
                  <div className="article-introduce"  
                    dangerouslySetInnerHTML={{__html:marked(item.introduce)}}
                  />
                  <div className="article-tags">
                    <span>
                      <EyeOutlined style={{marginRight: '5px'}} />
                      {item.view_count}
                      <Divider type='vertical' />
                      <TagsOutlined style={{marginRight: '5px'}}/>
                      <Tag color={color[Math.floor(Math.random() * color.length)]}>{item.typeName}</Tag>
                      <Divider type='vertical' />
                      <FolderOutlined style={{marginRight: '5px'}}/>
                      <Tag style={{backgroundColor: 'rgb(45, 183, 245)', color: '#fff',borderRadius: '5px' }} >{item.typeName}</Tag>
                    </span>
                  </div>
                </Card>
                )
              })
            }
      </Col>
      <Col xxl={5} xl={5} lg={5} sm={0} xs={0}>
        <div className='Card-wrapper'>
          <Divider>快速导航</Divider>
          <ul className='article-list'>
            {
              articleTitleJS.slice(0,5).map((item, index) => {
                return(
                  <li key={index}>
                    <NavLink to={`/detailed/${item.id}`}>{item.title}</NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </Col>
    </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  articleTitle: state.get('articleTitle')
});

export default connect(mapStateToProps, null)(Home)