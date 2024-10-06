import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { NextResponse } from "next/server";

// a Very Small Bird told me these endpoints
// dm me for documentation (i'll post it soon)
const bandcampEndpoint = "https://bandcamp.com/api";
const bandcampBandIdStringy = "2432943491";
const bandcampBandIdVimae = "3514778791";

const _bc = axios.create({
    baseURL: bandcampEndpoint,
    headers: {
        // im totally a phone bandcamp please believe me please
        // i swear im a phone
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; Phone Build/1)",
        "X-Requested-With": "com.bandcamp.android",
    },
});
const bc = setupCache(_bc as any);

export async function GET() {
    const albumKeys: string[] = [];

    const stringyBand = await bc.get(
        `/mobile/25/band_details?band_id=${bandcampBandIdStringy}`
    );

    const vimaeBand = await bc.get(
        `/mobile/25/band_details?band_id=${bandcampBandIdVimae}`
    );

    albumKeys.concat(stringyBand.data.discography.map(
        (item: any) => item.item_type[0] + item.item_id
    ))

    albumKeys.concat(vimaeBand.data.discography.map(
        (item: any) => item.item_type[0] + item.item_id
    ))

    const collectedBy = await bc.post(
        `/mobile/25/collected_by`,
        JSON.stringify({
            tralbum_keys: stringyBand.data.discography.map(
                (item: any) => item.item_type[0] + item.item_id
            ),
        })
    );

    let supporters = Object.values(collectedBy.data.collected_by).reduce(
        (prev: any[], cur: any) => {
            let all = cur.reviews.concat(cur.thumbs);
            all = all.filter(
                (item: any) =>
                    prev.find((pr) => pr.fan_id == item.fan_id) == undefined
            );
            return prev.concat(all);
        },
        []
    );

    return NextResponse.json({
        list: supporters,
    });
}
