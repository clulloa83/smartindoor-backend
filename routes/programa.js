const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { programasGet, programaPost, programaDelete, programaUpdate } = require('../controllers/programa');

const router = Router();

router.post('/',[
    validarJWT,
    check('dispositivo', 'el dispositivo es obligatorio').not().isEmpty(),
    check('dispositivo', 'dispositivo no es un id mongo valido').isMongoId(),
    check('accion', 'la accion es obligatoria').not().isEmpty(),
    check('hora', 'la hora es obligatoria').not().isEmpty(),
    validarCampos
], programaPost);

router.get('/',[
    validarJWT,
    check('dispositivo', 'el dispositivo es obligatorio').not().isEmpty(),
    check('dispositivo', 'dispositivo no es un id mongo valido').isMongoId(),
    validarCampos
], programasGet);

router.delete('/',[
    validarJWT,
    check('programa', 'el programa es obligatorio').not().isEmpty(),
    check('programa', 'programa no es un id mongo valido').isMongoId(),
    validarCampos
], programaDelete);

router.patch('/',[
    validarJWT,
    check('programa', 'el programa es obligatorio').not().isEmpty(),
    check('programa', 'programa no es un id mongo valido').isMongoId(),
    validarCampos
], programaUpdate);

module.exports = router;