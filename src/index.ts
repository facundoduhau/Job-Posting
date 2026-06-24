import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.PORT_NUMBER, () => {
  console.log("App listening in port:", process.env.PORT_NUMBER);
});
