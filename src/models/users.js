'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // associations here
    }
  }

  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('USER', 'ADMIN'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'Users',
    }
  );

  return Users;
};
