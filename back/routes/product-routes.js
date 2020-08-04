const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const catchErrors = require('../middlewares/catchErrors')

const Product = require('../models/productos');


router.post('/products', (req, res, next) => {

  Product.create({
    nombre: req.body.nombre,
    costo: req.body.costo
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/ver', (req, res, next ) => {
  Product.find()
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router;



