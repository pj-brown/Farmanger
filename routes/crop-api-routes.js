// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var cropSeed = require('../db/crops-seed.json');

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all crops
  app.get("/api/crops/", function (req, res) {
    db.Crop.findAll({})
      .then(function (dbCrop) {
        console.log(dbCrop);
        res.json(dbCrop);
      })
      .catch(err => res.json(err));
  });

  // Get route for retrieving a single Crop
  app.get("/api/crops/:id", function (req, res) {
    db.Crop.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbCrop) {
        res.json(dbCrop);
      })
      .catch(err => res.json(err));
  });

  // POST route for saving a new Crop
  app.post("/api/crops", function (req, res) {
    console.log(req.body);
    db.Crop.create({
      cropName: req.body.cropName,
      growTime: req.body.growTime,
      irrigation: req.body.irrigation,
      season: req.body.season
    })
      .then(function (dbCrop) {
        res.json(dbCrop);
      })
      .catch(err => res.json(err));
  });

  // DELETE route for deleting crops
  app.delete("/api/crops/:id", function (req, res) {
    db.Crop.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbCrop) {
        res.json(dbCrop);
      })
      .catch(err => res.json(err));
  });

  // PUT route for updating crops
  app.put("/api/crops/:id", function (req, res) {
    db.Crop.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function (dbCrop) {
        res.json(dbCrop);
      })
      .catch(err => res.json(err));
  });
};
