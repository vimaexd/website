import NavbarMusic from '@mae/components/subnavigation/NavbarMusic';
import React, { Fragment } from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <Fragment>
      <NavbarMusic/>
      {children}
    </Fragment>
  )
}
