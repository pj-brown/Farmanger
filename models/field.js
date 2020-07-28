module.exports = function(sequelize, DataTypes) {
    const Field = sequelize.define("Field", {
      fieldName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      acreage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        isNumeric: true
      },
      note: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    Field.associate = function(models) {
      // We're saying that a Field should belong to a Crop
      // A Field can't be created without an Crop due to the foreign key constraint
      Field.belongsTo(models.Crop, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  return Field;
};
  
  
  
  
  
  
  


