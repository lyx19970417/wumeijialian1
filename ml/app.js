var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
const laptopRouter=require('./routes/laptop')
const CarRouter=require('./routes/laptop_car.js')
const ListRouter=require("./routes/list.js")
const OrderRouter=require("./routes/order.js")
const bodyParser=require('body-parser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//跨域请求
app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//首页路由挂载
app.use('/index', indexRouter);
//用户路由挂载
app.use('/user', usersRouter);
app.use('/laptop',laptopRouter);
app.use('/car',CarRouter);
app.use('/list',ListRouter);
app.use('/order',OrderRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
