import React, { useEffect } from 'react'
import { Divider } from 'antd'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actionCreators'

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import './index.css'



const Index = (props) => {

  const { getAboutMsg, aboutMsg } = props
  
  const aboutMsgJS = aboutMsg ? aboutMsg.toJS () : []; 

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

  useEffect(() => {
    if(aboutMsgJS.length === 0){
      getAboutMsg()
    }
  }, [getAboutMsg, aboutMsgJS.length])
  
  
  return(
    <div className='AboutWrapper'>
      {
        aboutMsgJS.map((item ,index) =>{
          return(
            <div key={index}>
              <Divider orientation='left'>Blog</Divider>
              <div 
                className='blog-content'
                dangerouslySetInnerHTML={{__html: marked(item.blog)}}
                />
              <Divider orientation='left' >Me</Divider>
              <div 
                dangerouslySetInnerHTML={{__html: marked(item.Me)}}
                />
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    aboutMsg: state.get('about')
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getAboutMsg() {
      dispatch(actionTypes.getAboutRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)