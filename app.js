const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');

const passport = require('./passport');
const indexRouter = require('./routes/index');


const app = express();

app.use(fileUpload()); // file.data contains a buffer
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport setup
app.use(session({
    secret: 'ninja',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the React app
app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use('/', indexRouter);


module.exports = app;
