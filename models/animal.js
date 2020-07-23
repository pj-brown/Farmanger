module.exports = function(sequelize, DataTypes) {
  let Animal = sequelize.define("Animal", {
    animalType: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate: {
        len: [1]
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
      validate: {
        len: [1]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
      validate: {
        len: [1]
      }
    },
   vetStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Animal;
};
