const webpush = require('web-push');
const urlsafeBase64 = require('urlsafe-base64');
const vapid = require('../vapid.json');

const Notificacion = require('../models/mongo/notificacion');
const Usuario = require('../models/mongo/usuario');

webpush.setVapidDetails(`mailto:${ process.env.CORREO }`, vapid.publicKey, vapid.privateKey);

/**
 * obtiene la clave publica generada 
 * @returns 
 */
const getKey = async() => {
    // let url = urlsafeBase64.encode(vapid.publicKey);
    return vapid.publicKey; 
};

/**
 * almacena la suscripcion en MONGO DB
 * @param {*} params 
 */
const suscripcionAgregar = async(params) => {

    const usuario = await registraObtieneUsuario(params);

    const data = {
        sub: params.suscripcion,
        usuario: usuario._id,
        sistema: params.sistema.id
    };
    
    try {
        
        const notificacion = new Notificacion( data );
        return await notificacion.save();

    } catch (error) {
        console.log('error suscripcionAgregar', error);
        throw new Error(error);
    }

};

const notificacionATodasSuscripciones = async(payLoad) => {

    try {

        const promesas = [];
        let suscripciones = await Notificacion.find({ estado: true });
        suscripciones.forEach(element => {

            const promesa = webpush.sendNotification(element.sub, payLoad)
                            .then(res => {
                                console.log('notificacion enviada');
                            })
                            .catch(error => {
                                console.log('error', error);
                                if ( error.statusCode === 410 )  // GONE, ya no existe
                                {
                                    return eliminarSuscripcion(element._id);
                                }                        
                            });
            promesas.push(promesa);

        });

        Promise.all(promesas)
        .catch(error => {
            console.log('error Promise.all', error);
        });

    } catch (error) {
        console.log('error notificacionATodasSuscripciones', error);
        throw new Error(error);
    }

};

const enviar2 = () => {

    // const sub = {
    //     endpoint: "https://fcm.googleapis.com/fcm/send/cqE_dnU9Wtk:APA91bEKtt2u6PVz0xPq0AZQQQEiQ0j1kvm7y2Mmo6RGZFH1ZDniBB0YgMWEM63oRSkvyDqWcbAoKvNh2NpbUnHn4ZegyhRL5mU4vc5H94-8VqUrhHWa2vtmIxrQqEJckV7oNM1LS3FR",
    //     expirationTime: null,
    //       keys: {
    //         p256dh: "BIZNgyPSgXaqp3rpQguWQf7tZHIL2IQNi_tIV1s0iTI5uvtKPYMuCvtLkC9jrMBwH50NlYONJcbLZ9gpps1c63g",
    //         auth: "YvdoAkh1tgAHovWf7RS7iA"
    //       }
    // };

    const sub = {
        endpoint: "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABieSxD84DiSSabUUNTY9N3NOJd47HuyNqQuBBD7GM2jGmkGBpmmAK4ogLlpyxhwcgIktv_jmLumW7xHaotAWdmU6gfz_-pAWZxbbKCtABmfl5xTEYvZk1oogkyRg5yE1HsuOtxn2sQpIrjfFOb2PPFt8eFSeuqVwDQ2MO0BXhrSVyamQk",
        expirationTime: null,
        keys: {
            auth: "cVvKEc3q6TBDPyANKUx2ow",
            p256dh: "BJFtIE1WjZo1WjcDOLClwcWMkF9JgoaFpYDE4x01ACYP_1sgNIyVug7z-ngUIRzKneSKmIIALzTOpJLbNdRzQwA"
        }
    };    

    const payLoad = {
        notification: {
          data: { url: 'http://www.youtube.com/funofheuristic' },
          title: 'Fun Of Heuristic',
          vibrate: [100, 50, 100],
        },
      };
      
      webpush.sendNotification(sub, JSON.stringify(payLoad)).
      then(res => {
        console.log('res', res);
      })
      .catch(error => {
        console.log('error', error);
      });

};

const enviar = async(sub, payLoad) => {

    try {
        
        // return await webpush.sendNotification(sub, payLoad);
        webpush.sendNotification(sub, payLoad)
        .then(res => {
            console.log('res', res);
        })
        .catch(error => {
            console.log('error.', error);
        })

    } catch (error) {
        console.log('error enviar', error)
        throw new Error(error);
    }

};

const eliminarSuscripcion = async(id) => {

    try {
        
        return await Notificacion.findByIdAndUpdate(id, { estado: false });

    } catch (error) {
        console.log('error eliminarSuscripcion', error)
        throw new Error(error);
    }
}

const validaSuscripcion = async(params) => {

    const usuario = await Usuario.findOne({ id: params.usuarioId });

    if(usuario){
        const query = { estado: true, usuario: usuario._id, sistema: params.sistemaId, sub: params.suscripcion };
        
        let suscripciones = [];
        try {
            
            suscripciones = await Notificacion.countDocuments( query );
            
        } catch (error) {
            console.log('error validaSuscripcion', error)

        }
        return suscripciones > 0 ? true : false
    }
    else{
        return false;
    }

};

/**
 * obtiene usuario, en caso de no existir se registra
 * @param {*} params 
 * @returns 
 */
const registraObtieneUsuario = async(params) => {

    try {
        const usuarioDB = await Usuario.findOne({ id: params.usuario.id });
        let usuario;
        if( !usuarioDB ){
            const dataUsuario = {
                id: params.evento.usuario.id,
            };
            usuario = new Usuario( dataUsuario );
            await usuario.save();
        }
        else{
            usuario = usuarioDB;
        };
        return usuario;
        
    } catch (error) {
        console.log('error registraObtieneUsuario', error);
        throw new Error(error);
    }
}

module.exports = {
    getKey,
    suscripcionAgregar,
    notificacionATodasSuscripciones,
    enviar,
    eliminarSuscripcion,
    validaSuscripcion,
    enviar2
}