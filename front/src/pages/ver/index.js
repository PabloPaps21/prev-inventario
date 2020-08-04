import React, { Component } from 'react';
import axios from 'axios';
import CardLista from './CardLista';
import ProductService from '../../services/ProductService';


const productService = new ProductService();

export default class AllProducts extends Component {
  state = {
    products: []
  };

 


  async componentDidMount(){
    const { data } = await productService.getProductos();
    this.setState({ 
      products:data
    })
  }




  render() {
    return(
      <>
        <h1>Listas</h1>

        {
            (this.state.products) ?   
            this.state.products.map((product, index) => {

            return <CardLista key={index} product={product} i={index}/>
            
          }) : <h1>Aún no tienes proyectos</h1>
          
          }
        
      </>
    )
  }

  
}//class
