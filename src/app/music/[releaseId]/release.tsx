import Link from 'next/link'
import React from 'react'

export interface IRelease {
  slug: string;
  title: string;
  type: string;
  year: number;
  tracks: string[];
  links: {[service: string]: string;}
  artist_comment: string;
  album_art: string;
}
// {release}: {release: IRelease}
export default function Release() {
  return (
    <div>
      <div className='w-full h-full blur-3xl absolute top-0 left-0 z-10'>
        <img src="/assets/tmp/cover.png" className='w-full h-full object-cover object-center'/>
      </div>
      <div className="z-10 sticky flex justify-center">
        <div className='w-[1024px] space-y-8'>
          <div className='flex items-center gap-8'>
            <img src="/assets/tmp/cover.png" width="128px" className='rounded-lg shadow-xl'></img>
            <div className='mb-auto'>
              <h1 className='text-7xl font-bold -mt-5'>moon</h1>
              <h2>EP • 4 tracks • 2023</h2>
              <div className='flex gap-2'>
                <Link href={"https://etstringy.bandcamp.com"}>
                  <h3 className='bg-str-cotton text-center w-32 mt-5 hover:bg-purple-500 transition-all py-1 px-4 rounded-md active:scale-90'>
                    Buy
                  </h3>
                </Link>
              </div>
            </div>
            <div className='flex flex-col gap-2 ml-auto'>
              <Link href={"https://etstringy.bandcamp.com"}>
                  <h3 className='flex outline-1 outline-double text-center hover:bg-white hover:text-black transition-all py-1 px-4 rounded-md active:scale-90'>
                    <i className='bx bxl-youtube bx-sm mr-2'></i>
                    Watch on YouTube
                  </h3>
              </Link>
              <Link href={"https://etstringy.bandcamp.com"}>
                  <h3 className='flex outline-1 outline-double text-center hover:bg-white hover:text-black transition-all py-1 px-4 rounded-md active:scale-90'>
                    <i className='bx bxl-spotify bx-sm mr-2'></i>
                    Stream on Spotify
                  </h3>
              </Link>
              <Link href={"https://etstringy.bandcamp.com"}>
                  <h3 className='flex outline-1 outline-double text-center hover:bg-white hover:text-black transition-all py-1 px-4 rounded-md active:scale-90'>
                    <i className='bx bxl-apple bx-sm mr-2'></i>
                    Stream on Apple Music
                  </h3>
              </Link>
            </div>
          </div>
          <div>
              <h3 className='text-lg font-bold'>mae's comment</h3>
              <p className='italic'>
                "meep meep meep"
              </p>
          </div>

          <table className='w-full'>
            <thead>
              <th>Track</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Length</th>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>pixel palace</td>
                <td>Lo-fi</td>
                <td>2:20</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>glass hypnotist</td>
                <td>Lo-fi</td>
                <td>2:06</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>strawberry factory</td>
                <td>Electronic</td>
                <td>3:30</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>sleepyhead</td>
                <td>Lo-fi</td>
                <td>1:45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
