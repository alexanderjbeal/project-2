const express = require('express');
const app = express();
let passport = require('passport');
let session = require('express-session');
let bodyParser = require('body-parser');
let env = require('dotenv').load();
let exphbs = require('express-handlebars');

let PORT = process.env.PORT || 5000;

// BodyParser (Middleware)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Handlebars
app.set('views', './app/views')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});


// Models
let models = require("./app/models");

// Routes
let authRoute = require('./app/routes/auth.js')(app,passport);
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Load passport strategies
require('./app/config/passport/passport.js')(passport, models.user);
 
let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Start Server - Sync Database & Models
models.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function(err) {
        if (!err)
        console.log(`
        \nSite is live 🌎
        \nServer running on ${PORT}
        \nDatabase looks good!
        `);
        else console.log(err)
      });
}).catch(function(err) {
    console.log(err, "Something went wrong with the database update!")
});

module.exports = app;


// var db = require("./models");

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");





