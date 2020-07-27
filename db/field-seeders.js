"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("Field", [
        {
            fieldName: "Northwest field",
            acreage: 2,
            note: "Soil has been tilled"
        },
        {
            fieldName: "Southwest field",
            acreage: 1,
            note: ""
        },
        {
            fieldName: "Eastern field",
            acreage: 3,
            note: ""
        }], {});
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Field", null, {});
    }
  };