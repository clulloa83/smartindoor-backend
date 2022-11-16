const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { esCorreoValido } = require('../helpers');
const { usuariosGet, usuarioPost, usuarioDelete } = require('../controllers/usuario');

const router = Router();

router.post('/',[
    validarJWT,
    // check('cuenta', 'el cuenta es obligatorio').not().isEmpty(),
    // check('cuenta').custom( esCorreoValido ),
    check('contraseña', 'el contraseña es obligatorio').not().isEmpty(),
    check('correo', 'el correo es obligatorio').not().isEmpty(),
    check('correo', 'el correo es obligatorio').isEmail(),
    check('correo').custom( esCorreoValido ),
    check('nombres', 'el nombres es obligatorio').not().isEmpty(),
    check('apellidos', 'el apellidos es obligatorio').not().isEmpty(),
    check('perfil', 'el perfil es obligatorio').not().isEmpty(),
    check('perfil', 'perfil no es un id mongo valido').isMongoId(),
    validarCampos
], usuarioPost);

router.get('/',[
    validarJWT,
    // check('perfil', 'el perfil es obligatorio').not().isEmpty(),
    // check('perfil', 'perfil no es un id mongo valido').isMongoId(),
    validarCampos
], usuariosGet);

router.delete('/',[
    validarJWT,
    check('usuario', 'el usuario es obligatorio').not().isEmpty(),
    check('usuario', 'usuario no es un id mongo valido').isMongoId(),
    validarCampos
], usuarioDelete);

module.exports = router;