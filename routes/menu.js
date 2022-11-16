const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { menuGet, menuPost, menuDelete } = require('../controllers/menu');

const router = Router();

router.post('/',[
    validarJWT,
    check('title', 'el title es obligatorio').not().isEmpty(),
    check('url', 'el url es obligatorio').not().isEmpty(),
    check('icon', 'el icon es obligatorio').not().isEmpty(),
    check('perfil', 'el perfil es obligatorio').not().isEmpty(),
    check('perfil', 'perfil no es un id mongo valido').isMongoId(),
    validarCampos
], menuPost);

router.get('/',[
    validarJWT,
    check('perfil', 'el perfil es obligatorio').not().isEmpty(),
    check('perfil', 'perfil no es un id mongo valido').isMongoId(),
    validarCampos
], menuGet);

router.delete('/',[
    validarJWT,
    check('menu', 'el menu es obligatorio').not().isEmpty(),
    check('menu', 'menu no es un id mongo valido').isMongoId(),
    validarCampos
], menuDelete);

module.exports = router;