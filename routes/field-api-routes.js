var db = require("../models");

module.exports = function(app) {
  app.get("/api/fields", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Crop
    db.Field.findAll({
      include: [db.Crop]
    })
    .then(function(dbField) {
      res.json(dbField);
    })
    .catch(err => res.json(err));
  });

  app.get("/api/fields/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Crop
    db.Field.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Crop]
    })
    .then(function(dbField) {
      res.json(dbField);
    })
    .catch(err => res.json(err));
  });

  app.post("/api/fields", function(req, res) {
    // inerst the crop
    db.Crop.findOne({where: { cropName: req.body.Crop }})
    .then(dbCrop => {
      let fieldInsert = {
        fieldName: req.body.fieldName,
        acreage: req.body.acreage,
        note: req.body.note
      }
      console.log(dbCrop) // grab id
      fieldInsert.CropId = dbCrop.id
      return fieldInsert;
    }).then(fieldInsert => {
      db.Field.create(fieldInsert).then(dbField => {
        res.json(dbField)
      })
    })
    // either sucessfully insert corn or corn exists and we'll be turned away
    // if sucessful we learn what the id is of the crop
    // if turned away, do a find on crop database to find corn which could return id of
    // 
    // db.Field.create(req.body)
    // .then(function(dbField) {
    //   res.json(dbField);
    // })
    .catch(err => res.json(err));
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
      })
      .catch(err => res.json(err));
  });

  app.delete("/api/fields/:id", function(req, res) {
    db.Field.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbField) {
      res.json(dbField);
    })
    .catch(err => res.json(err));
  });

};
