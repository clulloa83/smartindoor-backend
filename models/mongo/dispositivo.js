const { Schema, model } = require('mongoose');

const DispositivoSchema = Schema({
    sistema: {
        type: Schema.Types.ObjectId,
        ref: 'Sistema',
        required: [true, 'el Sistema es obligatorio']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'el Usuario es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'la nombre es obligatorio']
    },
    ubicacion: {
        type: String
    },
    icon: {
        type: String
    },
    estado: {
        type: Boolean,
    },
    activo: {
        type: Boolean,
    },
    categoria: {
        type: String,
        enum: ['sensor','modulo', 'motor'],
        required: [true, 'la categoria es obligatoria']
    },
    tipos: [{
        type: String,
        enum: ['temperatura','humedad', 'interruptor'],
        required: [true, 'el tipo es obligatorio']
    }]
});

DispositivoSchema.methods.toJSON = function() {
    const { __v, sistema, usuario, _id, ...resto } = this.toObject();

    const dispositivo = {
        id: _id,
        nombre: resto.nombre,
        ubicacion: resto.ubicacion,
        icon: resto.icon,
        estado: resto.estado,
        activo: resto.activo,
        categoria: resto.categoria,
        tipos: resto.tipos
    };

    return dispositivo;
};

module.exports = model('Dispositivo', DispositivoSchema);