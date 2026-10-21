import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";

import { authDatabase } from "./auth-database";

export const auth = betterAuth({
  database: authDatabase,

  emailAndPassword: {
    enabled: true,
  },

  plugins: [
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
});
