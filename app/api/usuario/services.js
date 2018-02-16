const configurarServicos = function(){
    const usuario = require('./model')
    const modelo = usuario.obterModelo()

    modelo.methods(['get', 'post', 'put', 'delete'])
    modelo.updateOptions({new: true, runValidators: true})

    return modelo
}

module.exports = {
    configurarServicos
}