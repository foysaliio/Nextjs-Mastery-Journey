import { betterAuth } from "better-auth";
import { authDatabase } from "./auth-database";

export const auth = betterAuth({
  database: authDatabase,

  emailAndPassword: {
    enabled: true,
  },
});
