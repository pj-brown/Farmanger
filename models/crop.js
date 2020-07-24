module.exports = function(sequelize, DataTypes) {
  const Crop = sequelize.define("Crop", {
    cropName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    growTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true
    },
   irrigation: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false
    }
      // timestamps: false
  });
  // Crops can have many fields
  Crop.associate = function(models) {
    // Associating Crop with Field
    // When an Crop is deleted, also delete any associated Field
    Crop.hasMany(models.Field, {
      onDelete: "cascade"
    });
  }
  return Crop;
};