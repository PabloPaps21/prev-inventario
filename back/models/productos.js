const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productsSchema = new Schema (
  {
    nombre: {
      type: String,
      required: true
    },
    costo: {
      type: Number,
      required: true
    },
    iva: {
      type: Number
    },
    precio: {
      type: Number
      
    }
  },
    {
      timestamps:true,
      versionKey:false
    }
)

const Products = mongoose.model('Products', productsSchema)
module.exports = Products;