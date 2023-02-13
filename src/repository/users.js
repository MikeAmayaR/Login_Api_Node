'use strict';
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users',{
        UserId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Mail: {
            allowNull: true,
            type: DataTypes.STRING
        },
        Password: {
            allowNull: true,
            type: DataTypes.STRING
        },
        Role: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
    },{
        freezeTableName: true,
        tableName: "Users"
    });
    return Users;
}
