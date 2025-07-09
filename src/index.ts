import { roleRouter } from "@routes/role.routes";
import { userRouter } from "@routes/user.router";
import sequelize from "config/config";
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/role", roleRouter);

sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => {
    console.log("htttp://localhost:5000");
  });
});