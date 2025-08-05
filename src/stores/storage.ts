import { type StateStorage } from "zustand/middleware";

const cookieStorage: StateStorage = {
  getItem(key) {
    return (
      document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith(key))
        ?.split("=")[1] ?? null
    );
  },
  setItem(key, value) {
    document.cookie = `${key}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  },
  removeItem(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  },
};

export { cookieStorage };
