const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/v1', router)

    const usuario = require('../api/usuario')
    usuario.register(router, '/usuarios')
}