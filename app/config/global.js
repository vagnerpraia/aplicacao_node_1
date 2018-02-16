module.exports = function(rootPath){
	global.appPath = rootPath;

	global.appRequire = function(name) {
	    return require(rootPath + '/' + name);
	}
}