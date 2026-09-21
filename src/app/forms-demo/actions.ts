"use server";

export const submitProfile = async (FormData: FormData): Promise<void> => {
  const name = FormData.get("name");
  const email = FormData.get("email");

  console.log({
    name,
    email,
  });
};
