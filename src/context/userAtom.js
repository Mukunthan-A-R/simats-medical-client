import { atom } from "recoil";

export const userLoginAtom = atom({
  key: "userAtom",
  default: {
    userId: null,
    token: null,
    lastLogin: null,
  },
});

export const userData = atom({
  key: "userData",
  default: {
    address: null,
    blood_group: null,
    dob: null,
    email: null,
    gender: null,
    name: null,
    phone_no: null,
    user_id: null,
  },
});
