export interface AppUser {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface Session {
  user: AppUser;
  expiresAt: string;
}
