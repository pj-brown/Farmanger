"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Crops", [
        {
            cropName: "Bush Beans",
            growTime: 60,
            irrigation: false,
            season: "April 15th - May 1st"
        },
        {
            cropName: "Beets",
            growTime: 60,
            irrigation: false,
            season: "April 15th - July 1st"
        },
        {
            cropName: "Broccoli",
            growTime: 120,
            irrigation: false,
            season: "April 15th - July 1st"
        },
        {
            cropName: "Carrots",
            growTime: 75,
            irrigation: false,
            season: "April 15th - June 15th"
        },
        {
            cropName: "Cauliflower",
            growTime: 60,
            irrigation: false,
            season: "April 15th - June 1st"
        },
        {
            cropName: "Kale",
            growTime: 60,
            irrigation: false,
            season: "May 1st - June 15th"
        },
        {
            cropName: "Lettuce",
            growTime: 30,
            irrigation: false,
            season: "April 15th - May 1st"
        },
        {
            cropName: "Onions",
            growTime: 25,
            irrigation: false,
            season: "April 15th"
        },
        {
            cropName: "Peas",
            growTime: 65,
            irrigation: false,
            season: "April 10th - May 15th"
        },
        {
            cropName: "Potatoes",
            growTime: 95,
            irrigation: false,
            season: "April 15th - June 1st"
        },
        {
            cropName: "Sweet Corn",
            growTime: 60,
            irrigation: false,
            season: "May 10th - July 1st"
        },
        {
            cropName: "Tomatoes",
            growTime: 45,
            irrigation: false,
            season: "May 15th - June 1st"
        }], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Crops", null, {});
    }
  };