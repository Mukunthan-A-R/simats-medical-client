import { atom } from "recoil";

export const userLoginAtom = atom({
  key: "userAtom",
  default: {
    userId: null,
    token: null,
    lastLogin: null,
  },
});
