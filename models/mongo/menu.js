const { Schema, model } = require('mongoose');

const MenuSchema = Schema({
    title: {
        type: String,
        required: [true, 'el title es obligatorio']
    },
    url: {
        type: String,
        required: [true, 'el url es obligatorio']
    },
    icon: {
        type: String,
        required: [true, 'el icon es obligatorio']
    },
    status: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number
    },
    perfil: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        required: [true, 'el Perfil es obligatorio']
    }
});

MenuSchema.methods.toJSON = function() {
    
    const { __v, perfil, _id, ...resto } = this.toObject();

    const menu = {
        title: resto.title,
        url: resto.url,
        icon: resto.icon,
    };

    return menu;
};

module.exports = model('Menu', MenuSchema);