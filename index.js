var express = require('express');
 
app.get('/', function (req, res) {
 res.send('changed not ');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
