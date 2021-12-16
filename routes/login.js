import express from "express";
const router = express.router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../database/connection.js";
import secrets from "../secrets/admin_secret.js"


router.post("/", async (req, res) => {
  //Expecting email, user{instructor or student}, and password as body paramteer in json format.............
  const { email, password, user} = req.body;
  const userData = await pool.query(`SELECT  FROM ${user}s WHERE email = ${email}`);
  if (!userData) {
    return res.status(403).json({ message: "User does not exists!" });
  }
  if (
    userData.email === email &&
    (await bcrypt.compare(password, userData.password))
  ) {
    const tempUser = { email: email, firstName: userData.firstName };
    const accessToken = jwt.sign(tempUser, secrets.jwt_secret);
    return res.status(200).json({ accessToken, tempUser });
  }
  return res.status(403).json({ message: "Email or password is invalid!!" });
});
