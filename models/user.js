module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            isUnique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        },
        coords: {
            type: DataTypes.GEOMETRY('POINT')
        },
        defaultActivity: {
            type: DataTypes.STRING,
            defaultValue: 'mountainBike'
        }
    });

    Users.associate = (models) => {
        Users.hasMany(models.Tracks, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Users;
}