'use strict';

module.exports = (sequelize, DataTypes) => {
  var Newsletter = sequelize.define('Newsletter', {
    id:{
      type: DataTypes.UUID,
      validate: {
        isUUID: 4,
      },
      primaryKey: true,
      allowNull: false,
      defaultValue:DataTypes.UUIDV4,
      unique: true
    },
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        //associations and relations here
      }
    }
  });
  return Newsletter;
};
