import * as actionTypes from './action-type'

export const changeData = (userData) => ({
    type: actionTypes.CAHNGE_DATA,
    userData
})
export const deleteData = () => ({
    type: actionTypes.DELETE_DATA
})
