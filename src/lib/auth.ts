import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";
import { sendEmail } from "./email";

import { authDatabase } from "./auth-database";

export const auth = betterAuth({
  database: authDatabase,

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,

    revokeSessionsOnPasswordReset: true,
    resetPasswordTokenExpiresIn: 60 * 60,

    sendResetPassword: async ({ user, url }) => {
      void sendEmail({
        to: user.email,
        subject: "Reset your password",
        text: `To reset your password, open this link: ${url}`,
      }).catch((error: unknown) => {
        console.error("Password reset email failed:", error);
      });
    },

    customSyntheticUser: ({ coreFields, additionalFields, id }) => ({
      ...coreFields,
      role: "user",
      banned: false,
      banReason: null,
      banExpires: null,
      ...additionalFields,
      id,
    }),
  },

  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true,

    sendVerificationEmail: async ({ user, url }) => {
      void sendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: `To verify your email, open this link: ${url}`,
      }).catch((error: unknown) => {
        console.error("Verification email failed:", error);
      });
    },
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },

  account: {
    accountLinking: {
      enabled: true,
      disableImplicitLinking: true,
    },
  },

  plugins: [
    admin({
      defaultRole: "user",
      adminRoles: ["admin"],
    }),
  ],
});
