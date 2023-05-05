import React from 'react'
import Release from './release';
import { GetStaticPropsContext } from 'next';

export default function ReleaseWrapper() {
  return (
    <Release/>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {}
  }
}
