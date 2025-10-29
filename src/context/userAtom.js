import { atom } from "recoil";

export const userLoginAtom = atom({
  key: "userAtom",
  default: {
    user: null,
    token: null,
    lastLogin: null,
  },
});
