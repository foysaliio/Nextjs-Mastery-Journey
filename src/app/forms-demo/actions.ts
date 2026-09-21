"use server";

export const submitProfile = async (FormData: FormData): Promise<void> => {
  const name = FormData.get("name");
  const email = FormData.get("email");

  const allEntries = Object.fromEntries(FormData.entries());

  console.log("Name :", name);
  console.log("Email :", email);
  console.log("All Form Data :", allEntries);
};
