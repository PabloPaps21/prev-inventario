import React, { Component } from 'react';
import  './Card.css';
import ProductService from '../../services/ProductService';


const productService = new ProductService();

export default class CardLista extends Component {
  state = {
    iva: this.props.product.costo * 0.16,
    precio: 0,
    total:0
  }
  
  
  render() {
    

    let precio = this.state.iva + this.props.product.costo 
    return (
      <div className="card">
        <article>
          <p>{this.props.product.nombre}</p>
          <p>{this.props.product.costo}</p>
          <p>{ this.state.iva } </p>
          <p>${precio}</p>
        </article>
      </div>
    )
  }
}