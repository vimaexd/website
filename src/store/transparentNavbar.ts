import { atom } from "recoil";

export const transparentNavbar = atom<boolean>({ 
  key: "@mae/transparentNavbar",
  default: false 
});