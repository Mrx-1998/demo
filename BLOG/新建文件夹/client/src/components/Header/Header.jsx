import React,{ useState }from 'react'
import { Row, Col, Menu, Affix } from 'antd';
import { SmileTwoTone, FolderOutlined, HomeOutlined, TagOutlined, UserOutlined } from '@ant-design/icons';
import './index.css';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Header = () => {
 const history = useHistory();
 const his = history.location.pathname.split('/')[1]
 const [current, setCurrent] = useState(his === '' ? 'home' : his)

  return(
    <div className='header-warpper'>
      <Affix>
      <Row>
        <Col xxl={4} xl={5} lg={5} sm={0} xs={0}>
          <span className='header-name'>
            <SmileTwoTone />
            <span className='header-name-title'>Mrx的博客</span>
          </span>
        </Col>

        <Col xxl={20} xl={19} lg={19} sm={24} xs={24}>
          <Menu 
            mode="horizontal" 
            style={{ lineHeight : '64px'}} 
            selectedKeys={current}
            onSelect={(e) => setCurrent(e.key)}
          >
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to='/'>首页</Link>
            </Menu.Item>
            <Menu.Item key="classify" icon={<TagOutlined />}>
              <Link to='/classify'>分类</Link>
            </Menu.Item>
            <Menu.Item key="archives" icon={<FolderOutlined />}>
              <Link to='/archives'>归档</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<UserOutlined />}>
              <Link to='/about'>关于</Link>
            </Menu.Item>
          </Menu>

        </Col>
      </Row>
      </Affix>
    </div>
  )
}

export default React.memo(Header)