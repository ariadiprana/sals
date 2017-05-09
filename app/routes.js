// app/routes.js
module.exports = function(app, passport) {

	const corporateController = require('./controllers/corporate.js')
	const corporateUserController = require('./controllers/corporateuser.js')
	const projectController = require('./controllers/project.js')
	const paymentController = require('./controllers/payment.js')
	const corporateEmpController = require('./controllers/corporateemp.js')
	const mapfloorController = require('./controllers/mapfloor.js')

	// =====================================
	// home screen
	// =====================================
	app.get('/', function(req, res) { res.render('index.ejs'); });
	app.get('/contact', function(req, res) { res.render('contact.ejs'); });
	app.get('/about', function(req, res) { res.render('about.ejs'); });
	app.get('/service', function(req, res) { res.render('service.ejs'); });

};

// route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.redirect('/');
}
