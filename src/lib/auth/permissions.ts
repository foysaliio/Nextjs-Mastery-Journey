export interface AuthorizableUser {
  id: string;
  role?: string | null;
}

export interface ResourceOwner {
  userId: string;
}

export const isAdmin = (user: AuthorizableUser): boolean => {
  return user.role?.split(",").includes("admin") ?? false;
};

export const isOwner = (
  user: AuthorizableUser,
  resource: ResourceOwner,
): boolean => {
  return user.id === resource.userId;
};

export const canEditResource = (
  user: AuthorizableUser,
  resource: ResourceOwner,
): boolean => {
  return isAdmin(user) || isOwner(user, resource);
};

export const canDeleteResource = (
  user: AuthorizableUser,
  resource: ResourceOwner,
): boolean => {
  return isAdmin(user) || isOwner(user, resource);
};
