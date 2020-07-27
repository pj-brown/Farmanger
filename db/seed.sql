use farm_db;

INSERT INTO crop 
(cropName, growTime, irrigation, season)
VALUES
("Bush Beans", 60, false, "April 15th - May 1st"),
("Beets", 60, false, "April 15th - July 1st"),
("Broccoli", 120, false, "April 15th - July 1st"),
("Carrots", 75, false, "April 15th - June 15th"),
("Cauliflower", 60, false, "April 15th - June 1st"),
("Kale", 60, false, "May 1st - June 15th"),
("Lettuce", 30, false, "April 15th - May 1st"),
("Onions", 25, false, "April 15th"),
("Peas", 65, false, "April 10th - May 15th"),
("Potatoes", 95, false, "April 15th - June 1st"),
("Sweet Corn", 60, false, "May 10th - July 1st"),
("Tomatoes", 45, false, "May 15th - June 1st");

INSERT INTO field (fieldName, acreage, note)
VALUES
("Northwest Field", 1, "Soil has been tilled"),
("Eastern Field", 3, "Fallow for growing season 2020");