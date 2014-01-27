var express = require('express');
app = express();

var hourMs = 1000*60*60;
app.use(express.static(__dirname + '/../descargas', { maxAge: hourMs }));
app.use(express.directory(__dirname + '/../descargas', {icons: true}));
app.use(express.errorHandler());

console.log('listen 0.0.0.0:9999');
app.listen(9999);
