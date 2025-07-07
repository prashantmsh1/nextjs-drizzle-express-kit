import { drizzle } from "drizzle-orm/node-postgres";
import * as pg from "pg";
import "dotenv/config";

import * as schema from "./schema";
const getEnvVariable = (name: string) => {
    const value = process.env[name];
    if (value == null) throw new Error(`environment variable ${name} not found`);
    return value;
};

export const pgClient = new pg.Client({
    connectionString: getEnvVariable("DATABASE_URL"),
    ssl: {
        rejectUnauthorized: false,
    },
});

export const db = drizzle(pgClient, { schema });
