const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('lol');
    next();
})

app.use((req, res, next) => {
    console.log('lol2');
    res.send('<h1>Hello World!</h1>');
})

app.listen(3000);
