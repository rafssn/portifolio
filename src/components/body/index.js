import React, { Component } from 'react';
import './body.css';
import foto from '../../assets/profile_foto.jpg'
import html_logo from '../../assets/html.svg';
import js_logo from '../../assets/js.svg';
import css_logo from '../../assets/css.svg';
import bs_logo from '../../assets/bs.svg';
import node_logo from '../../assets/node.svg';
import react_logo from '../../assets/react.svg';
import sql_logo from '../../assets/mysql.svg';
import download from '../../assets/download.png';
import facebook from '../../assets/facebook.svg';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import cv from '../../assets/Currículo - RAFAEL AUGUSTO.pdf'


class Body extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <div className="body">
          <div className="container">
            <img className="rounded pulse" src={foto} alt="profile pic" />

            <div className="info">
                <h1>Rafael Augusto</h1>
                <p>Web Developer | FullStack | Software Engineer</p>
            </div>
            <div className="stacks">
                <img src={html_logo} alt="html_logo" />
                <img src={css_logo} alt="css_logo" />
                <img src={js_logo} alt="js_logo" />
                <img src={bs_logo} alt="bs_logo" />
                <img src={react_logo} alt="react_logo" />
                <img src={node_logo} alt="node_logo" />
                <img src={sql_logo} alt="sql_logo" />
            </div>
            <button className="curriculo"><a href={cv} download={cv} target="blank">Download CV</a><img src={download} alt="download_icon" /></button>
            <p className="resume">Sejam bem-vindos(as) ao meu Portifólio.<br/>
            Meu nome é Rafael Augusto, sou profissional da área de Desenvolvimento Web FullStack, graduando em Engenharia de Software pela Universidade Federal de Goiás (UFG).
            </p>
            <img className="github" src="https://github-readme-stats.vercel.app/api?username=rafssn&show_icons=true&theme=dracula" alt="Github stats"/>
            <img className="github" src="https://github-readme-stats.vercel.app/api/top-langs/?username=rafssn&layout=compact&theme=dracula" alt="Githbu languages"/>
            <div className="footer">
              <h4>Redes Sociais</h4>
              <div className='socials'>
                <a href="https://www.facebook.com/rafael.augusto.315428/" target="blank"><img src={facebook} alt="facebook logo"/></a>
                <a href="https://www.linkedin.com/in/rafael-augusto-gon%C3%A7alves-2292631b6/" target="blank"><img src={linkedin} alt="linkedin logo"/></a>
                <a href="https://github.com/rafssn" target="blank"><img src={github} alt="github logo"/></a>                
              </div>
            </div>
          </div>
      </div>
    );
  }

}

export default Body;