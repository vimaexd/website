import { IBaseRelease, IResolvedRelease, ITrack, IUnresolvedRelease } from "./types";

/**
 * Resolves the tracks of unresolved releases
 * @method
 * @param unresolved The unresolved release
 * @param tracks The array of tracks from the discography
 * @returns A resolved release
 */
export const resolveRelease = (unresolved: IUnresolvedRelease, tracks: ITrack[] ): IResolvedRelease => {

  // Map release tracks to track data
  const resolvedTracks = unresolved.tracks.map((id) => {

    // slicing to account for the "track:" prefix on the id 
    const track = tracks.find(t => (t.id == (id as string).slice(6)))

    // fallback incase the track cant be found
    if(!track) return {
      id: (id as string),
      name: `Unknown Track (${id}}`,
      genre: "Unknowncore",
      length: "0000:0000:0000",
      artists: ["unkn0wn"]
    }
    return track;
  })

  const resolved: IResolvedRelease = { ...unresolved, tracks: resolvedTracks }
  return resolved;
}

/**
 * @deprecated
 * @param releases IUnresolvedRelease[]
 * @returns {[year: string]: IUnresolvedRelease[]}
 */
export const groupReleasesByYear = (releases: IUnresolvedRelease[]): {[year: string]: IUnresolvedRelease[]} => {
  let groups: {[year: string]: IUnresolvedRelease[]} = {}

  for(let i = 0; i < releases.length; i++) {
    let release = releases[i];
    if(!groups.hasOwnProperty(release.year))
      groups[release.year] = [];

    groups[release.year].push(release);
  }
  
  return groups;
}

export const groupReleasesByKey = (releases: IUnresolvedRelease[], key: string): {[year: string]: IUnresolvedRelease[]} => {
  let groups: {[title: string]: IUnresolvedRelease[]} = {}

  for(let i = 0; i < releases.length; i++) {
    let release = releases[i];
    if(!groups.hasOwnProperty((release as any)[key]))
      groups[(release as any)[key]] = [];

    groups[(release as any)[key]].push(release);
  }
  
  return groups;
}