import express from "express";
import secrets from "./secrets/admin_secret.js";
import pool from "./database/connection.js";
import signup from "./routes/signup.js";
import login from "./routes/login.js";


const app = express();
app.use(express.json());

app.use("/signup", signup);
app.use("/login", login);



app.listen(secrets.port || 8080, () => {
  console.log(`server is running on port ${secrets.port || 8080}`);
});
