import React from 'react';


export default class Article extends React.Component{
    render(){
        return (
        <div>
        <h2> {this.props.title}</h2>
        <sub> {this.props.author}</sub>
        <p> {this.props.content}</p>
        </div>
        );
    }
}