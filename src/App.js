import React from 'react';
import Articles from './articles/components/articles'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      flagadd:false
    }
  }
  setArticles = (articles)=>{
    this.setState({articles: articles})
  }
  addnewArticle = (event)=>{
    event.preventDefault();
    const doesShow = this.state.flagadd;
    console.log("work");
    this.setState({flagadd: !doesShow})
  }


render(){
  return (
    <div className="App">
      <header className="App-header">
      <p>Welcome to Blogy</p>
      </header>
      <Articles articles={this.state.articles} setArticles={this.setArticles}
                addnewArticle={this.addnewArticle} flagadd={this.state.flagadd} editArticle={this.editArticle} />
    </div>
  );
}





}

export default App;
