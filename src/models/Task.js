const {DataTypes} = require("sequelize");

const db = require("../database/db");

const Task = db.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    required: true,
  },
});

module.exports = Task;
