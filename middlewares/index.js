const validarCampos = require('./validar-campos');
const validarJWT = require('./validar-jwt');
const validarArchivoSubir = require('./validar-archivo');
// const subirArchivos = require('./subir-archivos');

module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validarArchivoSubir
    // ...subirArchivos,
}