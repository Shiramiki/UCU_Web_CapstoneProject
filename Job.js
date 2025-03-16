// job model (models/job)

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Job = sequelize.define('Job', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    company: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    salary: { type: DataTypes.FLOAT },
    postedBy: { type: DataTypes.INTEGER, allowNull: false }
});

Job.belongsTo(User, { foreignKey: 'postedBy', as: 'employer' });

module.exports = Job;
