const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares');
const { login } = require('../controllers/login');

const router = Router();

router.post('/',[
    check('correo', 'el correo es obligatorio').not().isEmpty(),
    check('correo', 'el correo debe ser válido').isEmail(),
    check('contraseña', 'el contraseña es obligatorio').not().isEmpty(),
    validarCampos
], login);

module.exports = router;