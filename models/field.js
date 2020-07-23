module.exports = function(sequelize, DataTypes) {
    const Field = sequelize.define("Field", {
    //   animalType: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     notEmpty: true,
    //     validate: {
    //       len: [1]
    //     }
    //   }
    });
  Field.associate = function(models) {
    // Associating Field with Animal & Crop
    // When an Field is deleted, also delete any associated Animal & Crop
    Field.hasMany(models.Animal, {
        onDelete: 'RESTRICT',
        onUpdate: 'SET NULL'
    });
  };
    return Field;
};
  
  
  
  
  
  
  


