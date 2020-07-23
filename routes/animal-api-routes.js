// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all animals
  app.get("/api/animals/", function(req, res) {
    db.Animal.findAll({})
      .then(function(dbAnimal) {
        res.json(dbAnimal);
      });
  });

  // Get route for retrieving a single animal
  app.get("/api/animals/:id", function(req, res) {
    db.Animal.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbAnimal) {
        res.json(dbAnimal);
      });
  });

  // POST route for saving a new animal
  app.post("/api/animals", function(req, res) {
    console.log(req.body);
    db.Animal.create({
      animalType: req.body.animalType,
      quantity: req.body.quantity,
      age: req.body.age,
      vetStatus: req.body.vetStatus
    })
      .then(function(dbAnimal) {
        res.json(dbAnimal);
      });
  });

  // DELETE route for deleting animals
  app.delete("/api/animals/:id", function(req, res) {
    db.Animal.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbAnimal) {
        res.json(dbAnimal);
      });
  });

  // PUT route for updating animals
  app.put("/api/animals", function(req, res) {
    db.Animal.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbAnimal) {
        res.json(dbAnimal);
      });
  });
};
