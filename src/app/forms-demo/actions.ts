"use server";

export const submitProfile = async (FormData: FormData): Promise<void> => {
  const rawName = FormData.get("name");
  const rawEmail = FormData.get("email");
  const rawAge = FormData.get("age");

  const profile = {
    name: typeof rawName === "string" ? rawName.trim() : "",
    email: typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "",
    age: typeof rawAge === "string" ? Number(rawAge) : Number.NaN,
  };

  console.log("Normalized Profile: ", profile);
};
