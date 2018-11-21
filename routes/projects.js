const express = require('express');

const { Router } = express;

const Project = require('../models/project');
const projectRouter = Router();

projectRouter
  .route('/')
  .get((req, res, next) => {
    //ask the database for the right data and send it to the client
    Project.find({}, (err, projects) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(200).send(projects);
      }
    });
  })
  .post((req, res, next) => {
    // convert request body into a document
    const newProject = new Project(req.body);
    //save the document to the collection (model)
    newProject.save((err, savedProject) => {
      if (err) {
        res.status(400);
        next(err);
      } else {
        res.status(201).send(savedProject);
      }
    });
  });
