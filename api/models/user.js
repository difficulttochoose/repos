'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    role: DataTypes.ENUM(['admin', 'user']),
    activeStatus: DataTypes.BOOLEAN,
    token: DataTypes.STRING,
  }, {
    scopes: {
      hidePersonalData: {
        attributes: {
          exclude: ['password','token','createdAt','updatedAt']
        }
      },
      activeUsers: {
          where: { activeStatus: true }
      },
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Order);
  };
  return User;
};
