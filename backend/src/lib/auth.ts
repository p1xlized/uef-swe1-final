import {betterAuth} from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle"
import db from "../database"
import {admin, username} from "better-auth/plugins";
import * as schema from "../models/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db,
        {
            provider: "mysql",
            schema: schema
        }
    ),
    emailAndPassword: {
        enabled: true
    },
    plugins: [
        username({
            minUsernameLength: 5,
            maxUsernameLength: 32,
            usernameNormalization: (username) => {
                return username.toLowerCase();
            },
            usernameValidator: (username) => {
                if (username === "admin" || username === "root") {
                    return false;
                }
                return true;
            },
            displayUsernameValidator: (displayUsername) => {
                // Allow only alphanumeric characters, underscores, and hyphens
                return /^[a-zA-Z0-9_-]+$/.test(displayUsername)
            },
            validationOrder: {
                username: "post-normalization",
                displayUsername: "post-normalization",
            }
        }),
        admin()
    ]
});