const criarServidorExpress = function(){
    const express = require('express')
    const servidor = express()
    const middleware = appRequire('middleware')
    const port = process.env.PORT || 3000

    servidor.use(middleware.corsUniversal)
    servidor.use(middleware.bodyParserUrlEncoded)
    servidor.use(middleware.bodyParserJson)

    servidor.listen(port, function(){
        console.log('Aplicação executando na porta ' + port + '.')
    })

    return servidor
}

module.exports = {
    criarServidorExpress
}