var eventosModel = require('../modelos/eventosModelo')


module.exports = {

    insertar: (req, res) => {

        var informacion = req.body

        var datos = new eventosModel({
            nombre: informacion.nombre,
            fecha: informacion.fecha,
            lugar: informacion.lugar,
            costo: informacion.costo
        })


        console.log(informacion)

        datos.save((error, resultado) => {

            if (error) return res.send('Hubo un error al insertar ')

            return res.send(resultado)
        })

    },

    leer: (req, res) => {

        eventosModel.find((err, resultado) => {

            if (err) return res.send('Error al leer la info ', err)

            return res.send(resultado)
        })

    }

}

