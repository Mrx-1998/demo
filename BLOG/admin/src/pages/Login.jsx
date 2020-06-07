import React, {useState} from 'react';
import { Card, Input,Button ,Spin, message } from 'antd';
import '../static/css/Login.css'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Login = (props) => {
  
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log(username, password);
  

  const checkLogin = () => {
    setIsLoading(true)

    if(!username) {
      message.error('用户名不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return false
    }else if(!password) {
      message.error('密码不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return false
    }

    let data = {
      username,
      password
    }
    axios({
      method: 'post',
      url: servicePath.toLogin,
      data: data,
      withCredentials: true
    }).then(res => {
      setIsLoading(false)
      if(res.data.data === '登录成功'){
        localStorage.setItem('openId', res.data.openId)
        props.history.push('/index')
      }else{
        message.error('用户名密码错误')
      }
    })
  }

  return(
    <div className="login-div">
        <Spin tip="Loading..." spinning={ isLoading }>
            <Card title="Mrx Blog System" bordered={true} style={{ width: 400 }} >
                <Input
                    id="username"
                    size="large"
                    placeholder="请输入账号"
                    onChange={ e => setUsername(e.target.value)}
                /> 
                <br/><br/>
                <Input.Password
                    id="password"
                    size="large"
                    placeholder="请输入密码"
                    onChange={ e => setPassword(e.target.value)}
                />     
                <br/><br/>
                <Button type="primary" size="large" block onClick={checkLogin} > Login in </Button>
            </Card>
        </Spin>
    </div>
  )
}

export default Login