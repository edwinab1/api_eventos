var express = require('express');
var router = express.Router();

var eventosController = require('../controladores/eventosController')

router
.get('/leer', eventosController.leer)
.post('/insertar', eventosController.insertar)
.put('/actualizar')
.delete('/eliminar')

module.exports = router;
