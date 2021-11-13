var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var eventosSchema = new Schema({

    nombre: { type: 'String', required: true },
    fecha: { type: 'Date', required: true },
    lugar: { type: 'String', required: true },
    costo: { type: Number, required: true },
    portada: { type: 'String', required: true },
    fecha_registro: { type: 'Date', default: Date.now }

})


module.exports = mongoose.model('Eventos', eventosSchema);


