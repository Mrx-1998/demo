import React,{ useState, useEffect } from 'react'
import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getArticleByTypeId } from '../../api/request'
import './index.css'

const Home = (props) => {

  const id = props.match.params.id
  const [typeArticle, setTypeArticle] = useState(false)

  const { articleTitle } = props
  const articleTitleJS = articleTitle ? articleTitle.toJS () : []; 

  useEffect(() => {
    if(id){
      getArticleByTypeId(id).then(
        res =>{
          const data = [...res.data.result]
          console.log(data);
          setTypeArticle(data)
        }
      )
    }
  }, [id])
  
  const Article = typeArticle ? typeArticle : articleTitleJS
  const MSG = () => {
    return(
      <Timeline mode="left">
        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} color="red"/>}>
          FROM 2020
        </Timeline.Item>
        {
          Article.reverse().map((item, index) => {
            return(
            <Timeline.Item 
              key={index}
              label={ item.addTime.slice(0, 10)}
              style={{ fontSize: '12px'}}
            >
              <Link to={`/detailed/${item.id}`} style={{fontSize: '15px'}}>
                {item.title}
              </Link>
            </Timeline.Item>
            )
          }) 
        }
      </Timeline>
    )
  }
  console.log();
  
  const NOTMSG = () => {
    return(
      <div
        className='not-msg'
      >暂无文章</div>
    )
  }
  return(
    <div className='archives-wrapper'>
      {
        Article.length === 0 ? <NOTMSG/> : <MSG />
      }
    </div>
  )
}

const mapToProps = state => ({
  articleTitle: state.get('articleTitle')
})

export default connect(mapToProps, null)(Home)