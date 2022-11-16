const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    contraseña: {
        type: String,
        required: [true, 'la contraseña es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'el correo es obligatorio'],
        unique: true
    },
    nombres: {
        type: String,
        required: [true, 'el nombres es obligatorio']
    },
    apellidos: {
        type: String,
        required: [true, 'el apellidos es obligatorio']
    },
    token: {
        type: String,
        required: [true, 'el token es obligatorio']
    },
    perfil: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        required: [true, 'el Perfil es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

UsuarioSchema.methods.toJSON = function() {

    const { __v, contraseña, perfil, _id, ...resto } = this.toObject();
    const dispositivo = {
        id: _id,
        nombres: resto.nombres,
        apellidos: resto.apellidos,
        correo: resto.correo,
        token: resto.token,
    };

    return dispositivo;
};

module.exports = model('Usuario', UsuarioSchema);