import { ComponentChildren } from "@mae/misc/types";
import { useState } from "react";

export default function SideblockWrapper({children}: {children: ComponentChildren}) {
  const [shown, setShown] = useState(true);
  return (
    <div className={((shown) ? 'min-[670px]:w-72' : '') + " mt-8 min-[670px]:flex-col grid min-[670px]:grid-cols-1 grid-cols-2 max-[624px]:grid-cols-1 min gap-4 w-full"}>
      <div className="flex justify-between items-center bg-ctp-surface1 px-3 py-2 rounded-lg">
        <button onClick={() => setShown(!shown)}>
          <i className={"translate-y-0.5 bx bx-sm " + ((!shown) ? 'bx-show' : 'bx-hide')}></i>
        </button>
        {
          (shown) && <p className="font-mono tracking-widest font-normal">SIDEBLOCKS</p>
        }
      </div>

      {
        (shown) && children
      }
    </div>
  )
}