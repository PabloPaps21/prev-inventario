import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import  './styles.css';

export default class Home extends Component {
  render() {
    return(
      <div className='padre'>
        <h1 style={{
            marginTop: "90px",
            textAlign:"center"
          }}>Listas!</h1>

      <div className='indexCard'>

          <Link to="/ver" className="btn-ver"> VER </Link>
          <br/>
          <Link to="/agregar" className="btn-agregar"> agregar </Link>
      </div>
      
      </div>
    )
  }
}