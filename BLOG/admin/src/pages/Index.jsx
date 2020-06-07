import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import '../static/css/Index.css'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import ArticleType from './ArticleType'
import AddType from './AddType'
import { Route, Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Index = (props) => {

  const handleClickArticle = e => {
    if(e.key === 'AddArticle'){
      props.history.push('/index')
    }else{
      props.history.push('/index/list')
    }
  }

  return (
    <Layout style={{minHeight: '100vh'}}> 
      <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <span>工作台</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/index/AddType'><span>添加类型</span></Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              onClick={ handleClickArticle }
              title={
                <span>
                  <span>文章管理</span>
                </span>
              }
            >
              <Menu.Item key="AddArticle">添加文章</Menu.Item>
              <Menu.Item key="ArticleList">文章列表</Menu.Item>
            </SubMenu>

            <Menu.Item key="3">
              <Link to='/index/type'><span>类型管理</span></Link>
            </Menu.Item>

            <Menu.Item key="4">
              <span>关于</span>
            </Menu.Item>

            <Menu.Item key="9">
              <span>留言管理</span>
            </Menu.Item>
          </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> 
            <div>
              <Route path="/index/" exact  component={AddArticle} />
              <Route path="/index/add/:id" exact  component={AddArticle} />
              <Route path="/index/list/"  component={ArticleList} />
              <Route path="/index/type"  component={ArticleType} />
              <Route path="/index/AddType"  component={AddType} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Mrx-blog-system</Footer>
      </Layout>
    </Layout>
  )
}

export default Index