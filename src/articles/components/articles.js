import React from 'react';
import Article from "./article";
import {getAllArticles ,deleteArticleByID,addnewArticle} from '../api';

 export default class Articles extends React.Component {
     state = {
         title: '',
         author: '',
         content:''
     };
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

onchange = (event,input) => {
    //set event for mulitpe input
    this.setState({ [input]: event.target.value });
};
    addnewArtcle = ()=> {
        console.log("add new article");
        let data = this.state;
        addnewArticle(data).then((response)=>{
            console.log(response.data);
            const newArticles = [...this.props.articles];
            const index = newArticles.indexOf(response.data);
            console.log("res data",response.data.article);
            console.log("data",data);
            if (index !== -1) {

            } else {
                newArticles.push(response.data.article);
            }
            console.log("new a",newArticles);
            this.props.setArticles(newArticles);
        }).catch((error)=>{
            console.log('API Error:',error);
        })


    }

render() {
    let allArticles = <h4>No Articles</h4>;
    if(this.props.articles.length > 0)
    {
            allArticles = this.props.articles.map((article,index)=>{
            return <Article all={article} title={article.title} author={article.author}
            content={article.content} key={index} id={article._id} deleteArticle={this.deleteArticle}  setArticles={this.props.setArticles} articles={this.props.articles}/>
            });
    }
        let addnewArticle = <div></div>;
        if(this.props.flagadd)
        {
            addnewArticle = <div>
                <input type='text' onChange={(e)=>{this.onchange(e,"title")}} /> title <br/>
                <input type='text'  onChange={(e)=>{this.onchange(e,"author")}} /> author<br/>
                <textarea onChange={(e)=>{this.onchange(e,"content")}}  /> content
                <button onClick={this.addnewArtcle}>Add</button>
            </div>
        }

   
    return (
        <div>
             {addnewArticle}
            <h3>All Articles</h3>
            <a href="#" onClick={this.props.addnewArticle}>Add</a>{" "}
          {allArticles}
        </div>
    );
}
}