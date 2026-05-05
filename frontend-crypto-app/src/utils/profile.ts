export type Profile = {
  name?: string;
  email?: string;
};

const STORAGE_KEY = "coinbaseCloneProfile";

export const getProfile = (): Profile => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Profile) : {};
  } catch {
    return {};
  }
};

export const setProfile = (profile: Profile) => {
  if (typeof window === "undefined") return;
  const current = getProfile();
  const next = { ...current, ...profile };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
};

export const clearProfile = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
};

export const getProfileInitial = () => {
  const { name, email } = getProfile();
  const seed = (name ?? email ?? "").trim();
  return seed ? seed[0].toUpperCase() : "C";
};
