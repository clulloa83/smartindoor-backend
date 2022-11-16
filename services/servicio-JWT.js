const dao_ = require('../db/connection-sql');

/**
 * valida en bd sql el token
 * @param conn 
 * @param token 
 * @returns 
 */
const validaToken = async(conn, token) => {

    let tokenValido = false;

    const promesa = new Promise((resolve, reject) => {
        return dao_.SP_ValidarToken(conn, token)
            .then((result) => {
                if (result.length > 0) {
                    tokenValido = true;
                }
                resolve(tokenValido);
            })
            .catch((error) => {
                console.log('validaToken error', error);
                reject(error);
            });
    });
    return promesa;
};

module.exports = {
    validaToken
}
