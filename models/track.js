module.exports = (sequelize, DataTypes) => {
    const Tracks = sequelize.define('Tracks', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        activityType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        actualDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        tagList: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        GeoJSON: {
            type: DataTypes.GEOMETRY,
            allowNull: false
        }
    });

    Tracks.associate = (models) => {
        Tracks.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Tracks;
}