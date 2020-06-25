import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS ({
  articleTitle: [],
  typeName: [],
  about: []
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLE_TITLE:
      return state.set ('articleTitle', action.data);
    case actionTypes.CHANGE_TYPE_NAME:
      return state.set ('typeName', action.data);
    case actionTypes.CHANGE_ABOUT:
      return state.set('about', action.data)
    default:
      return state;
  }
}