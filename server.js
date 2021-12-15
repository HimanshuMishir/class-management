import express from "express";
import secrets from "./secrets/admin_secret.js";



const app = express();





app.listen(secrets.port || 8080, () => {
    console.log(`server is running on port ${secrets.port || 8080}`);
  });