import React from 'react'
import { Divider, Tag, Affix } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'
import { color } from '../../utils'

const Index = (props) => {
  
  const { articleTitleJS, typeNameJS } = props
  
  return (
      <Affix offsetTop={106}>
    <div className='side-wrapper'>
      <div className='side-avator'>
        <img src={require('../../assets/avator.jpg')} className='sider-avatar' alt='' />
        <span className='side-name'>Mrx</span>
        <span className='side-subname'>不要为旧的悲伤，浪费新的眼泪</span>
        <ul className='side-pages'>
          <li>
            <a href="https://github.com/Mrx-1998">
              <img src={require('../../assets/github.png')} alt=''/>
              github
            </a>
          </li>
          <li>
            <a href="https://juejin.im/user/5da0766e6fb9a04e3a7f6427/posts">
              <img src={require('../../assets/juejin.png')} alt=''/>
              juejin
            </a>
          </li>
        </ul>
      </div>

      <Divider orientation="left">最新文章</Divider>

      <ul className='article-list'>
        {
          articleTitleJS.slice(0,5).map((item, index) => {
            return(
              <li key={index}>
                <Link to={`/detailed/${item.id}`}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    
      <Divider orientation="left">标签</Divider>
    
        <div className='tag-list'>
          {typeNameJS.map((tag, i) => (
            <Tag key={i} color={color[Math.floor(Math.random() * color.length)]}>
              <Link to={`/typeArchives/${tag.id}`}>{tag.typeName}</Link>
            </Tag>
          ))}
        </div>
    </div>
      </Affix>
  )
}


export default React.memo(Index)