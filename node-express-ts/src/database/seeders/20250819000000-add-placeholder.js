"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const Placeholders = [
      { id: 1, name: "kai", secret: "hate_kaita" },
      { id: 2, name: "kaita", secret: "like_kai" },
      { id: 3, name: "kaiei", secret: "anxiety" },
    ];
    await queryInterface.bulkInsert("Placeholder", Placeholders, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Placeholder", {
      id: [1, 2, 3],
    });
  },
};
