import NavbarBlog from '@mae/components/subnavigation/NavbarBlog';
import { ComponentChildren } from '@mae/misc/types'
import React, { Fragment } from 'react'

export default function layout({children}: {children: ComponentChildren}) {
  return (
    <Fragment>
      <NavbarBlog/>
      {children}
    </Fragment>
  )
}
