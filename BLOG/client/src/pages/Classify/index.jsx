import React from 'react';
import { Badge, Tag } from 'antd';
import { connect } from 'react-redux'
import { color } from '../../utils'
import { Link } from 'react-router-dom'
import './index.css'

const Index = (props) => {

  const { typeName } = props
  const typeNameJS = typeName ? typeName.toJS () : []; 

  return(
    <div>
      <div className='Categories-title'>
        <span>Categories</span>
      </div>
      <div className='Categories-tags'>
        {
          typeNameJS.map((item, index) => {
            return(
              <span key={index}>
                <Badge  count={item.ord_id}>
                  <Tag color={color[Math.floor(Math.random() * color.length)]}>
                    <Link to={`/typeArchives/${item.id}`}>{item.typeName}</Link>
                  </Tag>
                </Badge>
              </span>
            )
          })
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  typeName: state.get('typeName')
})

export default connect(mapStateToProps, null)(Index)