import axios from 'axios'
import servicePath from './apiUrl'

export const getArticleTitle = () => axios.get(servicePath.getArticleTitle);
export const getArticleById = (id) => axios.get(servicePath.getArticleById + id);
export const getArticleByTypeId = (id) => axios.get(servicePath.getArticleByTypeId + id);
export const getAbout = () => axios.get(servicePath.getAbout);