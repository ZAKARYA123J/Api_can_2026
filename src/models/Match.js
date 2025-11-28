import { Model, DataTypes } from 'sequelize';


export default (sequelize) => {
    class Match extends Model {
        static associate(models) {

            // Match belongs to Home Team
            Match.belongsTo(models.Team, {
                as: 'home_team',
                foreignKey: 'home_team_id'
            });
            // Match belongs to Away Team
            Match.belongsTo(models.Team, {
                as: 'away_team',
                foreignKey: 'away_team_id'
            });

            //match can create by admin user
             Match.belongsTo(models.User, {
                as: 'created_by',
                 foreignKey: 'created_by_user_id'
             });
        }
    }
    // Initialize Match model
      Match.init(
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },

          home_team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },

          away_team_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },

          match_date: {
            type: DataTypes.DATE,
            allowNull: false,
          },

          stadium: {
            type: DataTypes.STRING,
          },

          score_home: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },

          score_away: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },

          created_by_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        },
        {
          sequelize,
          modelName: "Match",
          tableName: "matches",
          timestamps: true,
          underscored: true,
          createdAt: "created_at",
          updatedAt: "updated_at",
        }
      );
  return Match
}