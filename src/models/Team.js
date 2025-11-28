import { Model,DataTypes } from "sequelize";  
export default (sequelize) => {

   
    class Team extends Model {
    static associate(models) {
        // team has many players
        Team.hasMany(models.Player, {
            as: 'players',
            foreignKey: 'team_id'
        });

        //team belongs to one user (admin)
        Team.belongsTo(models.User, {
            through: 'team_users',
            as:'admin',
            foreignKey: 'team_id',
            otherKey: 'user_id'
        });

        //team has many matches (as home team)
        Team.hasMany(models.Match, {
            as: 'home_matches',
            foreignKey: 'home_team_id'
        });
        
        //team has many matches (as away team)
        Team.hasMany(models.Match, {
            as: 'away_matches',
            foreignKey: 'away_team_id'
        });
    }

    
   }



    Team.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            country: {
                type: DataTypes.STRING,
                allowNull: false
            },
            flag_url: {
                type: DataTypes.STRING,
            },
            coach: {
                type: DataTypes.STRING,
            },
            group: {
                type: DataTypes.STRING,
            }
        },
        {
            sequelize,
            modelName: "Team",
            tableName: "teams",
            timestamps: true,
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );
    return Team;
};
