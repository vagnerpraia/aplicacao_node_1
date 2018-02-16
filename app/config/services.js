const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/v1', router)

    const usuarios = require('../api/usuarios')
    usuarios.register(router, '/usuarios')
}