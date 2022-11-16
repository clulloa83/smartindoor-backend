const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { registrosPost, registrosGet, registrosDelete, testGet } = require('../controllers/registro');

const router = Router();

router.post('/',[
    // validarJWT,
    check('etiqueta', 'la etiqueta es obligatoria').not().isEmpty(),
    check('dispositivo', 'el dispositivo es obligatorio').not().isEmpty(),
    check('unidad', 'la unidad es obligatoria').not().isEmpty(),
    check('tipo', 'el tipo es obligatorio').not().isEmpty(),
    check('valor', 'el valor es obligatorio').not().isEmpty(),
    check('minimo', 'el minimo es obligatorio').not().isEmpty(),
    check('maximo', 'el maximo es obligatorio').not().isEmpty(),
    validarCampos
], registrosPost);

router.get('/',[
    validarJWT,
    check('dispositivo', 'el dispositivo es obligatorio').not().isEmpty(),
    // check('limite', 'el limite es obligatorio').not().isEmpty(),
    // check('desde', 'el desde es obligatorio').not().isEmpty(),
    validarCampos
], registrosGet);

router.delete('/',[
    validarJWT,
    check('id', 'el id es obligatorio').not().isEmpty(),
    validarCampos
], registrosDelete);

router.get('/test', testGet);

module.exports = router;