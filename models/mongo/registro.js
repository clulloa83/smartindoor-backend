const { Schema, model } = require('mongoose');

const RegistroSchema = Schema({

    dispositivo: {
        type: Schema.Types.ObjectId,
        ref: 'Dispositivo',
        required: [true, 'el Dispositivo es obligatorio']
    },
    etiqueta: {
        type: String,
        enum: ['temperatura','humedad'],
        default: 'temperatura'
    },
    unidad: { //unidad de medida o metrica
        type: String,
        enum: ['Celsius','humedad relativa'],
        default: 'Celsius'
    },
    tipo: {  //tipo dato de valor
        type: String,
        enum: ['number'],
        default: 'number'
    },
    valor: {
        type: String,
    },
    minimo: {
        type: String,
    },
    maximo: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true
    },
    fechaRegistro: {
        type: Date,
    },

});

RegistroSchema.methods.toJSON = function() {
    const { __v, dispositivo, _id, ...resto } = this.toObject();

    const registro = {
        id: _id,
        etiqueta: resto.etiqueta,
        unidad: resto.unidad,
        tipo: resto.tipo,
        valor: resto.valor,
        minimo: resto.minimo,
        maximo: resto.maximo,
        estado: resto.estado,
        fechaRegistro: new Date(resto.fechaRegistro)
    };

    return registro;

};

module.exports = model('Registro', RegistroSchema);