export type Role = "visitor" | "admin";

export type TokenPayload = {
  userId: string;
  role: Role;
};
