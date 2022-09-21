//Biblioteca 
import createError from "http-errors";
//El framework express
//var express = require('express');
import express from "express";
//Bibliooteca del nucleo de node que sirve para
//administrar rutas
//var path = require('path');
import path from "path";
//Biblioteca externa que sirve para administrar cookies
import cookieParser from "cookie-parser";
//var cookieParser = require('cookie-parser');
//Biblioteca que registra en consola
//solicitudes del cliente
import logger from "morgan";

//Definición de rutas
//var indexRouter = require('./routes/index');
import indexRouter from "./routes/index";
//var usersRouter = require('./routes/users');
import usersRouter from "./routes/index";

//var app = express();
const app = express();

// view engine setup
//view engine setup
//Configura el motor de plantillas
//1. Establecer donde estarán las plantillas
///vistas -> Views
//app.set("<nombre de la var>", <valor>)
app.set('views', path.join(__dirname, 'views'));
console.log(`☢️ El valor de __dinrma es: ${__dirname}`)
console.log(`⚠️ El valor del join es: ${path.join(__dirname, 'views')}}`)
//JOIN TIENE LA INTELIGENCIA PARA SABER EN QUE ENTORNO ESTA Y SELECCIONA EL CARACTER CON EL QUE SELECCIONA LA RUTA ("/ O backslash")
//Establezco que motor precargado usare
app.set('view engine', 'hbs');

//[Cliente] => {get+url+cliente+...} REQUEST
//[Cliente] => req => 💻 => req (req,res)=>{} [ middleware 1 ] => req => [ middleware 2 ] => res
//re == {html + dns cliente}
//[Cliente] <== <== <== <== <== <== <== 
//Middleware son objetos que reciben req y res next invoca al siguiente Middleware

//Establezo Middelware
app.use(logger('dev'));//logear
app.use(express.json());//Middleware para parsear a json
app.use(express.urlencoded({ extended: false }));// decode la URL
app.use(cookieParser());//trabajar con cookies - parsear cookies, se guardan en el navegador
app.use(express.static(path.join(__dirname, 'public')));//Servidor de archivos estaticos EN CARPETA public se puede servir todo de manera estatica


//Registro Rutas
app.use('/', indexRouter); 
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
export default app;
