require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_ROOT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    underscoredAll: true,
    createAt: 'created_at',
    updateAt: 'updated_at'
  }
}
