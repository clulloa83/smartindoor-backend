const { Schema, model } = require('mongoose');

const CultivoSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'el Usuario es obligatorio']
    },    
    semilla: {
        nombre: String,
        banco: String,
        tipo: {
            type: String,
            enum: ['feminizada', 'regular', 'automatica']
        },
        genotipo: String,
        unidad: Number,
        // required: true
    },
    fecha: Date,
    activo: Boolean,
    estado: Boolean
});

CultivoSchema.methods.toJSON = function() {
    const { __v, _id, ...resto } = this.toObject();

    const cultivo = {
        id: _id,
        semilla: resto.semilla,
        fecha: resto.fecha,
        activo: resto.activo,
        // estado: resto.estado
    };

    return cultivo;
};

module.exports = model('Cultivo', CultivoSchema);