var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var authen = require('express-authen')

var routes = require('./routes/index');
var home = require('./routes/home');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  resave: false, // dont save session if unmodified
  saveUninitialized: true, // create session when has request
  secret: 'we are men'
}))
// session-persisted message middleware
app.use(function(req, res, next) {
  var err = req.session.error
    , msg = req.session.success
  delete req.session.error
  delete req.session.success
  res.locals.message = ''
  if (err)  res.locals = {flag: 'error', message: err}
  else if (msg)  res.locals = {flag: 'success', message: msg}
    
  if (req.session.user)
    res.user = true

  next()  
})
app.use(express.static(path.join(__dirname, 'public')));

app.use(authen({
    'login': '/',
    'home': '/home',
    'referer': 'originalUrl',
}))

app.use('/', routes);
app.use('/users', users);
app.use('/home', home)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
