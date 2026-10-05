import Database from "better-sqlite3";

export const authDatabase = new Database("auth.db");

authDatabase.pragma("journal_mode = WAL");
