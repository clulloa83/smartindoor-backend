const Perfil = require('../perfil');
const Menu = require('../menu');

class ParamsMenu {
    constructor(){
        this.perfil = new Perfil();
        this.menu = new Menu();
    }
}

module.exports = ParamsMenu;