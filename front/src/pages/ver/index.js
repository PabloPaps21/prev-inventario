import React, { Component } from 'react';
import axios from 'axios';
import CardLista from './CardLista';
import ProductService from '../../services/ProductService';
import  './Card.css';



const productService = new ProductService();

export default class AllProducts extends Component {
  state = {
    products: [],
    total:0
  };

 


  async componentDidMount(){
    const { data } = await productService.getProductos();
    console.log(data)
    
    var tempTotal = 0;
    
    data.forEach(function (obj){
      tempTotal += Number(obj.costo);
    });
    
    /*console.log(tempTotal + ' ->' + 'AAAAAAAAAAAA')*/

    this.setState({ 
      products:data ,
      total: (tempTotal * 1.16).toFixed(2)
    })
  }




  render() {
    return(
      <>
        <h1>Listas</h1>
      <div className='padre' >
          <div className='renglon'> 
            <h3>nombre</h3>
            <h3>costo</h3>
            <h3>iva</h3>
            <h3>precio</h3>
          </div>
          <div className='contendor' >
        {
            (this.state.products) ?   
            this.state.products.map((product, index) => {

            return <CardLista key={index} product={product} i={index}/>
            
          }) : <h1>Aún no tienes productos</h1>
          
          }
          </div>
        </div>  
        <h2>TOTAL: {this.state.total}</h2>

      </>
    )
  }

  
}//class
