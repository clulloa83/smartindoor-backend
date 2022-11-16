const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { sistemasPost, sistemasGet, sistemasDelete } = require('../controllers/sistema');

const router = Router();

router.post('/',[
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    // check('parrafo', 'el parrafo es obligatorio').not().isEmpty(),
    validarCampos
], sistemasPost);

router.get('/',[
    validarJWT,
    // check('limite', 'el limite es obligatorio').not().isEmpty(),
    // check('desde', 'el desde es obligatorio').not().isEmpty(),
    validarCampos
], sistemasGet);

router.delete('/',[
    validarJWT,
    check('id', 'el id es obligatorio').not().isEmpty(),
    validarCampos
], sistemasDelete);

module.exports = router;