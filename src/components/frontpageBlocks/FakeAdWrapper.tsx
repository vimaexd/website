import React from 'react'
import FakeAd from './FakeAd';

const fakeAds: { filename: string; author: string; }[] = [
  {
    filename: 'ableton.png',
    author: 'ixnoah'
  },
  {
    filename: 'shadow_wizard_money_gang.png',
    author: 'ixnoah'
  },
  {
    filename: 'arson.png',
    author: 'm4ng0ed'
  },
  {
    filename: 'divspandivspan.gif',
    author: 'ravarcheon'
  },
  {
    filename: 'ech.gif',
    author: 'catster'
  },
  {
    filename: "fragile_express.png",
    author: 'b0op3'
  }
]

/**
 * Fake Ad Wrapper
 * This wrapper is required, as the image is picked in a Server Component
 * The actual image and UI is rendered into a FakeAd child
 */
export default function FakeAdWrapper() {
  const index = Math.floor(Math.random() * fakeAds.length);
  const ad = fakeAds[index];

  console.log(ad)
  return (
    <FakeAd ad={ad}/>
  )
}
