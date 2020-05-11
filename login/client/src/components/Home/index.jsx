import React, { useEffect, useState } from 'react'
import { WingBlank, WhiteSpace, Button, NavBar, Toast } from "antd-mobile";
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from '../../store/actions'

const Home = (props) =>{
    const [token,setToken] = useState(sessionStorage.getItem("token"))
    const [userData,setUserData] = useState(localStorage.getItem("userData"))
    const history = useHistory()
    useEffect(() => {
        if(token){
            let user=JSON.parse(userData)
            props.changeState(user)
        }
    },[token])
    const Cancellation = () => {
        sessionStorage.removeItem('token')
        Toast.info('成功退出', 2, () => {
            props.tokeOff()
            setToken(sessionStorage.getItem("token"))
        })
    }

    const unlogin = (
        <div>
            <NavBar
                mode="dark"
            >未登录状态</NavBar> 
            <WingBlank>
                <WhiteSpace></WhiteSpace>
                <Button type='primary' onClick={() => history.push("/login") }>登录</Button>
                <WhiteSpace></WhiteSpace>
                <Button onClick={() => history.push("/create")}>还没有账号？去注册吧</Button>
            </WingBlank>
        </div>
    )

    const login = (
        <div>
            <NavBar
                mode="dark"
            >{props.name}</NavBar> 
            <WhiteSpace></WhiteSpace>
            <WingBlank>
                <Button type='primary' onClick={Cancellation}>注销</Button>
            </WingBlank>
        </div>
    )

    return(
        <div>
            { token ? login : unlogin }
        </div>
    )
}

const stateToProps = (state) => {
    return {
        name: state.get('name'),
        email: state.get('email')
    }
}


const DispatchToProps = (dispatch) => {
    return {
        changeState(userData) {
            dispatch(actions.changeData(userData))
         },
        tokeOff() {
            dispatch(actions.deleteData())
        }
    }
}

export default connect(stateToProps, DispatchToProps)(Home)