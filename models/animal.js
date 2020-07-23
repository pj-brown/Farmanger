module.exports = function(sequelize, DataTypes) {
  const Animal = sequelize.define("Animal", {
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
    Animal.associate = function(models) {
    // We're saying that a Animal should belong to an Field
    // A Animal can't be created without an Field due to the foreign key constraint
    Animal.belongsTo(models.Field, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Animal;
};






