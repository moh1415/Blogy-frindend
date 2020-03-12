import React from 'react';


export default class Article extends React.Component{
    deleteArticle = (event) => {
        event.preventDefault();
        this.props.deleteArticle(this.props.id);
    }
    render(){
        return (
        <div>
        <h2> {this.props.title}</h2>
        <sub> {this.props.author}</sub>
        <p> {this.props.content}</p>
        <a href="#" onClick={this.deleteArticle}>Delete</a>
        </div>
        );
    }
}