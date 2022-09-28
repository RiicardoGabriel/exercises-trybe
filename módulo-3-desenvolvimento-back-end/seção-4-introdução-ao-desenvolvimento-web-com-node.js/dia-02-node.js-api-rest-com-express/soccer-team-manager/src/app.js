// src/app.js
const express = require('express');

const app = express();

app.use(express.json());

const activities = require('./activities');

app.get('/myActivities', (_req, res) => res.status(200).json(activities));

app.get('/myActivities/:id', (req, res) => {
    const activity = activities.find(({ id }) => id === Number(req.params.id));
    res.status(200).json(activity);
});

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;
    let filteredActivities = activities;
  
    if (status) {
      filteredActivities = activities.filter((activity) => activity.status === status);
    }
  
    res.status(200).json({ activities: filteredActivities });
  });

app.post('/teams', (req, res) => {
    const novoTime = { ...req.body };
    activities.push(novoTime);

    res.status(201).json(novoTime);
});

module.exports = app;