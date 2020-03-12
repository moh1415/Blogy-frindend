import React from 'react';
import Article from "./article";
import {getAllArticles} from '../api';

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
render() {
    let allArticles = <h4>No Articles</h4>;
    if(this.props.articles.length > 0)
    {
            allArticles = this.props.articles.map((article,index)=>{
            return <Article  title={article.title} author={article.author} content={article.content} key={index} />
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