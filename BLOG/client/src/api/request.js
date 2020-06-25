import axios from 'axios'
import servicePath from './apiUrl'

export const getArticleTitle = () => axios.get(servicePath.getArticleTitle);
export const getArticleById = (id) => axios.get(servicePath.getArticleById + id);
export const getArticleByTypeId = (id) => axios.get(servicePath.getArticleByTypeId + id);
export const getAbout = () => axios.get(servicePath.getAbout);

// import { axiosInstance } from "./config";

// export const getArticleTitle = () => {
//   return axiosInstance.get ('/getArticleTitle');
// }

// export const getArticleById = (id) => {
//   return axiosInstance.get ('/getArticleById' + id);
// }

//  export const getArticleByTypeId = (id) => axiosInstance.get('/getArticleByTypeId' + id);
//  export const getAbout = () => axiosInstance.get('/getAbout');
