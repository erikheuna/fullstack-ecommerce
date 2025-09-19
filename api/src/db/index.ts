import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// You can specify any property from the node-postgres connection options
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle(pool);


