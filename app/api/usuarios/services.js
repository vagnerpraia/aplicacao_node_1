const usuarios = require('./model')

usuarios.methods(['get', 'post', 'put', 'delete'])
usuarios.updateOptions({new: true, runValidators: true})

module.exports = usuarios