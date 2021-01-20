import React, { Component } from 'react';
import './header.css';

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="top">
          <strong>Portifólio</strong>
      </div>
    );
  }

}

export default Header;