'use strict';

const faker = require('faker');

const admin = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: 'admin@test.com',
  password: '123456789',
  age: 29,
  role: 'admin',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const users = [...new Array(100)].map(() => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: '123456789',
    age: 29,
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [admin, ...users], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
