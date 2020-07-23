var db = require("../models");

module.exports = function(app) {
  app.get("/api/fields", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Animal
    db.Field.findAll({
      include: [db.Animal]
    }).then(function(dbField) {
      res.json(dbField);
    });
  });

  app.get("/api/fields/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Animal
    db.Field.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Animal]
    }).then(function(dbField) {
      res.json(dbField);
    });
  });

  app.post("/api/fields", function(req, res) {
    db.Field.create(req.body).then(function(dbField) {
      res.json(dbField);
    });
  });

  app.put("/api/fields", function(req, res) {
      db.Field.update(req.body,
      {
        where: {
            id: req.body.id
        }
      })
      .then(function(dbField) {
          res.json(dbField);
      });
  });

  app.delete("/api/fields/:id", function(req, res) {
    db.Field.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbField) {
      res.json(dbField);
    });
  });

};
