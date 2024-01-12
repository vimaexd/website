import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { NextResponse } from 'next/server'

const throneUserId = "twitch:186845504"

const _throne = axios.create({
  baseURL: "https://us-central1-onlywish-9d17b.cloudfunctions.net",
  headers: {
    "User-Agent": "maewtf-website (mae.wtf, 8.0.0)"
  }
})
const throne = setupCache(_throne);

export async function GET() {
  const res = await throne.get(`/api-order/v1/order/public/received/wishlist/${throneUserId}`)
  const boughtGifts = res.data;
  return NextResponse.json({
    list: boughtGifts
      .filter((gift:any) => (gift.customizations.customers[0].customerUsername != null))
      .map((gift: any) => ({
        username: gift.customizations.customers[0].customerUsername,
        pfp: gift.customizations.customers[0].customerImage
      }))
  })
}