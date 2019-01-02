// app 
const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const commonRoutes = require('./API/routes/common');

app.use('/common', commonRoutes);

app.get('/*', function(req, res, next) {
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
});

app.use((req, res, next) => {
    const error = new Error('Not Found...');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

module.exports = app;