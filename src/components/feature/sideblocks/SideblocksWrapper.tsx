import { ComponentChildren } from "@mae/misc/types";
import { useState } from "react";

export default function SideblockWrapper({children}: {children: ComponentChildren}) {
  return (
    <div className={"mt-8 min-[670px]:flex-col grid min-[1024px]:grid-cols-4 min-[670px]:grid-cols-3 mi-[500px]:grid-cols-2 min gap-4 w-full"}>
      {children}
    </div>
  )
}
