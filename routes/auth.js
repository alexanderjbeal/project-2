var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
 
    // User Register, Login, Logout
    app.get('/signup', authController.signup);
 
    app.get('/signin', authController.signin);
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/players',
            failureRedirect: '/signup'
        }
    ));
 
    app.get('/dashboard', isLoggedIn, authController.dashboard);
 
    app.get('/logout', authController.logout);
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/index',
            failureRedirect: '/signin'
        }
    ));

    // Pages
    app.get('/index', authController.index);
    app.get('/players', authController.players);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}