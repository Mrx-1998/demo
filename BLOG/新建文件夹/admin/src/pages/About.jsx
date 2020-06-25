import React, {useState, useEffect} from 'react'
import {  Input,  message, Row, Col, Button } from 'antd';
import axios from 'axios'
import servicePath from '../config/apiUrl'
import marked from 'marked'
import '../static/css/AddArticle.css'

const About = () => {

  const [aboutBlog, setAboutBlog] = useState()
  const [aboutMes, setAboutMes] = useState()
  const [markdownContent, setMarkdownContent] = useState('预览内容') 
  const [blogMarkdownContent, setBlogMarkdownContent] = useState('预览内容') 

  marked.setOptions({
    renderer: marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  });

  const changeContent = (e) => {
    setAboutMes(e.target.value)
    let html=marked(e.target.value)
    setMarkdownContent(html)
  }

  const changeBlogMes = (e) => {
    setAboutBlog(e.target.value)
    let html=marked(e.target.value)
    setBlogMarkdownContent(html)
  }

  const updateMsg = () => {
    let data = {
      Me: markdownContent,
      blog: blogMarkdownContent
    }
    axios({
      method: 'patch',
      url: servicePath.addAbout,
      data,
      withCredentials: true
    }).then(
      res => {
        console.log(res);
      }
    )
  }

  return (
    <div>
      <div style={{marginBottom: '5px'}}>
        <Button type='default' onClick={updateMsg}>提交</Button>
      </div>
      <Row>
        <Col span='12'>
          <Input.TextArea
            value={aboutMes} 
            className="markdown-content" 
            style={{height: '400px'}}
            rows={35}  
            onChange={changeContent} 
            onPressEnter={changeContent}
            placeholder="个人信息"
            />
        </Col>
        <Col span='12'>
          <div 
            style={{height: '400px'}}
            className="show-html"
            dangerouslySetInnerHTML = {{__html:markdownContent}} 
          >
          </div>
        </Col>
      </Row>
      <Row>
        <Col span='12'>
          <Input.TextArea
            value={aboutBlog} 
            // className="markdown-content" 
            style={{height: '300px'}}
            rows={35}  
            onChange={changeBlogMes} 
            onPressEnter={changeBlogMes}
            placeholder="博客信息"
            />
        </Col>
        <Col span='12'>
          <div 
            className="show-html"
            style={{height: '300px'}}
            dangerouslySetInnerHTML = {{__html:blogMarkdownContent}} 
          >
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About