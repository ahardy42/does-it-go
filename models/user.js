const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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

    // creating a password check method for the user
    Users.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    }

    // creating a hook to hash password
    Users.addHook('beforeCreate', user => {
        user.password = bcrypt.hashSync(user.password, 10);
    })

    return Users;
}