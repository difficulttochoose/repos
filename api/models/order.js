'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    status: DataTypes.ENUM('pending', 'done', 'cancel'),
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User)
  };
  return Order;
};