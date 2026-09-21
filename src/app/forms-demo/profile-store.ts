export type Profile = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const profiles: Profile[] = [
  {
    id: 1,
    name: "Foysal",
    email: "foysal@example.com",
    age: 22,
  },
];

export function createProfile(data: Omit<Profile, "id">): Profile {
  const newProfile: Profile = {
    id: Date.now(),
    ...data,
  };

  profiles.push(newProfile);

  return newProfile;
}

export function getProfileById(id: number): Profile | undefined {
  return profiles.find((profile) => profile.id === id);
}

export function updateProfileById(
  id: number,
  data: Omit<Profile, "id">,
): Profile | undefined {
  const profile = getProfileById(id);

  if (!profile) {
    return undefined;
  }

  profile.name = data.name;
  profile.email = data.email;
  profile.age = data.age;

  return profile;
}

export function getProfiles(): Profile[] {
  return profiles;
}
