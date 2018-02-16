const configurarRootPath = function(rootPath){
	global.appPath = rootPath;
}

const configurarAppRequire = function(rootPath){
	global.appRequire = function(name) {
	    return require(rootPath + '/' + name)
	}
}

module.exports = {
	configurarRootPath,
	configurarAppRequire
}