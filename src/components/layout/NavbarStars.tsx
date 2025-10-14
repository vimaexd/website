"use client";
import Image from "next/legacy/image";
import _ from 'lodash';
import { Ref, useEffect, useState } from 'react';

export default function NavbarStars({barWidth, barHeight}: {barWidth: number; barHeight: number;}) {
    const [stars, setStars] = useState<number[][]>([]);
    const [starsDone, setStarsDone] = useState(false);
    
    const _generateStars = () => {
        console.log("✨")
        const width = barWidth;
        const height = barHeight;

        let newStars = []
        for(let i = 0; i < 8; i++) {
            let star = Math.floor(Math.random() * (4));
            let randX = Math.floor(Math.random() * (width - 16)) + 0;
            let randY = Math.floor(Math.random() * (height - 16));
            newStars.push([randX, randY, star])
        }
        setStarsDone(true)
        setStars(stars.concat(newStars))
    }

    const generateStars = _.debounce(() => {
        _generateStars()
    }, 50)

    useEffect(() => {
        console.log("star effect fired")
        if(!starsDone) {
            window.addEventListener('resize', () => {
                generateStars()
            })
        }
        generateStars()
    }, [barWidth, barHeight])

    return (
        <div className="absolute top-0 left-0 lg:w-[1024px] w-full opacity-60 z-0 text-clip" aria-hidden={true}>
            {
              stars.map((star, i) => (
                <Image 
                src={`/assets/stars/star_${star[2]}.png`}
                width={16} 
                height={16} 
                alt="star" 
                className={'absolute ' + `anim_star`} 
                style={{top: star[1], left: star[0], imageRendering: "pixelated"}}
                key={"star_" + i}/>
              ))
            }
        </div>
    )
}