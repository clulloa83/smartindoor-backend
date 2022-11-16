const { Schema, model } = require('mongoose');

const ProgramaSchema = Schema({
    dispositivo: {
        type: Schema.Types.ObjectId,
        ref: 'Dispositivo',
        required: [true, 'el Dispositivo es obligatorio']
    },
    accion: {
        type: String,
        required: [true, 'la accion es obligatoria'],
        enum: ['ENCENDIDO', 'APAGADO']
    },
    hora: {
        type: String,
        required: [true, 'la hora es obligatoria']
    },
    dias: [{
        type: String,
        enum: ['Lun','Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    }],
    activo: {
        type: Boolean,
        // default: true
    },
    estado: {
        type: Boolean,
        // default: true
    }
});

ProgramaSchema.methods.toJSON = function() {
    const { __v, _id, ...resto } = this.toObject();

    const programa = {
        id: _id,
        dispositivo: resto.dispositivo,
        accion: resto.accion,
        hora: resto.hora,
        dias: resto.dias,
        activo: resto.activo,
        estado: resto.estado
    };

    return programa;
};

module.exports = model('Programa', ProgramaSchema);