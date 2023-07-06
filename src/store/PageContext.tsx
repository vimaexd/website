'use client';
import { NavbarState } from "@mae/components/layout/Navbar";
import { ReactNode, createContext } from "react";

const PageContextDefault = {
  navbar: NavbarState.SOLID
}

export const PageContext = createContext(PageContextDefault)

export default function PageContextWrapper({children}: {children: ReactNode | ReactNode[]}) {
  return (
    <PageContext.Provider value={PageContextDefault}>
      {children}
    </PageContext.Provider>
  )
}