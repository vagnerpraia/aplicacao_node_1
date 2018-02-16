//const tipoUsuario = require('')

const path = require('path')
console.log(path.resolve(''))

const usuarios = require('./model')

usuarios.methods(['get', 'post', 'put', 'delete'])
usuarios.updateOptions({new: true, runValidators: true})

module.exports = usuarios