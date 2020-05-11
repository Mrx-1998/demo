import * as actionTypes from './action-type'
import { fromJS } from 'immutable'

const initState = fromJS({ //将里面数据转为immutable，不可被修改
    name: '',
    email: '',
    isLogin: false
})

 const reducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.CAHNGE_DATA:
            return state.merge({//把多个对象合并成一个对象
                name: fromJS(action.userData.name),
                email: fromJS(action.userData.email),
                isLogin: fromJS(true)
            })
        case actionTypes.DELETE_DATA:
            return state.merge({//把多个对象合并成一个对象
                name: fromJS(''),
                email: fromJS(''),
                isLogin: fromJS(false)
            })
        default:
            return state
    }
}

export default reducer