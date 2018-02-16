const port = 3000

const express = require('express')
const server = express()
const middlewares = require('../middlewares')

middlewares(server)

server.listen(port, function(){
     console.log('Aplicação executando na porta ' + port + '.')
})

module.exports = server