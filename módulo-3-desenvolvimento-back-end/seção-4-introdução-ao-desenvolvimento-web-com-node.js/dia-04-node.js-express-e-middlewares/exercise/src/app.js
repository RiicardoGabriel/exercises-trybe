const express = require('express');
const app = express();

const ecotourism = require('./ecotourism');
const cryptoToken = require('./cryptoToken');
const validatePrice = require('./middlewares/activities/validatePrice');
const validateName = require('./middlewares/activities/validateName');
const validateDescription = require('./middlewares/activities/validateDescription');
const validateCreatedAt = require('./middlewares/activities/validateCreatedAt');
const validateDifficulty = require('./middlewares/activities/validateDifficulty');
const validateRating = require('./middlewares/activities/validateRating');
const validationPeopleUsers = require('./middlewares/users/validationPeopleUsers');

app.use(express.json());

app.get('/ecotourism', (_req, res) => {
    res.status(200).json(ecotourism);
});

// app.post('/activities', (_req, res) => {
//     res.status(201).json({ "message": "Atividade registrada com sucesso!" })
// });

app.post('/activities',
    validatePrice, validateName, validateDescription,
    validateCreatedAt, validateDifficulty, validateRating,
    (_req, res) => {
    res.status(201).json({ message: "Atividade cadastrada com sucesso!" })
})

app.post('/signup', validationPeopleUsers,
    (_req, res) => {
    res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        "token": cryptoToken(),
    })
})

module.exports = app;