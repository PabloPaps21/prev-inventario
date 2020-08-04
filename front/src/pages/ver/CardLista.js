import React, { Component } from 'react';
import  './Card.css';
import ProductService from '../../services/ProductService';


const productService = new ProductService();

export default class CardLista extends Component {
  state = {
    precio:0,
    total:0,
    iva:0
  }
  calculadora(){
    let calcIva = this.props.product.costo * 0.16;
    let elIva = this.state.iva;
      elIva += calcIva;
    return elIva
  }
  handleIVA = () => {
    this.setState({
      iva: this.calculadora()
    })
  }
  render() {
    return (
      <div>
        <article>
          <p>{this.props.product.nombre}</p>
          <p>{this.props.product.costo}</p>
          <p>IVA: {this.state.iva}</p>
          <p>{this.props.product.precio}</p>
        </article>
      </div>
    )
  }
}