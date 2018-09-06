var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
 
    // User Register, Login, Logout
    app.get('/signup', authController.signup);
 
    app.get('/signin', authController.signin);
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/games',
            failureRedirect: '/404'
        }
    ));
 
    app.get('/dashboard', isLoggedIn, authController.dashboard);
 
    app.get('/logout', authController.logout);
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/games',
            failureRedirect: '/404'
        }
    ));

    // Pages
    app.get('/', authController.index);
    app.get('/index', authController.index);
    app.get('/games', authController.games);
    app.get('/players', authController.players);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/index');
    }
    
}