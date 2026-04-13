import dotenv from "dotenv";
dotenv.config();
import {defineConfig} from "drizzle-kit";

export default defineConfig({
    dialect: "mysql",
    schema: "src/models/schema.ts",
    dbCredentials: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA
    }
});