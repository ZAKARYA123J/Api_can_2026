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

      // Foreign key to users table (admin)

        user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
<<<<<<< HEAD
        type: Sequelize.STRING,
=======
        type: Sequelize.STRING, 
>>>>>>> ba8e92fb4d6fd1cb1de8a61765f225c93160dc14
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
<<<<<<< HEAD
=======
    
      

>>>>>>> ba8e92fb4d6fd1cb1de8a61765f225c93160dc14
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("teams");
  },
};
