const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/v1', router)

    const usuarioService = require('../api/usuario/usuarioService')
    usuarioService.register(router, '/usuario')
}