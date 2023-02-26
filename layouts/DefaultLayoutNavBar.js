import React from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'

import HeaderNavBar from '../comps/header/HeaderNavBar';
export default function DefaultLayoutNavBar({children}) {

  return (
    <div className="container pt-5">
      <HeaderNavBar/>
      {children}
    </div>
  )
}
