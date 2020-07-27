var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/crops", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/crops.html"));
  });

  app.get("/fields", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/fields.html"));
  });

};
