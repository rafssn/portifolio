import './App.css';
import React, { Component } from 'react';
import Header from './components/header/index'
import Body from './components/body/index'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }

}

export default App;
