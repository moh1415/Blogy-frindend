import React from 'react';
import {addnewArticle, updateArticle} from '../api';
import articles from "./articles";

export default class Article extends React.Component{
    state = {
        isedit:false,
        title: '',
        author: '',
        content:'',
        _id:''
    };
    deleteArticle = (event) => {
        event.preventDefault();
        this.props.deleteArticle(this.props.id);
    }
    editArticle = (event)=>{
        event.preventDefault();
        const doesShow = this.state.isedit;
        console.log("work");
        this.setState({isedit: !doesShow})
    }
    handleUpdate = ()=>{
        // event.preventDefault();

        console.log("edit article");

        let data = this.state;
        updateArticle(data,this.props.id).then((response)=>{
            console.log(this.props.all);
            const newArticles = [...this.props.articles];
            const index = newArticles.indexOf(this.props.all);
            console.log("res data",response.data.article);
            let newart =[...this.props.articles];
            newart = newArticles[index];

            console.log("index ",index);

            newart= response.data.article;
            const currentartclie = [...this.props.articles];
            currentartclie[index] = newart;
            console.log("new a",newart);
            this.props.setArticles(currentartclie);
            this.setState({isedit: false})
        }).catch((error)=>{
            console.log('API Error:',error);
        })

    }
    //to get value from input
    onchange = (event,input) => {
        //set event for mulitpe input
        this.setState({ [input]: event.target.value });
        this.setState({_id:this.props.id});
    };

    render(){
        let editArticle = <div></div>;
        if(this.state.isedit)
        {
            editArticle = <div>
                <input type='text' onChange={(e)=>{this.onchange(e,"title")}}  /> title <br/>
                <input type='text'  onChange={(e)=>{this.onchange(e,"author")}}  /> author<br/>
                <textarea onChange={(e)=>{this.onchange(e,"content")}}   /> content
                <button onClick={this.handleUpdate} >Save</button>
            </div>
        }

        return (
        <div>
        <h2> {this.props.title}</h2>
        <sub> {this.props.author}</sub>
        <p> {this.props.content}</p>
         <a href="#" onClick={this.editArticle}>Edit</a>{" "}
        <a href="#" onClick={this.deleteArticle}>Delete</a>
            {editArticle}
        </div>
        );
    }
}