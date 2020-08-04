const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.send('Hola, esta es un API de pruebas. No deberías poder ver esto');
});

module.exports = router;
