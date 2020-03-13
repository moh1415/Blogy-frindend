import apiUrl from '../apiConfig';
import axios from 'axios';
// INDEX, SHOW, CREATE, UPDATE, DESTROY
// Get All Articles
const getAllArticles = () => {
  return axios.get(`${apiUrl}/articles`);
};
// Delete Article by ID
const deleteArticleByID = (id) => {
  return axios.delete(`${apiUrl}/articles/${id}`);
}
const addnewArticle = (data) => {
  return axios.post(`${apiUrl}/articles`,{article:{title:data.title,author:data.author,content:data.content}});
}
const updateArticle = (data,id) => {
  return axios.patch(`${apiUrl}/articles/${id}`,{article:{title:data.title,author:data.author,content:data.content,_id:id}});
}
export { getAllArticles, deleteArticleByID,addnewArticle,updateArticle };