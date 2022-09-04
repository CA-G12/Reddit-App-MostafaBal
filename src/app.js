const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const router = require('./routes');

const app = express();
// Middleware
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(express.static('public'));
// app.get('/:mostafa',(req,res)=>{
//     console.log(req.params)
//     res.send(`hi ${req.params.mostafa}`)
// })
app.use(router);
module.exports = app;
