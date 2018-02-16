const adicionarServicosEm = function(server){
    const express = require('express')
    const router = express.Router()
    server.use('/v1', router)

    const api = appRequire('api')
    api.Usuario.servicos.register(router, '/usuarios')
}

module.exports = {
    adicionarServicosEm
}