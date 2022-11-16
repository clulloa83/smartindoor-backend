const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { perfilGet, perfilPost, perfilDelete } = require('../controllers/perfil');

const router = Router();

router.post('/',[
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    validarCampos
], perfilPost);

router.get('/',[
    validarJWT,
    // check('perfil', 'perfil no es un id mongo valido').isMongoId(),
    validarCampos
], perfilGet);

router.delete('/',[
    validarJWT,
    check('perfil', 'el perfil es obligatorio').not().isEmpty(),
    check('perfil', 'perfil no es un id mongo valido').isMongoId(),
    validarCampos
], perfilDelete);

module.exports = router;