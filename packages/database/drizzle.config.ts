import dotenv from "dotenv";
dotenv.config();

import type { Config } from "drizzle-kit";

const getEnvVariable = (name: string) => {
    const value = process.env[name];
    if (value == null) throw new Error(`environment variable ${name} not found`);
    return value;
};

export default {
    schema: "./src/schema.ts",

    dialect: "postgresql",
    dbCredentials: {
        url: getEnvVariable("DATABASE_URL"),
        ssl: {
            rejectUnauthorized: false,
        },
    },
} satisfies Config;
