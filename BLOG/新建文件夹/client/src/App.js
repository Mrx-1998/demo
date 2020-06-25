import React,{ useEffect } from 'react';
import { Row, Col } from 'antd'
import Header from './components/Header/Header'
import SideBar from './components/SideBar'
import './App.css'
import router from './router'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'

function App(props) {
  const { typeName, articleTitle } = props
  const { getArticleList } = props

  useEffect(()=> {
    getArticleList()
  },[getArticleList])

  const articleTitleJS = articleTitle ? articleTitle.toJS () : []; 
  const typeNameJS = typeName ? typeName.toJS () : []; 
  
  return (
    <div className='AppWarpper'>
        <Header />
        <Row className='content-warpper'>
          <Col  xxl={4} xl={5} lg={5} sm={0} xs={0}>
            <SideBar articleTitleJS={articleTitleJS} typeNameJS={typeNameJS}/>
          </Col>
          <Col xxl={20} xl={19} lg={19} sm={24} xs={24}>
              {renderRoutes(router)}
          </Col>
        </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  articleTitle: state.get ('articleTitle'),
  typeName: state.get('typeName')
});

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleList () {
      dispatch (actionTypes.getArticleTitleRequest());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
