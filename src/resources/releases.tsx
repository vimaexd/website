import Release from './Release';
import data from './tracks.json'

let releaseArray: Array<Release> = [];

data.forEach(d => {
    releaseArray.push(new Release(
        d.name,
        d.description,
        d.assets,
        d.timestamp,
        d.type,
        d.tracks,
        (d.yt) && d.yt
    ))
})

export default releaseArray;