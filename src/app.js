const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/user'); 


require('./models/index')();

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

app.use('/api/', router);

app.use('/', (req, res) => {
    res.send('Welcome to engineer Test');
})

module.exports = app;