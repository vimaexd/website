'use client';
import { useEffect, useRef, useState } from 'react'
import * as PIXI from 'pixi.js';

export default function MaesweeperGame() {
  const wrapper = useRef<HTMLDivElement>(null);
  const [initialized, setInit] = useState(false);

  let app: PIXI.Application;

  /*
    Variables
  */
  let flags = [];
  let mines: number[][] = [];
  const tiles: {[a: string]: PIXI.Graphics} = {};

  /*
    Static/config
  */
  const dev = true;
  const bombFills: {[a: number]: number} = {
    1: 0x668fff, // light blue
    2: 0x50fad8, // mint
    3: 0xFA93FF, // str-yarn
    4: 0x8548F5  // str-cotton
  }


  const clearNearbyEmpties = (pos: number[]) => {
    for (let x = -1; x < 2; x++) { 
      for (let y = -1; y < 2; y++) { 
        const checking = [pos[0] + x, pos[1] + y]
        if(checking == pos) continue;

        if(calculateBombProximity([x,y]) < 1) {
          app.stage.removeChild(tiles[x*y]);
          delete tiles[x*y];
          clearNearbyEmpties([x,y])
        }
      }
    }
  } 

  /*
    Position <-> Key serialization
    i'm doing this because js dosent play well with arrays as keys
  */
  // const posToKey = (pos: number[]) => (`${pos[0]}:${pos[1]}`);
  // const keyToPos = (key: string) => ([key.split(":")[0], key.split(":")[1]]);
  
  /*
    Bombs
  */
  const genRandomBomb = () => {
    while(true) {
      const x = Math.floor(Math.random() * 16);
      const y = Math.floor(Math.random() * 16);

      if(mines.includes([x,y]))
        continue

      return [x,y]
    }
  }

  const isBomb = (pos: number[]) => mines.find((v) => (v[0] == pos[0] && v[1] == pos[1]))

  const calculateBombProximity = (pos: number[]) => {
    let num = 0;
    for (let x = -1; x < 2; x++) { 
      for (let y = -1; y < 2; y++) { 
        const checking = [pos[0] + x, pos[1] + y]
        if(checking == pos) continue;

        if(isBomb(checking))
          num++
      }
    }
    return num;
  }

  /*
    Game
  */ 
  const initializeGame = async () => {
    flags = [0]
    setInit(true);
    app = new PIXI.Application({
      width: 288,
      height: 288,
      background: 0x0
    });
    wrapper.current?.appendChild(app.view as any);

    let move = 0;

    // place bombs
    for(let b = 0; b < 32; b++) {
      mines.push(genRandomBomb());
    }
    console.log(mines)
    
    for(let y = 0; y < 16; y++) {
      for(let x = 0; x < 16; x++) {
        const key = `${x}:${y}`;
        const obj = new PIXI.Graphics();

        if(dev && isBomb([x,y])) {
          obj.beginFill(0x875050);
        } else {
          obj.beginFill(0x7d7d7d);
        }

        const screenX = (16*x)+(x*2)
        const screenY = (16*y)+(y*2)

        const decoWidth = 2;

        obj.drawRect(screenX, screenY, 16, 16);

        // dark deco
        obj.beginFill(0x454545);
        obj.drawRect(screenX + 16 - decoWidth, screenY, decoWidth, 16)
        obj.drawRect(screenX, screenY + 16 - decoWidth, 16, decoWidth)

        // light deco
        obj.beginFill(0xb3b3b3);
        obj.drawRect(screenX, screenY, 16, decoWidth)
        obj.drawRect(screenX, screenY, decoWidth, 16)

        obj.eventMode = 'dynamic'
        obj.on('pointerdown', () => {
          console.log("click", x, y)

          if(isBomb([x,y])) {

            // first move should NEVER be a bomb
            if(move == 0) {
              mines = mines.filter((v) => v[0] != x && v[1] != y)
              mines.push(genRandomBomb());
            } else {
              console.log("you blew up")
            }

            // TODO: handle explosion
          } else {
            const prox = calculateBombProximity([x,y])
            console.log("prox", prox)
            if(prox > 0) {
              const text1 = new PIXI.Text(prox, new PIXI.TextStyle({ fontFamily: 'JetBrains Mono', fontWeight: '600', fontSize: 16, fill: bombFills[prox] }));
              text1.anchor.set(0.5) 
              text1.x = screenX + (16 / 2);
              text1.y = screenY + (16 / 2);
              app.stage.addChild(text1);
            } else {
              clearNearbyEmpties([x,y])
            }
          }
          

          app.stage.removeChild(obj);
          delete tiles[key];
          move++;
          console.log("move ", move);
        });

        tiles[key] = obj;
        app.stage.addChild(obj);
      }
    }
  }

  useEffect(() => {
    if (wrapper.current && !initialized) {
      initializeGame();
    }
  }, [wrapper, initializeGame, initialized])

  return <div ref={wrapper} style={{imageRendering: "pixelated"}}></div>;
}
