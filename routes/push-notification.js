const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarJWT } = require('../middlewares');
const { 
    obtenerKey, 
    suscripcionAgregar, 
    notificacionTodasSuscripciones,
    enviar,
    validaSuscripcion, enviar2
} = require('../controllers/push-notification');
const router = Router();

router.get('/key',[
    validarJWT,
    validarCampos
], obtenerKey);

router.post('/suscribir',[
    validarJWT,
    check('sistema', 'el sistema es obligatorio').not().isEmpty(),
    check('sistema', 'sistema no es un id mongo valido').isMongoId(),
    check('usuario', 'el usuario es obligatorio').not().isEmpty(),
    check('usuario', 'usuario no es un id mongo valido').isMongoId(),
    check('suscripcion', 'el suscripcion es obligatorio').not().isEmpty(),
    validarCampos
], suscripcionAgregar);

router.post('/valida',[
    check('sistemaId', 'el sistemaId es obligatorio').not().isEmpty(),
    check('usuarioId', 'el usuarioId es obligatorio').not().isEmpty(),
    check('suscripcion', 'el suscripcion es obligatorio').not().isEmpty(),
    validarCampos
], validaSuscripcion);

router.post('/aTodos',[
    validarJWT,
    check('title', 'el title es obligatorio').not().isEmpty(),
    check('body', 'el body es obligatorio').not().isEmpty(),
    check('icon', 'el icon es obligatorio').not().isEmpty(),
    check('url', 'el url es obligatorio').not().isEmpty(),
    validarCampos
], notificacionTodasSuscripciones);

router.post('/enviar',[
    check('title', 'el title es obligatorio').not().isEmpty(),
    check('body', 'el body es obligatorio').not().isEmpty(),
    check('icon', 'el icon es obligatorio').not().isEmpty(),
    check('url', 'el url es obligatorio').not().isEmpty(),
    check('sub', 'el sub es obligatorio').not().isEmpty(),
    validarCampos
], enviar);

router.post('/enviar2', enviar2);

module.exports = router;