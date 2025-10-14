'use client'
import axios from 'axios'
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import _supporters from '@mae/data/otherSupporters.json';

export default function BandcampSupporters() {
  const supporters = (_supporters as {[a: string]: string;})
  return (
    <div className="space-y-4">
      <div className="flex justify-center gap-2 bg-ctp-surface0 rounded-lg py-2">
        direct / other
      </div>
      <div className="grid auto-cols-max grid-cols-2 sm:grid-cols-4 gap-2">
        {Object.keys(supporters).map((username) => (
          <div key={username} className="flex gap-2 text-xs items-center">
            <img
              src={supporters[username]}
              height={32}
              width={32}
              alt="Profile picture"
              className="rounded-full"
            ></img>
            {username}
          </div>
        ))}
      </div>
    </div>
  );
}
