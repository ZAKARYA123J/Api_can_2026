import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Player extends Model {
    static associate(models) {
      // Player belongs to ONE team
      Player.belongsTo(models.Team, {
        as: "team",
        foreignKey: "team_id",
      });

      //  Player created by a user (admin or coach)
      Player.belongsTo(models.User, {
        as: "createdBy",
        foreignKey: "created_by",
      });
    }
  }

  Player.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      position: {
        type: DataTypes.ENUM("goalkeeper", "defender", "midfielder", "forward"),
        allowNull: false,
      },

      jersey_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Player",
      tableName: "players",
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Player;
};
