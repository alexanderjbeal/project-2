const express = require('express');
const app = express();
let passport = require('passport');
let session = require('express-session');
let bodyParser = require('body-parser');
let env = require('dotenv').load();
let exphbs = require('express-handlebars');

let PORT = process.env.PORT || 3000;

// BodyParser (Middleware)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true, 
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use( (req, res, next) => {
    res.locals.isAuthenticated = req.isAuthenticated();
    next();
});

// Handlebars
app.set("views", "./views");
app.engine("hbs", exphbs({
    extname: ".hbs",
    defaultLayout: "main"
}));
app.set("view engine", ".hbs");

// Models
let db = require("./models");

// Routes
require("./routes/auth.js")(app,passport);
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Load passport strategies
require("./config/passport.js")(passport, db.User);
 
let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Start Server - Sync Database & Models
db.sequelize.sync(syncOptions).then( () => {
    app.listen(PORT, (err) => {
        if (!err)
        console.log(`
        \nSite is live 🌎
        \nServer running on ${PORT}
        \nDatabase looks good!
        `);
        else console.log(err)
      });
}).catch( (err) => {
    console.log(err, "Something went wrong with the database update!")
});

module.exports = app;





