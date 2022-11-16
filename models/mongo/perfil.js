const { Schema, model } = require('mongoose');

const PerfilSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Perfil', PerfilSchema);