const express = require('express');
const app = express();
var serveIndex = require('serve-index')

app.use(express.static('public'));
app.use('/Images', express.static('public/Images'), serveIndex('public/Images', {'icons': true}))

app.listen(5000, () => {
    console.log('App listening on port 5000!');
})
