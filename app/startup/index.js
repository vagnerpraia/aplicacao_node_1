require('dotenv').config()

const carregarAplicacao = function(){
    const path = require('path')
    
    const global = require('./global')
    const appPath = path.dirname(__dirname)
    global.configurarRootPath(appPath)
    global.configurarAppRequire(appPath);

    const exception = require('./exception')
    exception.tratarUncaughtException()

    const bancoDeDados = require('./database')
    bancoDeDados.conectarComMongoDB()

    const servidor = require('./server')
    const servidorExpress = servidor.criarServidorExpress()

    const servicos = require('./services')
    servicos.adicionarServicosEm(servidorExpress)
}

module.exports = {
    carregarAplicacao,
}