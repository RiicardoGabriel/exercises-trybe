const express = require('express');

const app = express();

app.use(express.json());

const chocolates = require('./chocolates');

app.get('/chocolates/total', (_req, res) => {
    const totalityChoc = chocolates.length;
    const objTotality = {
        "totalChocolates": totalityChoc,
    }
    res.status(200).json(objTotality)
});

app.get('/chocolates', (_req, res) => res.status(200).json(chocolates));

module.exports = app;