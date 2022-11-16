const nodemailer = require('nodemailer');
const config = require('../db/correo/config').config;

/**
 * envia correo según parametros
 * @param {*} params 
 * @returns 
 */
const sendmail = async(params) => {

    try {

        let transporter = nodemailer.createTransport(config);

        const message = {
            headers: params.correo.headers,
            from: params.correo.from,
            to: params.correo.to,
            cc: params.correo.cc,
            bcc: params.correo.bcc,
            subject: params.correo.subject,
            text: params.correo.text,
            html: params.correo.html,
            attachments: params.correo.attachments
        };

        // console.log('message', message);

        let info = await transporter.sendMail(message);

        return info.messageId;
        
    } catch (error) {
        console.log('error sendmail', error);
        throw new Error(error);
    };
};

module.exports = {
    sendmail,
}