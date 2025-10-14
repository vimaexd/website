import { atomWithStorage } from 'jotai/utils'

export enum DiscographyView {
  GRIDLIST = 0,
  ROW = 1
}

export enum DiscographyGroup {
  NONE = "none",
  YEAR = "year",
  TYPE = "type"
}

export const discography = atomWithStorage<{
  group: DiscographyGroup;
  view: DiscographyView;
}>("mae.music.discography", {
  group: DiscographyGroup.YEAR,
  view: DiscographyView.GRIDLIST
})