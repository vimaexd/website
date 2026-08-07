"use client";
import Image from "next/image";
import _ from "lodash";
import { useEffect, useState } from "react";
import { animate, stagger, waapi } from "animejs";

export default function NavbarStars({
    barWidth,
    barHeight,
}: {
    barWidth: number;
    barHeight: number;
}) {
    const [stars, setStars] = useState<number[][]>([]);
    const [starsDone, setStarsDone] = useState(false);

    const _generateStars = () => {
        console.log("✨");
        const width = barWidth;
        const height = barHeight;

        const newStars = [];
        for (let i = 0; i < 8; i++) {
            const star = Math.floor(Math.random() * 4);
            const randX = Math.floor(Math.random() * (width - 16)) + 0;
            const randY = Math.floor(Math.random() * (height - 16));
            newStars.push([randX, randY, star]);
        }
        setStarsDone(true);
        setStars(newStars);
    };

    const generateStars = _.debounce(() => {
        _generateStars();
    }, 50);

    useEffect(() => {
        if (!starsDone) {
            window.addEventListener("resize", () => {
                generateStars();
            });
        }
        generateStars();
    }, [barWidth, barHeight]);

    useEffect(() => {
        waapi.animate('.anim_star', {
            opacity: [0, 1],
            duration: 1400,
            ease: "outExpo",
            delay: stagger(100)
        });
    }, [stars])

    return (
        <div
            className="absolute top-0 left-0 lg:w-[1024px] w-full opacity-60 z-0 text-clip"
            aria-hidden={true}
        >
            {stars.map((star, i) => (
                <Image
                    src={`/assets/stars/star_${star[2]}.png`}
                    width={16}
                    height={16}
                    alt="star"
                    className={"absolute " + `anim_star`}
                    key={"star_" + i}
                    style={{
                        top: star[1] || 16,
                        left: star[0] || 16,
                        imageRendering: "pixelated",
                        maxWidth: "100%",
                        height: "auto",
                        animationDuration: (Math.floor(Math.random() * 1000) + 2500).toString() + "ms"
                    }}
                />
            ))}
        </div>
    );
}
