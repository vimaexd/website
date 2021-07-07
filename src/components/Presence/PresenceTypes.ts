import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface PresencePropTypes {
    icon: IconProp;
    presence: {
        listening_to_spotify: boolean;
        spotify: SpotifyData;
        activities: Array<Activity>
    }
}

interface Activity {
    name: string;
    type: number;
    state: string;
    details: string;
    assets: {
        small_text?: string;
        small_image?: string;
        large_text: string;
        large_image: string;
    }
    application_id: string;
}

interface SpotifyData {
    album_art_url: string;
    song: string;
    artist: string;
    album: string;
    timestamps: {
        start: number;
        end: number;
    };
    track_id: string;
}

interface Timing {
    s_elapsed: string;
    s_progress: number;
    s_left: string;
}

export type {
    SpotifyData,
    Activity,
    PresencePropTypes,
    Timing
}