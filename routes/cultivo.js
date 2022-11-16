const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { cultivosGet, cultivoPost, cultivoDelete, cultivoUpdate } = require('../controllers/cultivo');

const router = Router();

router.post('/',[
    validarJWT,
    check('usuario', 'el usuario es obligatorio').not().isEmpty(),
    check('usuario', 'usuario no es un id mongo valido').isMongoId(),
    check('semilla', 'la semilla es obligatoria').not().isEmpty(),
    check('fecha', 'la fecha es obligatoria').not().isEmpty(),
    validarCampos
], cultivoPost);

router.get('/',[
    validarJWT,
    check('usuario', 'el usuario es obligatorio').not().isEmpty(),
    check('usuario', 'usuario no es un id mongo valido').isMongoId(),
    validarCampos
], cultivosGet);

router.delete('/',[
    validarJWT,
    check('cultivo', 'el cultivo es obligatorio').not().isEmpty(),
    check('cultivo', 'cultivo no es un id mongo valido').isMongoId(),
    validarCampos
], cultivoDelete);

router.patch('/',[
    validarJWT,
    check('cultivo', 'el cultivo es obligatorio').not().isEmpty(),
    check('cultivo', 'cultivo no es un id mongo valido').isMongoId(),
    validarCampos
], cultivoUpdate);

module.exports = router;