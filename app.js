var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var webpack = require('webpack');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');
var compiler = webpack(config);

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require('./routes/register');
var find = require('./routes/find');

var geren = require('./routes/geren');

var question = require('./routes/question');
var answer = require('./routes/answer');
var apis = require('./routes/apis');




var app = express();
app.use(session({
	resave: true,
  saveUninitialized: false,
  secret: '3nqr9xzx2438fgsdam4324n',
	cookie:{
		maxAge: 1000*60*30
	}
}));

// webpack middleware
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));
app.use(WebpackHotMiddleware(compiler));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/register', register);
app.use('/login', login);
app.use('/find', find);

app.use('/geren',geren);
app.use('/geren_wone',geren);
app.use('/geren_wtwo',geren);
app.use('/geren_wtre',geren);
app.use('/geren_wfor',geren);

app.use('/question', question);
app.use('/answer', answer);
app.use('/api', apis);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
