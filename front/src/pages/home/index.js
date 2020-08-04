import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
//import  boton 
export default class Home extends Component {
  render() {
    return(
      <>
          <h1 style={{
            marginTop: "90px",
            textAlign:"center"
          }}>Listas!</h1>

          <Link to="/ver" style={{
            backgroundColor:"green",
            color:"#FFF"
          }}> VER </Link>
          <br />
          <Link to="/agregar" style={{
            backgroundColor:"blue",
            color:"#FFF"
          }}> agregar </Link>
        
      </>
    )
  }
}