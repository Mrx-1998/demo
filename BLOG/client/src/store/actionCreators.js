//actionCreators.js
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getArticleTitle, getAbout } from '../api/request';
import { message } from 'antd';

export const changeArtitleTitle = (data) => ({
  type: actionTypes.CHANGE_ARTICLE_TITLE,
  data: fromJS(data)
})

export const changeTypeName = (data) => ({
  type: actionTypes.CHANGE_TYPE_NAME,
  data: fromJS(data)
})

export const changeAbout = data => ({
  type: actionTypes.CHANGE_ABOUT,
  data: fromJS(data)
})

export const getArticleTitleRequest = () => {
  return dispatch => {
    getArticleTitle().then(res => {
      dispatch(changeArtitleTitle(res.data.data))
      dispatch(changeTypeName(res.data.type))
    }).catch(() => {
      message.error('数据获取失败')
    })
  }
}

export const getAboutRequest = () => {
  return dispatch => {
    getAbout().then(res => {
      dispatch(changeAbout(res.data.result))
    }).catch(() => {
      message.error('数据获取失败')
    })
  }
}