import React,{ useState } from 'react'
import { NavBar, Icon, WingBlank, WhiteSpace, Button, InputItem, Toast } from 'antd-mobile'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

const Login = (props) => {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const toLogin = () => {
        if( email === '' || password === ''){
            return Toast.info('请完整填写信息', 2)
        }
        axios.post('http://localhost:8000/api/login', { email, password })
        .then((res) => {
            if(res.data.status === 400){
                Toast.info(res.data.message, 2)
            }else{
                sessionStorage.setItem('token', res.data.data.token)
                const userData = {
                    name:res.data.data.name,
                    email: res.data.data.email
                }
                let data=JSON.stringify(userData);
                localStorage.setItem('userData',data)
                Toast.info(res.data.message, 1, () => {
                    props.changeState(userData)
                    history.push('/')
                })
            }      
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return(
        <div>
            <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => history.goBack()}
            >登录</NavBar>
            <WingBlank>
                <WhiteSpace></WhiteSpace>

                <InputItem
                    clear
                    onChange={(value) => {setEmail(value)}}
                >邮箱</InputItem>

                <WhiteSpace></WhiteSpace>

                <InputItem
                    clear
                    type='password'
                    onChange={(value) => {setPassword(value)}}
                >密码</InputItem>

                <WhiteSpace></WhiteSpace>

                <Button type='primary' onClick={()=>{toLogin()}}>登录</Button>
            </WingBlank>
        </div>
    )
}

const DispatchToProps = (dispatch) => {
    return {
        changeState(userData) {
            dispatch(actions.changeData(userData))
         }
    }
}

export default connect(null, DispatchToProps)(Login)