import React,{ useState } from 'react'
import { NavBar, Icon, WingBlank, WhiteSpace, Button, InputItem, Toast } from 'antd-mobile'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Create = () => {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwd, setPwd] = useState('')
    const submit = () => {
        if(name === '' || email==='' || password ==='' ||pwd === ''){
            return Toast.info('请完整填写信息', 2)
        }
        if(pwd !== password){
            return Toast.info('两次密码不一致', 2)
        }
        axios.post('http://localhost:8000/api/create', {name, email, password})
        .then((res) => {
            console.log(res);
            if(res.data.status === 400 || res.data.status === 409){
                return Toast.info(res.data.message, 2)
            }
            Toast.info(res.data.message, 1, () => {
                history.push('/login')
            })
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
            >注册</NavBar>
            <WingBlank>
                <WhiteSpace></WhiteSpace>

                <InputItem
                    clear
                    onChange={(value) => {setName(value)}}
                >名字</InputItem>

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

                <InputItem
                    clear
                    type='password'
                    onChange={(value) => {setPwd(value)}}
                >确认密码</InputItem>

                <WhiteSpace></WhiteSpace>

                <Button type='primary' onClick={()=>{submit()}}>注册</Button>
            </WingBlank>
        </div>
    )
}


export default Create