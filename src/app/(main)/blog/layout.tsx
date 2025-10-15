import NavbarBlog from '@mae/components/subnavigation/NavbarBlog';
import { ComponentChildren } from '@mae/misc/types'
import React, { Fragment } from 'react'

export default function layout(props: {children: React.ReactNode}) {
  return (
    <Fragment>
      <NavbarBlog/>
      {props.children}
    </Fragment>
  )
}
