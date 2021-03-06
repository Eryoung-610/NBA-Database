// Required NPM libraries
require('dotenv').config();
const Express = require('express');
const ejsLayouts = require("express-ejs-layouts");
const helmet = require('helmet');
const session = require("express-session");
const flash = require("flash");
const passport = require('./config/ppConfig');
const db = require('./models');
const isLoggedIn = require('./middleware/isLoggedIn');
const override = require('method-override')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const axios = require('axios')


// app setup
const app = Express();
app.use(Express.urlencoded({ extended: false }));
app.use(Express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(require('morgan')('dev'));
app.use(helmet());
app.use(override('_method'))

// create new instance of class Sequelize Store
const sessionStore = new SequelizeStore({
    db: db.sequelize,
    expiration: 1000 * 60 * 30
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true
}))

sessionStore.sync();

// initialize passport and session info
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function (req, res, next) {
    res.locals.alert = req.flash();
    res.locals.currentUser = req.user;

    next();
});

// ROUTES
app.get('/', function (req, res) {
    // check to see if user logged in
    res.render('intro');
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/issues', (req,res) => {
    res.render('issues')
})

app.get('/restartInfo', (req,res) => {
    res.render('restartInfo')
})

app.get('/profile', isLoggedIn, function (req, res) {
    res.render('profile');
})

// include auth controller
app.use('/auth', require('./controllers/auth'));
// include display controller
app.use('/team', require('./controllers/team'));
// include player controller
app.use('/player', require('./controllers/player'));

// initialize App on Port
app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening to the smooth sweet sounds of port ${process.env.PORT} in the morning ☕️.`);
});
