const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT, validarArchivoSubir } = require('../middlewares');
const { seguimientosGet, seguimientoPost, seguimientoDelete, seguimientoUpdate, cargarArchivo } = require('../controllers/seguimiento');

const router = Router();

router.post('/',[
    validarJWT,
    check('cultivo', 'el cultivo es obligatorio').not().isEmpty(),
    check('cultivo', 'cultivo no es un id mongo valido').isMongoId(),
    check('observacion', 'la observacion es obligatoria').not().isEmpty(),
    check('fecha', 'la fecha es obligatoria').not().isEmpty(),
    validarCampos
], seguimientoPost);

router.get('/',[
    validarJWT,
    check('cultivo', 'el cultivo es obligatorio').not().isEmpty(),
    check('cultivo', 'cultivo no es un id mongo valido').isMongoId(),
    validarCampos
], seguimientosGet);

router.delete('/',[
    validarJWT,
    check('seguimiento', 'el seguimiento es obligatorio').not().isEmpty(),
    check('seguimiento', 'seguimiento no es un id mongo valido').isMongoId(),
    validarCampos
], seguimientoDelete);

router.patch('/',[
    validarJWT,
    check('seguimiento', 'el seguimiento es obligatorio').not().isEmpty(),
    check('seguimiento', 'seguimiento no es un id mongo valido').isMongoId(),
    validarCampos
], seguimientoUpdate);

// router.post( '/cargarArchivo', validarArchivoSubir, cargarArchivo);
router.post( '/cargarArchivo', cargarArchivo);


module.exports = router;