import React, { Component } from 'react';
import ProductService from '../../services/ProductService';
import { FormAddProduct } from '../../styled-components/components';


const productService = new ProductService();

class AddProduct extends Component {
  state = {
    
        nombre:"",
        costo: ""
    
  }

 /* inputChange = ({ target: {value, name} }) =>{
    this.setState({
      ...this.state,
      form:{
        ...this.state.form,
        [name]:value
      }
    });
  };*/
  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  agregarProducto = async e => {
    e.preventDefault();
    const { nombre, costo } = this.state;
    //const formData = new FormData();

   /*for(let key in this.state.form){
      formData.append(key, this.state.form[key])
    }*/
    
    const product = await productService.createProducto({nombre, costo});
    console.log(product + 'AAAAAAAAAAAAAAAAAAAAA')
    this.setState({
      form: {
        nombre:"",
        costo:""
      }
    });
    alert('producto listo');
  }

  /*agregarProducto = async e => {
   e.preventDefault();
   const { form } = this.state;
   const { data } = await axios.post();
   
   alert('producto listo');

    this.setState({
      form: {
        nombre:"",
        costo:""
      }
    })
  }*/

  render() {
    return(
      <form onSubmit={this.agregarProducto}>
        <input 
          name="nombre"
          type="text" 
          value={this.state.nombre}
          onChange={this.inputChange}
          placeholder="nombre"
          required
        />
        <label>Costo producto</label>
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
      </form>
    )
  }


}//class
export default AddProduct;