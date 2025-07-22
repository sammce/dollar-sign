import { localStorageNames } from "@/constants";

function getFromLocalStorage<T = unknown>(
  key: keyof typeof localStorageNames,
): T | null {
  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

function setInLocalStorage(
  key: keyof typeof localStorageNames,
  value: unknown,
) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeFromLocalStorage(key: keyof typeof localStorageNames) {
  localStorage.removeItem(key);
}

export { getFromLocalStorage, setInLocalStorage, removeFromLocalStorage };
