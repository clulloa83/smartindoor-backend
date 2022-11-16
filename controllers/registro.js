const { StatusCode } = require('status-code-enum');
const servicioRegistros = require('../services/servicio-registros');
const ParamsRegistros = require('../models/params/registros-params');

// const { io } = require('../app');

/**
 * registra registro
 * @param {*} req 
 * @param {*} res 
 */
const registrosPost = async(req, res) => {

    const { dispositivo, etiqueta, unidad, tipo, valor, minimo, maximo } = req.body;

    const params = new ParamsRegistros();
    params.registro.dispositivo.id = dispositivo;
    params.registro.etiqueta = etiqueta;
    params.registro.unidad = unidad;
    params.registro.tipo = tipo;
    params.registro.valor = valor;
    params.registro.minimo = minimo;
    params.registro.maximo = maximo;
    params.registro.fechaRegistro = Date.now();

    try {
        
        const result = await servicioRegistros.registrosPost(params);

        // io.emit('message', req.body);


        res.status(StatusCode.SuccessCreated).json(result);
    } 
    catch (error) {
        console.log('error registrosPost', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    };
};

/**
 * lista los registros
 * @param {*} req 
 * @param {*} res 
 */
const registrosGet = async(req, res) => {

    const { dispositivo } = req.query;

    const params = new ParamsRegistros();
    params.dispositivo.id = dispositivo;

    try {
        const result = await servicioRegistros.registrosGet(params);
        res.status(StatusCode.SuccessOK).json(result);
    } 
    catch (error) {
        console.log('error registrosGet', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    };
};

const registrosDelete = async(req = request, res = response) => {
    
    const { id } = req.body;

    const params = new ParamsRegistros();
    params.registro.id = id;

    try {
        
        const result = await servicioRegistros.registrosDelete(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error registrosDelete', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

// const testGet = (req, res) => {
//     res.status(StatusCode.SuccessOK).json({
//         mensaje: 'acceso correcto'
//     });
// }

module.exports = {
    registrosPost,
    registrosGet,
    registrosDelete,
    // testGet
};