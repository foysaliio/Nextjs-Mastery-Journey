export interface ExternalUser {
  id: number;
  name: string;
  email: string;
}

export const getExternalUser = async (id: number): Promise<ExternalUser> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch external user");
  }

  const user: ExternalUser = await response.json();

  return user;
};
