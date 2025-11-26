"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("teams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      flag_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      coach: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      group: {
        type: Sequelize.STRING, 
        allowNull: true,
      },
      userId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'users',key:'id'},
           onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    
      

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("teams");
  },
};
