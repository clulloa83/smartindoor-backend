const { Router } = require('express');
const { check } = require('express-validator');
const { sendmail } = require('../controllers/correo');
const { validarCampos } = require('../middlewares');

const router = Router();

router.post('/',[
    check('sistemaId', 'el sistemaId es obligatorio').not().isEmpty(),
    check('to', 'el to es obligatorio').not().isEmpty(),
    check('from', 'el from es obligatorio').not().isEmpty(),
    validarCampos
], sendmail);

module.exports = router;