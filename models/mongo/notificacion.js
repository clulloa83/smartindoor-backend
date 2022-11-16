const { Schema, model } = require('mongoose');

const NotificacionSchema = Schema({
    sub: {
        type: Object,
        required: [true, 'la suscripcion es obligatoria']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'el Usuario es obligatorio']
    },
    sistema: {
        type: Schema.Types.ObjectId,
        ref: 'Sistema',
        required: [true, 'el Sistema es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

module.exports = model('Notificacion', NotificacionSchema);