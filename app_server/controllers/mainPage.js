var controllerO = {};

controllerO.renderPage = function(req, res, next){
	res.render('index', {title: 'Express V1'});
};

module.exports = controllerO;