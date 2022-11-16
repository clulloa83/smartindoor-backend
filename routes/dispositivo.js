const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { dispositivosPost, dispositivosGet, dispositivosDelete, dispositivosUpdate } = require('../controllers/dispositivo');

const router = Router();

router.post('/',[
    validarJWT,
    check('sistema', 'el sistema es obligatorio').not().isEmpty(),
    check('usuario', 'el usuario es obligatorio').not().isEmpty(),
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('icon', 'el nombre es obligatorio').not().isEmpty(),
    check('ubicacion', 'el ubicacion es obligatorio').not().isEmpty(),
    check('categoria', 'la categoria es obligatoria').not().isEmpty(),
    check('tipos', 'el tipos es obligatorio').not().isEmpty(),
    validarCampos
], dispositivosPost);

router.get('/',[
    validarJWT,
    check('usuario', 'el usuario es obligatorio').not().isEmpty(),
    validarCampos
], dispositivosGet);

router.delete('/',[
    validarJWT,
    check('dispositivo', 'el dispositivo es obligatorio').not().isEmpty(),
    check('dispositivo', 'dispositivo no es un id mongo valido').isMongoId(),
    validarCampos
], dispositivosDelete);

router.patch('/',[
    validarJWT,
    check('dispositivo', 'el dispositivo es obligatorio').not().isEmpty(),
    check('dispositivo', 'dispositivo no es un id mongo valido').isMongoId(),
    validarCampos
], dispositivosUpdate);

module.exports = router;