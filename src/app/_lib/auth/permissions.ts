import { AppUser } from "./auth.types";

export const canAccessAdminArea = (user: AppUser | null): boolean => {
  return user?.role === "admin";
};
