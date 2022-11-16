const fs = require('fs');
const path = require('path');
const download = require('download');
const { StatusCode } = require('status-code-enum');
const ParamsCorreo = require('../models/params/correo-params');
const servicioCorreo = require('../services/servicio-correo');
const servicioSistemas = require('../services/servicio-sistemas');
const ParamsSistemas = require('../models/params/sistemas-params');

/**
 * envia correo
 * @param {*} req 
 * @param {*} res 
 */
const sendmail = async(req, res) => {

    const { from, to, cc, bcc , subject, text = null, sistemaId, priority = 'normal', urlArchivo = null } = req.body;

    const headers = {
        importance: priority //high; normal; low
    };

    const params = new ParamsCorreo();
    params.sistemaId = sistemaId;
    params.correo.from = from;
    params.correo.to = to;
    params.correo.subject = subject ? subject : 'sin asunto';
    params.correo.headers = headers;
    params.correo.cc = cc ? cc : null;
    params.correo.bcc = bcc ? bcc : null;
    params.correo.text = text ? text : null;

    //genera html
    params.correo.html = await generaHtml(params.sistemaId);

    // genera los adjuntos de url
    if(urlArchivo){
        params.correo.attachments = await urltoFile(urlArchivo);
    };

    // se concatena el arreglo de los correos
    params.correo.to = params.correo.to ? correoJsonToString(params.correo.to) : params.correo.to;
    params.correo.cc = params.correo.cc ? correoJsonToString(params.correo.cc) : params.correo.cc;
    params.correo.bcc = params.correo.bcc ? correoJsonToString(params.correo.bcc) : params.correo.bcc;

    try {

        let result = await servicioCorreo.sendmail(params);
        res.status(StatusCode.SuccessOK).json({ result })
        
    } catch (error) {
        console.log('error sendmail', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    };

};

/**
 * retorna concatenación de correos
 * @param {*} correosArray 
 * @returns 
 */
const correoJsonToString = (correosArray) => {
    let correos = '';
    for (let i = 0; i < correosArray.length; i++) {
        const element = correosArray[i].mail;
        if(i == (correosArray.length -1)){
            correos+=`${ element }`;
        }
        else{
            correos+=`${ element }, `;
        };
    };
    return correos;
};

/**
 * retorna arreglo de adjuntos
 * @param {*} urlArchivo 
 * @returns 
 */
const urltoFile = async(urlArchivo) => {

    let promesas = [];
    let adjuntos = [];

    try {

        urlArchivo.forEach(element => {
            promesas.push(download(element.url));
        });
    
        const attachments = await Promise.all(promesas);
    
        for (let i = 0; i < attachments.length; i++) {
            const content = attachments[i];
            const filename = path.basename(urlArchivo[i].url);
            let adjunto = {
                filename: filename,
                content: content,
                // contentType: 'image/jpeg'
            };
            adjuntos.push(adjunto);
        };
    } catch (error) {
        console.log('error urltoFile', error);
    }
    return adjuntos;
};

/**
 * genera html según sistema
 * @param {*} sistemaId 
 */
const generaHtml = async(sistemaId) => {

    let template = fs.readFileSync('./template.html', 'utf8');
    let titulo = 'titulo test';
    let parrafo = 'parrafo test';
    
    let params = new ParamsSistemas();
    params.sistema.id = sistemaId;

    try {

        let sistema = await servicioSistemas.sistemasGetById(params);
        console.log('sistema', sistema);

        if(sistema){
            titulo = `correo enviado para sistema: ${ sistema.nombre }`;
            parrafo = sistema.parrafo;
        }
        
    } catch (error) {
        console.log('error generaHtml', error);
    }
    
    template = template.replace('titulo', titulo);
    template = template.replace('parrafo', parrafo);
    
    return template;

};

module.exports = {
    sendmail
}