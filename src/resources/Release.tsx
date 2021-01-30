import dayjs from 'dayjs';

export default class Release {
    title: string;
    description: string;
    files: {
        artwork: string;
        audio: string;
    }
    releaseDate: number;
    releaseType: string;
    tracks: Array<string>;
    youtubeUrl?: string;

    constructor(
        title: string, 
        description: string,
        files: { artwork: string; audio: string;}, 
        releaseDate: number, 
        releaseType: string, 
        tracks: Array<string>,
        youtubeUrl?: string
    ){
        this.title = title;
        this.description = description;
        this.files = files;
        this.releaseDate = releaseDate;
        this.releaseType = releaseType;
        this.tracks = tracks;
        if(youtubeUrl) this.youtubeUrl = youtubeUrl;
    }

    getDayJs(){
       return dayjs.unix(this.releaseDate)
    }
}