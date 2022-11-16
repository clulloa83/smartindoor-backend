const { Schema, model } = require('mongoose');

const SeguimientoSchema = Schema({
    cultivo: {
        type: Schema.Types.ObjectId,
        ref: 'Cultivo',
        required: [true, 'el cultivo es obligatorio']
    },    
    observacion: {
        type: String,
        required: [true, 'la observación es obligatoria']
    },
    fecha: Date,
    capturas: [{
        type: String,
    }],
    estado: Boolean
});

SeguimientoSchema.methods.toJSON = function() {
    const { __v, _id, ...resto } = this.toObject();

    const seguimiento = {
        id: _id,
        cultivo: resto.cultivo,
        observacion: resto.observacion,
        capturas: resto.capturas,
        fecha: resto.fecha
    };

    return seguimiento;
};

module.exports = model('Seguimiento', SeguimientoSchema);