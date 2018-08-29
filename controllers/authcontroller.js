
var exports = module.exports = {}

 
exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

exports.dashboard = function(req, res) {
    res.render('dashboard');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/index');
    });
}

exports.index = function(req, res) {
    res.render('index');
}

exports.games = function(req, res) {
    res.render('games');
}

exports.players = function(req, res) {
    res.render('players');
}