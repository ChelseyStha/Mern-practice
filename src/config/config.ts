import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "chelsey@123",
  database: "chelsey_db",
  logging: true,
});

export default sequelize;
