import { NextRequest } from "next/server";

export interface AuthUser {
  id: number;
  name: string;
  role: "user" | "admin";
}

export const authenticateRequest = (request: NextRequest): AuthUser | null => {
  const authorization = request.headers.get("authorization");

  if (!authorization) {
    return null;
  }

  const token = authorization.replace("Bearer ", "");

  if (token === process.env.ADMIN_API_TOKEN) {
    return {
      id: 1,
      name: "Admin User",
      role: "admin",
    };
  }

  if (token === process.env.USER_API_TOKEN) {
    return {
      id: 2,
      name: "Regular User",
      role: "user",
    };
  }

  return null;
};
