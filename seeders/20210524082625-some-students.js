"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          firstName: "Hermione",
          lastName: "Granger",
          gender: "f",
          playsQuidditch: false,
          age: 16,
          houseId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Harry",
          lastName: "Potter",
          gender: "m",
          playsQuidditch: true,
          age: 16,
          houseId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ron",
          lastName: "Weasley",
          gender: "m",
          playsQuidditch: true,
          age: 16,
          houseId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Draco",
          lastName: "Malfoy",
          gender: "m",
          playsQuidditch: true,
          age: 16,
          houseId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Luna",
          lastName: "Lovegood",
          gender: "f",
          playsQuidditch: false,
          age: 16,
          houseId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ginny",
          lastName: "Weasley",
          gender: "f",
          playsQuidditch: true,
          age: 15,
          houseId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Cedric",
          lastName: "Diggory",
          gender: "m",
          playsQuidditch: true,
          age: 18,
          houseId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Ana",
          lastName: "Abbot",
          gender: "f",
          playsQuidditch: false,
          age: 16,
          houseId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Pansy",
          lastName: "Parkinson",
          gender: "f",
          playsQuidditch: false,
          age: 16,
          houseId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Padma",
          lastName: "Patil",
          gender: "f",
          playsQuidditch: false,
          age: 16,
          houseId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("students", null, {});
  },
};
