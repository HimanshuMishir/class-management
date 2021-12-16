import secrets from "../secrets/admin_secret.js";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: secrets.database_url,
});

export default pool;