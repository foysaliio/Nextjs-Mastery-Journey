export interface Profile {
  id: number;
  name: string;
  email: string;
  age: number;
}

const profiles: Profile[] = [];

export function createProfile(profile: Omit<Profile, "id">): Profile {
  const newProfile: Profile = {
    id: Date.now(),
    ...profile,
  };

  profiles.push(newProfile);

  return newProfile;
}

export function getProfiles(): Profile[] {
  return profiles;
}
