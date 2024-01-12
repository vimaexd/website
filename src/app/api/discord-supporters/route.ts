import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import { NextResponse } from 'next/server'


const _dc = axios.create({
  baseURL: "https://discord.com/api/v10",
  headers: {
    "User-Agent": "maewtf-website (mae.wtf, 8.0.0)",
    "Authorization": `Bot ${process.env.DISCORD_TOKEN}`
  }
})
const dc = setupCache(_dc);

export async function GET() {
  const members = await dc.get(`/guilds/${process.env.DISCORD_GUILDID}/members?limit=1000`)
  const boosters = members.data.filter((member: any) => member.premium_since != null)
  return NextResponse.json({
    list: boosters.map((b: any) => (
      {
        username: b.user.username,
        pfp: (b.user.avatar) ? `https://cdn.discordapp.com/avatars/${b.user.id}/${b.user.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/0.png`
      }
    ))
  })
}