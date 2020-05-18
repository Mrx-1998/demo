/*
用户登录的路由组件 
*/ 
/*
用户注册的路由组件 
*/ 
import React, {Component} from 'react' 
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button } from 'antd-mobile'
import Logo from '../../components/Logo'

export default class Login extends Component { 
    state = { username: '', password: '' }
    // 处理输入框/单选框变化, 收集数据到 state 
    handleChange = (name, value) => { this.setState({[name]: value}) }
    toRegister = () => { this.props.history.replace('/register') }
    login = () => { console.log(this.state) }
    render() { 
        return ( 
            <div>
                <NavBar>硅谷直聘</NavBar>
                <Logo/>
                <WingBlank> 
                    <List> 
                        <InputItem placeholder='输入用户名' onChange={val => this.handleChange('username', val)} > 用户名: </InputItem> 
                        <WhiteSpace/> 
                        <InputItem type='password' placeholder='输入密码' onChange={val => this.handleChange('password', val)} > 密&nbsp;&nbsp;&nbsp;码: </InputItem> 
                        <WhiteSpace/> 
                        <WhiteSpace/> 
                        <WhiteSpace/> 
                        <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;&nbsp;录 </Button> 
                        <WhiteSpace/> 
                        <Button onClick={this.toRegister}>还没有账号？去注册吧</Button> 
                    </List> 
                </WingBlank> 
            </div> 
        ) 
    } 
}