const express = require('express')
const api = appRequire('api')

const adicionarServicosEm = function(server){
    const router = express.Router()
    server.use('/v1', router)

    api.Usuario.servicos.register(router, '/usuarios')
}

module.exports = {
    adicionarServicosEm
}