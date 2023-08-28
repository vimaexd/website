import { ComponentChildren } from "@mae/misc/types";

export default function SideblockWrapper({children}: {children: ComponentChildren}) {
  return (
    <div className="min-[1380px]:w-72 mt-8 min-[1380px]:flex-col grid min-[1380px]:grid-cols-1 grid-cols-2 max-[624px]:grid-cols-1 min gap-4 w-full">
      {children}
    </div>
  )
}