import { atom } from "recoil";
import { localStorageEffect } from "./effects/localStorageEffect";

export enum DiscographyView {
  GRIDLIST = 0,
  ROW = 1
}

export enum DiscographyGroup {
  NONE = "none",
  YEAR = "year",
  TYPE = "type"
}

export const discography = atom<{
  group: DiscographyGroup;
  view: DiscographyView;
}>({
  key: "@mae/discography",
  default: {
    group: DiscographyGroup.YEAR,
    view: DiscographyView.GRIDLIST
  },
  effects: [
    localStorageEffect('mae.music.discography')
  ]
})