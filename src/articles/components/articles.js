import React from 'react';
import Article from "./article";
import {getAllArticles ,deleteArticleByID} from '../api';

 export default class Articles extends React.Component {
componentDidMount(){

    getAllArticles()
    .then((response)=>{
        this.props.setArticles(response.data.articles)
    })                    
    .catch((error)=>{
        console.log('api error:',error)
    })
}
// make api call to delete article
deleteArticle = (id) => {
    console.log("the article id to delete",id)
    deleteArticleByID(id)
    .then((response)=>{
            console.log(`the article with id ${id} has been deleted.`);
         const newArticlesList =  this.props.articles.filter((article) => {
                return article._id !== id;
            });
            this.props.setArticles(newArticlesList);
    })
    .catch((error)=> {
        console.log('API Error:',error);
    })
}
render() {
    let allArticles = <h4>No Articles</h4>;
    if(this.props.articles.length > 0)
    {
            allArticles = this.props.articles.map((article,index)=>{
            return <Article  title={article.title} author={article.author} 
            content={article.content} key={index} id={article._id} deleteArticle={this.deleteArticle} />
            });
    }
    
   
    return (
        <div>
            <h3>All Articles</h3>
          {allArticles}
        </div>
    );
}
}