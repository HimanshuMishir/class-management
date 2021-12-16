import jwt from "jsonwebtoken";
import secrets from "../secrets/admin_secret.js";

export default (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Invalid token" });
  }
  try {
    const decoded = jwt.verify(token, secrets.jwt_secret);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(403).send("Invalid token.");
  }
};
