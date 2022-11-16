const Menu = require('../models/mongo/menu');

const menuGet = async(params) => {

    // let query = { perfil: params.perfil.id, estado: true };
    let query = { perfil: params.perfil.id, status: true };
    
    // let menus = [];

    try {

        return await Menu.find(query);
        // let result = await Menu.find(query);

        // result.forEach(element => {
        //     let menu = {
        //         title: element.title,
        //         url: element.url,
        //         icon: element.icon
        //     };
        //     menus.push(menu);
        // });

        // return menus;

    } catch (error) {
        console.log('error menuGet', error);
        throw new Error(error);
    }

};

const menuPost = async(params) => {
    
    const data = { 
        title: params.menu.title,
        url: params.menu.url,
        icon: params.menu.icon,
        order: params.menu.order,
        perfil: params.perfil.id,
    };

    const menu = new Menu( data );
    
    try {
        
        return await menu.save();
        
    } catch (error) {
        console.log('error menuPost', error);
        throw new Error(error); 
    }

};

const menuDelete = async(params) => {
    
    const data = {
        id: params.menu.id,
        estado: false
    };
    
    try {
        
        return await Menu.findByIdAndUpdate(data);
        
    } catch (error) {
        console.log('error menuDelete', error);
        throw new Error(error);
    }
};


module.exports = {
    menuGet,
    menuPost,
    menuDelete,
}