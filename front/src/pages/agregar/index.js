import React, { Component } from 'react';
import ProductService from '../../services/ProductService';
import { FormAddProduct } from '../../styled-components/components';
import './styles.css'


const productService = new ProductService();

class AddProduct extends Component {
  state = {
        nombre:"",
        costo: "",
  }
  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };


  agregarProducto = async e => {
    e.preventDefault();
    const { nombre, costo } = this.state;
    
    
    const product = await productService.createProducto({nombre, costo});
    
    this.setState({
      form: {
        nombre:"",
        costo:"",
      }
    });
    alert('producto listo');
  }



  render() {
    return(
      <div className='card-agregar'> 
      <h1 style={{marginTop:"80px"}}>Agrega un producto</h1>
      <FormAddProduct onSubmit={this.agregarProducto}>
        <input 
          name="nombre"
          type="text" 
          value={this.state.nombre}
          onChange={this.inputChange}
          placeholder="nombre"
          required
        />
        <label>Costo producto (número)</label>
        <input 
          name="costo"
          type="number"
          value={this.state.costo}
          onChange={this.inputChange}
          required
          min="0" max="100000000"
          required
        />
        <button>Subir</button>
      </FormAddProduct>
      </div>
    )
  }


}//class
export default AddProduct;